
import os
from PIL import Image

target_dir = r"C:\Users\ggiri\Documents\new-vs-code\website\public\images\blog\best-ai-tools"
quality = 80
max_width = 1200

def compress_images(directory):
    if not os.path.exists(directory):
        print(f"Directory not found: {directory}")
        return

    for filename in os.listdir(directory):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            filepath = os.path.join(directory, filename)
            try:
                with Image.open(filepath) as img:
                    # Resize if too large
                    if img.width > max_width:
                        ratio = max_width / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                        print(f"Resized {filename}")

                    # Save with compression
                    # If PNG and opaque, maybe convert to JPEG? No, keep transparency if any.
                    # But for blog screenshots, JPEG is often better if no transparency.
                    # Let's just optimize in place or save as new? 
                    # Optimize in place for now.
                    
                    if filename.lower().endswith('.png'):
                         # Check if has transparency
                         if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                             img.save(filepath, optimize=True)
                             print(f"Optimized PNG: {filename}")
                         else:
                             # Convert to JPG for better compression if no transparency
                             new_path = os.path.splitext(filepath)[0] + '.jpg'
                             img.convert('RGB').save(new_path, 'JPEG', quality=quality)
                             os.remove(filepath) # Remove original PNG
                             print(f"Converted PNG to JPG: {filename} -> {os.path.basename(new_path)}")
                    elif filename.lower().endswith(('.jpg', '.jpeg')):
                        img.save(filepath, 'JPEG', quality=quality)
                        print(f"Compressed JPG: {filename}")
                        
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    compress_images(target_dir)
