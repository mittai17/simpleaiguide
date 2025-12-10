import docx
import os
import sys

def extract_content(docx_path, output_dir):
    if not os.path.exists(docx_path):
        print(f"Error: File not found at {docx_path}")
        return

    try:
        doc = docx.Document(docx_path)
    except Exception as e:
        print(f"Error opening document: {e}")
        return

    # Create output directory for images
    images_dir = os.path.join(output_dir, "extracted_images")
    if not os.path.exists(images_dir):
        os.makedirs(images_dir)

    text_content = []
    
    # Extract text
    for paragraph in doc.paragraphs:
        if paragraph.text.strip():
            text_content.append(paragraph.text)

    # Extract images
    image_count = 0
    # Access the document part to find related images
    # This varies slightly by python-docx version but this is a common method for InlineShapes/Shapes
    # A more robust way often involves iterating over relationships
    try:
        for rel in doc.part.rels.values():
            if "image" in rel.target_ref:
                image_data = rel.target_part.blob
                # content_type e.g. 'image/jpeg'
                content_type = rel.target_part.content_type
                ext = content_type.split('/')[-1] if content_type else 'png'
                
                # normalize extensions
                if ext == 'jpeg': ext = 'jpg'
                
                image_filename = f"image_{image_count}.{ext}"
                image_path = os.path.join(images_dir, image_filename)
                
                with open(image_path, "wb") as f:
                    f.write(image_data)
                
                print(f"Extracted image: {image_path}")
                image_count += 1
    except Exception as e:
        print(f"Image extraction warning: {e}")

    # Write text to file
    text_output_path = os.path.join(output_dir, "extracted_text.txt")
    with open(text_output_path, "w", encoding="utf-8") as f:
        f.write("\n\n".join(text_content))
    
    print(f"Text extracted to: {text_output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_docx.py <path_to_docx>")
    else:
        # Use current working directory
        extract_content(sys.argv[1], os.getcwd())
