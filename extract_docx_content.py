import zipfile
import os
import xml.etree.ElementTree as ET
import sys

# Usage: python extract_docx_content.py <docx_path> <output_img_dir>

docx_path = sys.argv[1]
output_img_dir = sys.argv[2]

if not os.path.exists(output_img_dir):
    os.makedirs(output_img_dir)

# Namespaces typically used in docx
ns = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
}

print(f"Processing {docx_path}...")

try:
    with zipfile.ZipFile(docx_path, 'r') as z:
        # 1. Extract Images
        print("Extracting images...")
        image_count = 0
        for file in z.namelist():
            if file.startswith('word/media/') and not file.endswith('/'):
                filename = os.path.basename(file)
                target_path = os.path.join(output_img_dir, filename)
                with open(target_path, 'wb') as f:
                    f.write(z.read(file))
                print(f"[IMAGE] Saved {filename}")
                image_count += 1
        
        if image_count == 0:
            print("No images found in word/media/")

        # 2. Extract Text (Attempting to preserve some structure)
        print("\n--- EXTRACTED TEXT STARTS HERE ---")
        xml_content = z.read('word/document.xml')
        root = ET.fromstring(xml_content)
        
        output_text = []
        
        body = root.find('w:body', ns)
        if body is None:
            print("Could not find w:body")
            sys.exit(1)

        for p in body.findall('.//w:p', ns):
            # Check for header style (approximate)
            style_node = p.find('.//w:pPr/w:pStyle', ns)
            style = style_node.attrib.get(f"{{{ns['w']}}}val") if style_node is not None else None
            
            # Extract text elements
            texts = p.findall('.//w:t', ns)
            paragraph_text = ''.join([t.text for t in texts if t.text])
            
            if not paragraph_text.strip():
                continue

            # Simple formatting based on style name (Heading1, etc.)
            prefix = ""
            if style and 'Heading' in style:
                level = style.replace('Heading', '')
                if level.isdigit():
                    prefix = '#' * int(level) + ' '
            
            output_text.append(f"{prefix}{paragraph_text}\n")

    with open('extracted_content.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(output_text))
    print("Text saved to extracted_content.txt")

except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()
