# Quick Start Guide

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/izzyinnis-star/Bestbusbeacon.git
   cd Bestbusbeacon
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **For iOS (Mac only)**:
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the App

### iOS Simulator:
```bash
npm run ios
```

### Android Emulator:
```bash
npm run android
```

### Start Metro Bundler Only:
```bash
npm start
```

## Development

### Run Tests:
```bash
npm test
```

### Run Linter:
```bash
npm run lint
```

### Fix Linting Issues:
```bash
npm run lint -- --fix
```

## Project Structure

```
Bestbusbeacon/
├── App.js                      # Main app with navigation setup
├── src/
│   ├── context/
│   │   └── AppContext.js      # Global state management
│   ├── screens/
│   │   ├── HomeScreen.js      # Main signaling screen
│   │   └── SettingsScreen.js  # Settings and preferences
│   └── utils/
│       ├── theme.js           # Theme colors and translations
│       └── sound.js           # Sound and vibration utilities
├── __tests__/                 # Test files
└── package.json               # Dependencies and scripts
```

## Key Files to Modify

### Adding a New Language:
Edit `src/utils/theme.js` and add a new language object to `translations`:
```javascript
export const translations = {
  // ... existing languages
  de: { // German
    appTitle: 'Best Bus Beacon',
    signalButton: 'BUS SIGNALISIEREN',
    // ... add all keys
  },
};
```

### Changing Theme Colors:
Edit `src/utils/theme.js` in the `getTheme()` function.

### Adding New Settings:
1. Add state variable in `src/context/AppContext.js`
2. Add storage key and load/save functions
3. Add UI controls in `src/screens/SettingsScreen.js`

## Troubleshooting

### Metro Bundler Issues:
```bash
# Clear cache and restart
npm start -- --reset-cache
```

### iOS Build Issues:
```bash
cd ios
pod deintegrate
pod install
cd ..
npm run ios
```

### Android Build Issues:
```bash
cd android
./gradlew clean
cd ..
npm run android
```

## Features Implemented

✅ High-contrast mode (black bg, white text, yellow buttons)
✅ Sound toggle (chime on signal start)
✅ Vibration toggle (haptic feedback on button press)
✅ Multi-language support (English, Spanish, French)
✅ Persistent settings (saved across app restarts)
✅ Simple, accessible UI
✅ Full navigation between screens

## Testing Accessibility Features

1. **Test High Contrast Mode**:
   - Go to Settings
   - Toggle "High Contrast Mode"
   - Verify: Black background, white text, yellow buttons

2. **Test Sound**:
   - Ensure "Sound" is ON in Settings
   - Press "SIGNAL BUS" button
   - Verify: Chime plays (console log if no sound hardware)

3. **Test Vibration**:
   - Ensure "Vibration" is ON in Settings
   - Press any button
   - Verify: Device vibrates

4. **Test Language**:
   - Go to Settings
   - Select different language
   - Verify: All text changes to selected language

5. **Test Persistence**:
   - Change settings (e.g., enable high contrast, change language)
   - Force close the app
   - Reopen the app
   - Verify: Settings are preserved

## Documentation

- **README.md**: General overview and installation
- **FEATURES.md**: Detailed feature implementation guide
- **QUICKSTART.md**: This file - quick reference guide

## Support

For issues or questions, please open an issue on GitHub:
https://github.com/izzyinnis-star/Bestbusbeacon/issues
