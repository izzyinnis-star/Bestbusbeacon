# BusBeacon

A Thunkable mobile app that helps bus riders signal drivers that they are waiting, with comprehensive accessibility and multilingual support.

## Overview

BusBeacon is designed to improve communication between bus riders and drivers, especially in situations where visibility is limited or riders have accessibility needs. The app allows users to send a visual and/or audio beacon signal to indicate their presence at a bus stop.

## Features

### Core Functionality
- **Signal Beacon**: Large, easy-to-press button to activate beacon mode
- **Visual Beacon**: Bright, flashing screen with high contrast colors
- **Audio Beacon**: Optional sound alerts for drivers
- **Location Awareness**: Shows nearby bus routes and stops
- **Real-time Status**: Displays active beacon status

### Accessibility Features
- **Screen Reader Support**: Full VoiceOver/TalkBack compatibility
- **High Contrast Mode**: Enhanced visibility for users with visual impairments
- **Large Touch Targets**: All buttons meet WCAG 2.1 guidelines (minimum 44x44 points)
- **Voice Commands**: Hands-free beacon activation
- **Haptic Feedback**: Vibration confirmation for actions
- **Adjustable Text Size**: Scalable fonts for readability

### Multilingual Support
- **Language Options**: English, Spanish, French, Mandarin, Arabic
- **Auto-Detection**: Automatically detects device language
- **Easy Switching**: In-app language selector
- **Localized Content**: All UI elements and messages translated

## App Structure

### Screens

1. **Home Screen**
   - Main beacon activation button
   - Current location display
   - Nearby bus routes
   - Settings access

2. **Beacon Active Screen**
   - Full-screen visual beacon with flashing colors
   - Cancel/stop button
   - Timer showing beacon duration
   - Battery status indicator

3. **Settings Screen**
   - Language selection
   - Accessibility options
   - Beacon preferences (visual/audio/both)
   - Location permissions
   - Notification settings

4. **Help Screen**
   - Tutorial for first-time users
   - FAQ section
   - Contact support
   - Privacy policy

## Technical Requirements

### Platform
- Built with Thunkable X
- iOS 12.0+ and Android 6.0+ support
- Responsive design for tablets and phones

### Permissions Required
- Location Services (for nearby stop detection)
- Notifications (for beacon alerts)
- Camera Flash (optional, for additional beacon visibility)

### Data Storage
- Local storage for user preferences
- No personal data collected
- Privacy-first design

## Installation

1. Open Thunkable X at https://x.thunkable.com
2. Import this project or create a new project
3. Follow the implementation guide in [DESIGN.md](DESIGN.md)
4. Test on Thunkable Live app
5. Publish to iOS App Store and Google Play Store

## Usage

1. Open the BusBeacon app
2. Grant location permissions when prompted
3. The app shows your current location and nearby bus stops
4. Press the large "Activate Beacon" button when you see your bus approaching
5. Your screen will flash with high-visibility colors
6. Optional audio alert will sound
7. Press "Stop Beacon" when the bus stops for you

## Development

See [DESIGN.md](DESIGN.md) for detailed screen designs, component specifications, and implementation instructions.

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting pull requests.

## License

MIT License - See LICENSE file for details

## Support

For questions or issues, please open an issue on GitHub or contact support through the app's Help screen.

## Version History

- v1.0.0 (Initial Release)
  - Basic beacon functionality
  - Multilingual support (5 languages)
  - Accessibility features
  - Location-based bus stop detection