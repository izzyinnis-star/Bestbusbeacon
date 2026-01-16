# Assets Directory

This directory contains the application assets:

- `icon.png` - App icon (1024x1024) ✓ Created
- `splash.png` - Splash screen image ✓ Created
- `adaptive-icon.png` - Android adaptive icon (1024x1024) ✓ Created
- `favicon.png` - Web favicon ✓ Created
- `chime.mp3` - Sound effect for bus signal feedback (REQUIRED - not included)

## Adding Audio File

The app requires a `chime.mp3` file for sound feedback. To add one:

1. Find or create a short audio file (0.5-2 seconds recommended)
2. Convert it to MP3 format if needed
3. Save it as `chime.mp3` in this directory

**Note**: The app has error handling for missing audio files, so it will function without this file, but sound feedback will not work.

## Replacing Placeholder Images

The included images are simple blue placeholders. For production use:

1. Replace `icon.png` with your app icon (1024x1024, transparent or solid background)
2. Replace `splash.png` with your splash screen (1242x2436 or similar)
3. Replace `adaptive-icon.png` with your Android icon (1024x1024)
4. Replace `favicon.png` with your web favicon (48x48)

You can use design tools like Figma, Adobe Illustrator, or online icon generators to create professional assets.
