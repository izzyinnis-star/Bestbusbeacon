# Best Bus Beacon

A mobile application for signaling buses with visual and haptic feedback.

## Features

### Home Screen
- Large "Signal Bus" button that toggles signaling state
- Visual status indicator showing "Not Signaling" or "Signaling Active"
- Dynamic button color change (grey → bright yellow when active)
- Pulsing animation when signaling is active
- Sound and vibration feedback (if enabled)
- Quick access to Settings

### Settings Screen
- **Language Toggle**: Switch between English and French
- **High-Contrast Mode**: Enhanced visibility for users with visual impairments
- **Sound Toggle**: Enable/disable audio feedback
- **Vibration Toggle**: Enable/disable haptic feedback
- **Test Feedback**: Test sound and vibration settings
- All settings are persisted across app sessions

## Technology Stack

- **React Native** with Expo
- **Expo Haptics** for vibration feedback
- **Expo AV** for audio playback
- **React Navigation** for screen navigation
- **AsyncStorage** for persistent settings

## Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- Expo CLI (install with `npm install -g expo-cli`)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/izzyinnis-star/Bestbusbeacon.git
cd Bestbusbeacon
```

2. Install dependencies:
```bash
npm install
```

3. Add required assets to the `assets/` directory:
   - `icon.png` (1024x1024)
   - `splash.png` (1242x2436 or similar)
   - `adaptive-icon.png` (1024x1024)
   - `favicon.png` (48x48)
   - `chime.mp3` (short audio file for notification sound)

### Running the App

Start the development server:
```bash
npm start
```

Run on specific platforms:
```bash
npm run android  # Run on Android
npm run ios      # Run on iOS
npm run web      # Run in web browser
```

### Using Expo Go

1. Install Expo Go on your mobile device
2. Scan the QR code shown in the terminal
3. The app will load on your device

## Project Structure

```
Bestbusbeacon/
├── assets/              # Images, sounds, and other assets
├── context/             # React Context for state management
│   └── SettingsContext.js
├── screens/             # Application screens
│   ├── HomeScreen.js
│   └── SettingsScreen.js
├── utils/               # Utility functions
│   └── translations.js  # Localization strings
├── App.js               # Main application component
├── index.js             # Application entry point
├── package.json         # Dependencies and scripts
├── app.json             # Expo configuration
└── babel.config.js      # Babel configuration
```

## Localization

The app supports two languages:
- English (en)
- French (fr)

Translations are stored in `utils/translations.js` and can be easily extended for additional languages.

## Accessibility

- High-contrast mode for improved visibility
- Configurable audio and haptic feedback
- Clear visual indicators and status messages
- Language support for English and French speakers

## License

MIT