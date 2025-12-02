import re

with open("published_doc.html", "r", encoding="utf-8") as f:
    html = f.read()

img_tags = re.findall(r'<img[^>]+src="([^">]+)"', html)
parts = re.split(r'<img[^>]+>', html)

with open("urls.txt", "w", encoding="utf-8") as f:
    for i, src in enumerate(img_tags):
        f.write(f"Image {i}: {src}\n")
        if i + 1 < len(parts):
            clean_text = re.sub(r'<[^>]+>', '', parts[i+1])
            # Replace newlines with spaces for single line context
            clean_text = clean_text.replace('\n', ' ').strip()
            f.write(f"Context: {clean_text[:100]}\n")
        f.write("-" * 20 + "\n")
