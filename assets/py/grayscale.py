from PIL import Image

def convert_to_grayscale(image_path, output_path):
    with Image.open(image_path) as image:
        grayscale_image = image.convert('L')
        grayscale_image.save(output_path)

# Example usage
convert_to_grayscale('/images/dolphin.png', '/images/dolphin-grayscale.png')