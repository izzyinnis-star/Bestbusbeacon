# Assets Directory

This directory contains the assets required for the BusBeacon Thunkable app.

## Directory Structure

```
assets/
├── images/
│   ├── app_icon.png (1024x1024)
│   ├── splash_screen.png (2048x2048)
│   └── tutorial/
│       ├── step1.png
│       ├── step2.png
│       ├── step3.png
│       └── step4.png
├── sounds/
│   └── beacon_alert.mp3
└── fonts/
    └── (System fonts used)
```

## App Icon Requirements

### app_icon.png
- **Size**: 1024x1024 pixels
- **Format**: PNG with transparency
- **Design Guidelines**:
  - Simple, recognizable symbol
  - High contrast for visibility
  - Works well at small sizes
  - Represents beacon/signal concept
  
**Suggested Design**:
- Yellow/orange circular beacon with radiating waves
- Bus icon with signal indicator
- Location pin with beacon symbol

**Design Specifications**:
```
Background: Gradient (Yellow #FFEB3B to Orange #FF9800)
Icon Symbol: White beacon/signal waves
Border: None (full bleed)
Style: Modern, flat design
```

## Splash Screen Requirements

### splash_screen.png
- **Size**: 2048x2048 pixels (or 3000x2000 for wider format)
- **Format**: PNG
- **Design Guidelines**:
  - App logo/icon centered
  - App name "BusBeacon"
  - Tagline: "Signal Your Ride"
  - Simple, clean design
  - Fast-loading

**Design Specifications**:
```
Background: White or light gradient
Logo: Centered, ~40% of screen height
Text: "BusBeacon" below logo
Tagline: "Signal Your Ride" (smaller text)
Footer: Optional loading indicator
```

## Sound Assets

### beacon_alert.mp3
- **Duration**: 2 seconds
- **Format**: MP3 (compressed)
- **Sample Rate**: 44.1 kHz
- **Bit Rate**: 128 kbps
- **Channels**: Mono (sufficient for alert)
- **Volume**: Normalized to -3dB

**Sound Design**:
- Attention-getting but not annoying
- Clear, distinct tone
- Suitable for looping
- Similar to notification or alert sound
- Consider accessibility (not too high-pitched)

**Suggested Sound**:
- Rising two-tone chime
- Or: Brief siren-like alert
- Or: Bell/ding sound
- Duration: 1-2 seconds
- Loops seamlessly

### Alternative: Use Thunkable Built-in Sounds

Instead of custom audio, you can use Thunkable's built-in notification sounds:
- "notification_simple-01"
- "notification_simple-02"
- "ui_alert"

## Tutorial Images (Optional)

### Step-by-step tutorial screenshots

1. **step1.png** - "Grant Location Permission"
   - Screenshot showing location permission dialog
   - Annotation showing "Tap Allow"

2. **step2.png** - "Activate Beacon"
   - Screenshot of home screen
   - Arrow pointing to "ACTIVATE BEACON" button

3. **step3.png** - "Signal Active"
   - Screenshot of beacon active screen
   - Text: "Show this to the bus driver"

4. **step4.png** - "Stop Beacon"
   - Screenshot showing stop button
   - Text: "Press when driver sees you"

**Image Specifications**:
- Size: 1080x1920 (phone portrait)
- Format: PNG
- Annotations: Clear, visible arrows/text
- Style: Consistent across all steps

## Icons and Graphics

### In-app Icons
Use built-in Thunkable icons or emoji:
- Location: 📍 (U+1F4CD)
- Settings: ⚙️ (U+2699)
- Help: ❓ (U+2753)
- Beacon: 🔆 (U+1F506)
- Menu: ☰ (hamburger menu icon)

### Navigation Icons
- Back arrow: ← (U+2190)
- Forward arrow: → (U+2192)
- Checkmark: ✓ (U+2713)
- X/Close: ✗ (U+2717)

## Creating Assets

### For App Icon

**Option 1: Design Tools**
- Figma (free): https://figma.com
- Canva (free): https://canva.com
- Adobe Illustrator (paid)

**Option 2: Icon Generators**
- App Icon Generator: https://appicon.co
- makeappicon.com
- Icon Kitchen: https://icon.kitchen

**Design Template**:
1. Create 1024x1024 canvas
2. Add gradient background (yellow to orange)
3. Add white beacon symbol (concentric circles or waves)
4. Export as PNG

### For Splash Screen

**Template**:
1. Create 2048x2048 canvas (or 3000x2000)
2. White/light gradient background
3. Center app icon (scaled to ~800x800)
4. Add "BusBeacon" text below (60px, bold)
5. Add tagline "Signal Your Ride" (36px, regular)
6. Export as PNG

### For Sound

**Option 1: Create Custom Sound**
- Audacity (free): https://audacityteam.org
- GarageBand (Mac, free)
- FL Studio (paid)

**Steps**:
1. Record or generate tone
2. Trim to 1-2 seconds
3. Normalize volume
4. Fade in/out for smooth loop
5. Export as MP3 (128 kbps)

**Option 2: Use Free Sounds**
- Freesound.org (CC licensed)
- Zapsplat.com (free tier)
- Search: "notification sound", "alert sound", "chime"

**Option 3: Use Thunkable Built-in**
- No file needed
- Select from Thunkable's sound library

## Asset Optimization

### Image Optimization
- Use PNG for icons (supports transparency)
- Use JPEG for photos (smaller file size)
- Compress with TinyPNG.com or similar
- Target file size: <500KB for icons, <1MB for splash

### Sound Optimization
- Use MP3 format (widely supported)
- Mono channel (smaller file size)
- 128 kbps bit rate (good quality, reasonable size)
- Trim silence from beginning/end
- Target file size: <100KB

## Accessibility Considerations

### Visual Assets
- High contrast colors (4.5:1 ratio minimum)
- Clear, simple designs
- Recognizable at small sizes
- Works in grayscale (for colorblind users)

### Audio Assets
- Not too high-pitched (hearing accessibility)
- Clear and distinct
- Not startling or jarring
- Alternative: vibration for deaf users

## Localization

### App Icon
- Use universal symbols (no text)
- Avoid culturally-specific imagery
- Test recognition in different cultures

### Splash Screen
- Keep text minimal
- Consider translating app name tagline
- Or use text-free design

## Upload to Thunkable

### Steps:
1. Open your BusBeacon project in Thunkable
2. Click "Assets" in the left sidebar
3. Click "Upload" button
4. Select files from your computer
5. Assets will be available in component properties

### File Management:
- Organize assets with clear names
- Delete unused assets to reduce app size
- Keep original files backed up locally
- Document asset sources (licenses)

## Licenses and Attribution

### Required:
- If using free sounds/images, include attribution
- Check license requirements (CC, MIT, etc.)
- Store licenses in `/docs/licenses.txt`

### Original Assets:
- All original assets are MIT licensed
- Same license as main project
- Free to use, modify, distribute

## File Naming Conventions

- Use lowercase
- Use underscores for spaces
- Be descriptive: `beacon_alert.mp3` not `sound1.mp3`
- Include size for images: `icon_1024.png`
- Version if needed: `splash_v2.png`

## Future Assets (v2.0)

Planned for future versions:
- Animated beacon GIF
- Multiple beacon color themes
- Custom notification sounds
- Video tutorial files
- Localized splash screens
- Smartwatch app icon

---

**Note**: Since this is a Thunkable app, all assets are uploaded through the Thunkable web interface. This directory serves as documentation and a placeholder for asset specifications. The actual asset files should be created and uploaded separately to your Thunkable project.
