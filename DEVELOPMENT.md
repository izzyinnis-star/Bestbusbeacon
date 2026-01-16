# Development Guide

## Getting Started

### Initial Setup

1. Ensure you have Node.js (v14+) and npm installed
2. Install Expo CLI globally:
   ```bash
   npm install -g expo-cli
   ```

3. Clone and install dependencies:
   ```bash
   git clone https://github.com/izzyinnis-star/Bestbusbeacon.git
   cd Bestbusbeacon
   npm install
   ```

### Running the Application

#### Development Server

Start the Expo development server:
```bash
npm start
```

This will open the Expo Dev Tools in your browser and display a QR code.

#### Testing on Physical Devices

1. **iOS**: 
   - Install Expo Go from the App Store
   - Scan the QR code with your camera app
   - The app will open in Expo Go

2. **Android**:
   - Install Expo Go from Google Play Store
   - Scan the QR code from within the Expo Go app
   - The app will load

#### Testing on Simulators/Emulators

```bash
npm run ios      # Opens in iOS Simulator (macOS only)
npm run android  # Opens in Android Emulator
npm run web      # Opens in web browser (limited mobile features)
```

## Application Features Testing

### Home Screen Testing

1. **Signal Bus Button**
   - Press the button to toggle signaling state
   - Verify button color changes from grey to bright yellow
   - Check status text changes from "Not Signaling" to "Signaling Active"
   - Observe pulsing animation when active
   - Feel vibration feedback (on physical device)
   - Hear chime sound (if audio file is added)

2. **Settings Navigation**
   - Press "Settings" button
   - Verify navigation to Settings screen

3. **Language Updates**
   - Change language in Settings
   - Return to Home screen
   - Verify all text updates to selected language

### Settings Screen Testing

1. **Language Toggle**
   - Toggle between English and French
   - Verify all UI text updates immediately
   - Check that selection persists after app restart

2. **High-Contrast Mode**
   - Toggle high-contrast mode on/off
   - Verify background changes to black
   - Verify text changes to white
   - Verify button colors adjust appropriately
   - Navigate to Home screen and verify consistency

3. **Sound Toggle**
   - Turn sound off
   - Press "Test Feedback" - no sound should play
   - Turn sound on
   - Press "Test Feedback" - sound should play

4. **Vibration Toggle**
   - Turn vibration off
   - Press "Test Feedback" - no vibration should occur
   - Turn vibration on
   - Press "Test Feedback" - device should vibrate

5. **Test Feedback Button**
   - Press the button
   - Verify sound plays (if enabled)
   - Verify vibration occurs (if enabled)

6. **Back Navigation**
   - Press "Back" button
   - Verify return to Home screen

### Persistence Testing

1. Close and reopen the app
2. Verify all settings are retained:
   - Language selection
   - High-contrast mode
   - Sound enabled/disabled
   - Vibration enabled/disabled

## Code Structure

### Key Components

- **App.js**: Main application entry point with navigation setup
- **screens/HomeScreen.js**: Main signaling interface
- **screens/SettingsScreen.js**: Configuration interface
- **context/SettingsContext.js**: Global state management for settings
- **utils/translations.js**: Localization strings for English and French

### State Management

Settings are stored using AsyncStorage and managed through React Context:
- Changes are immediately persisted
- Settings are loaded on app startup
- All components access settings through `useSettings()` hook

### Animations

The pulsing animation on the Home screen uses React Native's Animated API:
- Scales from 1.0 to 1.2 and back
- Loops continuously while signaling is active
- Smooth easing for natural feel

## Troubleshooting

### Common Issues

1. **"Cannot find module" errors**
   - Run `npm install` to ensure all dependencies are installed
   - Clear npm cache: `npm cache clean --force`

2. **Assets not loading**
   - Ensure all required assets exist in the `assets/` directory
   - Restart the Expo development server

3. **Sound not playing**
   - Add a valid `.mp3` file as `assets/chime.mp3`
   - Check that sound is enabled in Settings
   - Note: Sound may not work in web browser

4. **Vibration not working**
   - Vibration only works on physical devices
   - Ensure vibration is enabled in Settings
   - Check device's vibration settings

## Building for Production

### Android

```bash
expo build:android
```

### iOS

```bash
expo build:ios
```

For detailed build instructions, see [Expo's documentation](https://docs.expo.dev/distribution/building-standalone-apps/).

## Extending the Application

### Adding New Languages

1. Edit `utils/translations.js`
2. Add new language object with all required keys
3. Update Settings screen to include new language option

### Customizing Colors

Colors are defined in each screen's StyleSheet:
- Inactive button: `#9E9E9E` (grey)
- Active button: `#FFD700` (yellow)
- Settings button: `#2196F3` (blue)
- High-contrast mode uses black/white/yellow

### Adding More Settings

1. Add new state in `SettingsContext.js`
2. Add UI control in `SettingsScreen.js`
3. Use the setting in relevant screens via `useSettings()` hook

## Notes

- The audio file (`chime.mp3`) is a placeholder. Add your own audio file for production use.
- Asset images are simple placeholders. Replace with professional designs for production.
- Web version has limited support for mobile features (vibration, some audio APIs).
