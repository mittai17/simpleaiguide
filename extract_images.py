from PIL import Image
import os

def extract_image_from_screenshot(screenshot_path, output_path):
    try:
        img = Image.open(screenshot_path)
        img = img.convert("RGB")
        width, height = img.size
        pixels = img.load()

        # Heuristic: Find the largest non-white segment
        is_image_row = []
        for y in range(height):
            non_white_count = 0
            for x in range(0, width, 10):
                r, g, b = pixels[x, y]
                if r < 250 or g < 250 or b < 250:
                    non_white_count += 1
            is_image_row.append(non_white_count > (width / 10 * 0.1))

        segments = []
        start_y = None
        for y, is_img in enumerate(is_image_row):
            if is_img and start_y is None:
                start_y = y
            elif not is_img and start_y is not None:
                if (y - start_y) > 100: # Min height 100px
                    segments.append((start_y, y))
                start_y = None
        
        if start_y is not None and (height - start_y) > 100:
            segments.append((start_y, height))

        if not segments:
            print(f"No image found in {screenshot_path}")
            return

        # Take the largest segment
        segments.sort(key=lambda s: s[1] - s[0], reverse=True)
        start, end = segments[0]

        # Find horizontal bounds
        left = 0
        for x in range(width):
            has_content = False
            for y in range(start, end, 5):
                r, g, b = pixels[x, y]
                if r < 250 or g < 250 or b < 250:
                    has_content = True
                    break
            if has_content:
                left = x
                break
                
        right = width
        for x in range(width - 1, -1, -1):
            has_content = False
            for y in range(start, end, 5):
                r, g, b = pixels[x, y]
                if r < 250 or g < 250 or b < 250:
                    has_content = True
                    break
            if has_content:
                right = x
                break
        
        crop = img.crop((left, start, right, end))
        crop.save(output_path)
        print(f"Saved extracted image to {output_path}")

    except Exception as e:
        print(f"Error processing {screenshot_path}: {e}")

artifacts_dir = r"C:\Users\ggiri\.gemini\antigravity\brain\c1109857-ac7f-4e7f-9544-33a58ddac0bb"
output_dir = r"c:\Users\ggiri\Documents\new-vs-code\website\public\images\learn\ai-basics"

screenshots = [
    ("google_doc_module_1_5_1764692303637.png", "module-1-5.png"),
    ("google_doc_module_1_6_1764692317034.png", "module-1-6.png"),
    ("google_doc_module_1_7_1764692330537.png", "module-1-7.png"),
    ("google_doc_module_1_8_1764692344717.png", "module-1-8.png"),
    ("google_doc_module_1_9_1764692358756.png", "module-1-9.png"),
    ("google_doc_module_1_10_1764692372002.png", "module-1-10.png"),
]

for src_name, dest_name in screenshots:
    src_path = os.path.join(artifacts_dir, src_name)
    dest_path = os.path.join(output_dir, dest_name)
    extract_image_from_screenshot(src_path, dest_path)
