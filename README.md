# Best Bus Beacon 🚌

An accessible mobile application for signaling buses, with comprehensive accessibility features including high-contrast mode, sound, and vibration support.

## Features

### Core Functionality
- **Signal Toggle**: Large, easy-to-press button to signal buses
- **Visual Feedback**: Clear status indication when signaling is active
- **Settings Management**: Persistent storage of user preferences

### Accessibility System

#### High-Contrast Mode
When enabled, the app switches to an accessibility-optimized theme:
- **Background**: Black (#000000)
- **Text**: White (#FFFFFF)
- **Buttons**: Yellow (#FFFF00) with black text (#000000)

#### Sound & Vibration
- **Sound Toggle**: Plays a chime when signaling starts (when enabled)
- **Vibration Toggle**: Provides haptic feedback on button presses (when enabled)

#### Multi-Language Support
- English (en)
- Spanish (es)
- French (fr)

## Technical Architecture

### Global State Management
The app uses React Context API to manage global state:
- `isSignaling`: Boolean flag for signal status
- `language`: Current language preference
- `highContrast`: High-contrast mode toggle
- `soundEnabled`: Sound toggle
- `vibrationEnabled`: Vibration toggle

All settings are persisted using AsyncStorage and loaded on app start.

### Screen Components

#### Home Screen
- Displays the app title
- Shows signaling status
- Main signal button (toggle)
- Settings navigation button

#### Settings Screen
- Language selection (English, Spanish, French)
- High-contrast mode toggle
- Sound enable/disable toggle
- Vibration enable/disable toggle
- Back to home button

### File Structure
```
Bestbusbeacon/
├── App.js                          # Main app component with navigation
├── index.js                        # App entry point
├── app.json                        # App configuration
├── package.json                    # Dependencies
├── babel.config.js                 # Babel configuration
├── src/
│   ├── context/
│   │   └── AppContext.js          # Global state management
│   ├── screens/
│   │   ├── HomeScreen.js          # Home screen component
│   │   └── SettingsScreen.js      # Settings screen component
│   └── utils/
│       ├── theme.js               # Theme and translations
│       └── sound.js               # Sound and vibration utilities
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- React Native CLI
- iOS: Xcode and CocoaPods
- Android: Android Studio and SDK

### Setup

1. Clone the repository:
```bash
git clone https://github.com/izzyinnis-star/Bestbusbeacon.git
cd Bestbusbeacon
```

2. Install dependencies:
```bash
npm install
```

3. iOS setup (Mac only):
```bash
cd ios
pod install
cd ..
```

4. Run the app:

For iOS:
```bash
npm run ios
```

For Android:
```bash
npm run android
```

## Usage

### Signaling a Bus
1. Open the app
2. Press the large circular "SIGNAL BUS" button
3. The button will change to "STOP SIGNAL" and show "SIGNALING..." status
4. If sound is enabled, a chime will play
5. If vibration is enabled, the device will vibrate
6. Press again to stop signaling

### Changing Settings
1. From the home screen, press the "Settings" button
2. Select your preferred language (English, Spanish, or French)
3. Toggle high-contrast mode on/off
4. Toggle sound on/off
5. Toggle vibration on/off
6. Press "Home" to return to the main screen
7. All settings are saved automatically

## Accessibility Features

### For Users with Visual Impairments
- **High-contrast mode**: Provides maximum color contrast for better visibility
- **Large buttons**: Easy-to-target touch areas
- **Clear visual status**: Obvious indication of app state

### For Users with Hearing Impairments
- **Vibration feedback**: Haptic confirmation of actions
- **Visual status indicators**: No reliance on sound alone

### For All Users
- **Simple, intuitive interface**: Minimal complexity
- **Persistent settings**: Preferences remembered between sessions
- **Multi-language support**: Interface in user's preferred language

## Development

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

### Building for Production

iOS:
```bash
npm run ios --configuration Release
```

Android:
```bash
npm run android --variant=release
```

## Requirements Met

✅ High-contrast mode with black background, white text, and yellow buttons  
✅ Sound toggle with chime on signaling  
✅ Vibration toggle with haptic feedback  
✅ Home screen with signal toggle button  
✅ Settings screen with all accessibility options  
✅ Global variable management with persistence  
✅ All screens read from stored variables on start  
✅ Clear naming conventions  
✅ Simple, accessible, beginner-friendly UI  

## License

MIT

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Support

For issues or questions, please open an issue on GitHub.