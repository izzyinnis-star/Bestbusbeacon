# BusBeacon

A Thunkable mobile app that helps bus riders signal drivers with clear, flashing visual signals for "Pick Me Up" or "Not This Bus" messages.

## Overview

BusBeacon is designed to improve communication between bus riders and drivers. The app provides full-screen flashing signals that are highly visible from a distance, helping drivers identify waiting passengers and their intentions. Riders can signal "Pick Me Up" (green) or "Not This Bus" (red), with optional personalization using their bus number.

## Features

### Core Functionality
- **Pick Me Up Signal**: Full-screen green flashing signal with animated text (PICK → ME → UP)
- **Not This Bus Signal**: Full-screen red flashing signal to indicate you're waiting for a different bus
- **Bus Number Display**: Optional personalization - display your specific bus number during flashing
- **Strong Signal Mode**: Enhanced visibility mode with larger fonts and bolder text
- **Tap to Stop**: Tap anywhere on the flashing screen to stop the signal
- **Landscape Support**: Font sizes automatically adjust for landscape orientation

### Accessibility Features
- **High Contrast Flashing**: Alternating background and text colors for maximum visibility
- **Large Text Display**: Large fonts (48-72px) readable from a distance
- **Vibration Feedback**: Optional haptic feedback during flashing (especially in Strong Signal Mode)
- **Sound Feedback**: Optional audio beeps or chimes with each flash
- **Brightness Boost**: Automatically maximizes screen brightness during signal

### Personalization
- **Custom Bus Number**: Enter your bus number to display instead of animated text
- **Strong Signal Mode**: Toggle for enhanced visibility (larger fonts, bolder text)
- **Settings Persistence**: Preferences saved between sessions

## App Structure

### Screens

1. **Main Screen**
   - Title: "BusBeacon"
   - Three main buttons:
     - **Pick Me Up** (green) - Starts green flashing signal
     - **Not This Bus** (red) - Starts red flashing signal
     - **Settings** (gray) - Opens settings screen
   - Optional bus icon/image

2. **Pick Me Up Screen**
   - Full-screen flashing display
   - Green background alternating with white
   - Text cycles: "PICK" → "ME" → "UP" (or shows bus number)
   - Font size: 48px (portrait) or 64px (landscape)
   - Strong Signal Mode: +8px font boost, bold text
   - Tap anywhere to stop and return to main screen

3. **Not This Bus Screen**
   - Full-screen flashing display
   - Red background alternating with white
   - Text: "NOT THIS BUS"
   - Font size: 48px (portrait) or 64px (landscape)
   - Strong Signal Mode: +8px font boost, bold text
   - Tap anywhere to stop and return to main screen

4. **Settings Screen**
   - Toggle: Strong Signal Mode (on/off)
   - Text Input: Bus Number (optional)
   - Save button to apply settings
   - Returns to main screen after save

5. **Stopped Screen** (Optional)
   - Confirmation screen shown after tapping to stop
   - Returns to main screen

## Technical Requirements

### Platform
- Built with Thunkable X
- iOS 12.0+ and Android 6.0+ support
- Responsive design for portrait and landscape orientations

### Global Variables
- `busNumber` (text): User's custom bus number (empty by default)
- `strongSignalMode` (boolean): Enhanced visibility toggle (false by default)
- `isFlashing` (boolean): Current flashing state
- `flashStep` (number): Current step in animation cycle (for PICK→ME→UP)
- `isGreen` (boolean): Current background color state (for alternating)

### Timers
- `flashTimer`: 500ms interval for flashing animation
- `notThisTimer`: 500ms interval for "Not This Bus" flashing

### Data Storage
- Local storage for user preferences (bus number, strong signal mode)
- Settings persist between app sessions
- No personal data collected or transmitted

## Installation

1. Open Thunkable X at https://x.thunkable.com
2. Create a new project named "BusBeacon"
3. Follow the 15-step build plan in [DESIGN.md](DESIGN.md)
4. Test on Thunkable Live app
5. Publish to iOS App Store and Google Play Store

## Usage

1. Open the BusBeacon app
2. **(Optional)** Tap "Settings" to:
   - Enter your bus number (e.g., "42A")
   - Enable Strong Signal Mode for enhanced visibility
   - Tap "Save" to apply
3. When you want a bus to pick you up:
   - Tap "Pick Me Up" (green button)
   - Full-screen green flashing begins
   - If bus number is set, it displays; otherwise shows "PICK → ME → UP"
   - Tap anywhere on screen to stop
4. When you want to signal you're waiting for a different bus:
   - Tap "Not This Bus" (red button)
   - Full-screen red flashing begins with "NOT THIS BUS" message
   - Tap anywhere on screen to stop

## Development

See [DESIGN.md](DESIGN.md) for the complete 15-step build plan with detailed implementation instructions.

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting pull requests.

## License

MIT License - See LICENSE file for details

## Support

For questions or issues, please open an issue on GitHub or contact support through the app's Help screen.

## Version History

- v1.0.0 (Initial Release)
  - Pick Me Up flashing signal (green)
  - Not This Bus flashing signal (red)
  - Custom bus number display
  - Strong Signal Mode for enhanced visibility
  - Landscape orientation support
  - Optional vibration and sound feedback