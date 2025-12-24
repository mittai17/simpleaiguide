
import os
import sys
from docx import Document
from docx.document import Document as _Document
from docx.oxml.text.paragraph import CT_P
from docx.oxml.table import CT_Tbl
from docx.table import _Cell, Table
from docx.text.paragraph import Paragraph

def iter_block_items(parent):
    """
    Generate a reference to each paragraph and table child within parent, in document order.
    """
    if isinstance(parent, _Document):
        parent_elm = parent.element.body
    elif isinstance(parent, _Cell):
        parent_elm = parent._tc
    elif isinstance(parent, Paragraph):
        parent_elm = parent._p
    else:
        raise ValueError("something's not right")

    for child in parent_elm.iterchildren():
        if isinstance(child, CT_P):
            yield Paragraph(child, parent)
        elif isinstance(child, CT_Tbl):
            yield Table(child, parent)

def extract_content(docx_path, output_dir, image_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    if not os.path.exists(image_dir):
        os.makedirs(image_dir)

    document = Document(docx_path)
    
    markdown_content = ""
    image_counter = 1
    
    # Extract images from relationships
    rels = document.part.rels
    image_map = {} # rId -> filename

    for rel in rels.values():
        if "image" in rel.target_ref:
            img_ext = rel.target_ref.split('.')[-1]
            img_filename = f"image_{image_counter}.{img_ext}"
            img_path = os.path.join(image_dir, img_filename)
            
            with open(img_path, "wb") as f:
                f.write(rel.target_part.blob)
            
            image_map[rel.rId] = img_filename
            image_counter += 1

    print(f"Extracted {image_counter-1} images.")

    # iterate over paragraphs
    for block in iter_block_items(document):
        if isinstance(block, Paragraph):
            text = block.text.strip()
            style = block.style.name
            
            if not text:
                continue

            # Basic styling mapping
            if 'Heading 1' in style:
                markdown_content += f"# {text}\n\n"
            elif 'Heading 2' in style:
                markdown_content += f"## {text}\n\n"
            elif 'Heading 3' in style:
                markdown_content += f"### {text}\n\n"
            elif 'Heading 4' in style:
                markdown_content += f"#### {text}\n\n"
            elif 'List Bullet' in style:
                markdown_content += f"- {text}\n"
            elif 'List Number' in style:
                markdown_content += f"1. {text}\n"
            else:
                markdown_content += f"{text}\n\n"

        elif isinstance(block, Table):
            markdown_content += "\n[TABLE FOUND - generic extraction]\n"
            for row in block.rows:
                row_data = []
                for cell in row.cells:
                    row_data.append(cell.text.strip())
                markdown_content += " | ".join(row_data) + "\n"
            markdown_content += "\n"

    # Append list of images at the end
    markdown_content += "\n\n## Extracted Images\n"
    for rId, filename in image_map.items():
        markdown_content += f"![{filename}]({filename})\n"

    with open(os.path.join(output_dir, "extracted_content.md"), "w", encoding="utf-8") as f:
        f.write(markdown_content)

if __name__ == "__main__":
    docx_path = r"C:\Users\ggiri\Documents\sample-temp.docx"
    output_dir = "extracted_data"
    image_dir = os.path.join(output_dir, "images")
    extract_content(docx_path, output_dir, image_dir)
