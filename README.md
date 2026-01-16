# Best Bus Beacon

A multilingual bus tracking application with English (EN) and French (FR) language support, featuring high-contrast mode for accessibility.

## Features

### 1. Multilingual System
- **Language Support**: English (EN) and French (FR)
- **Stored Variable**: `language` with values "EN" or "FR"
- **Instant Updates**: All app text updates immediately when language changes
- **Complete Coverage**: All button labels, status messages, and settings labels are translated

### 2. Settings Management
- **Persistent Storage**: All settings stored in localStorage
- **Immediate Application**: Settings changes apply instantly across all screens
- **Available Settings**:
  - Language (EN/FR)
  - High Contrast Mode
  - Dark Mode
  - Notifications
  - Auto Refresh
  - Font Size (Small/Medium/Large)

### 3. High-Contrast Mode
- **Accessibility**: Adjusts colors across all screens for better visibility
- **Color Scheme**: 
  - Black background with white text
  - Yellow primary color
  - Cyan secondary color
  - High-contrast borders and buttons
- **Instant Toggle**: Changes apply immediately when toggled

## File Structure

```
Bestbusbeacon/
├── index.html              # Main HTML page with demo UI
├── styles.css              # Styles with high-contrast mode support
├── translations.js         # Translation dictionary (EN/FR)
├── languageManager.js      # Language management and switching
├── settingsManager.js      # Settings storage and management
├── app.js                  # Main application logic
└── README.md              # This file
```

## Usage

### Opening the Application
Simply open `index.html` in a web browser to see the multilingual demo in action.

### Changing Language
Click the "EN" or "FR" buttons in the Settings section to switch languages. All text updates immediately.

Example translations:
- EN: "Signal Bus" → FR: "Signaler l'autobus"
- EN: "Track Bus" → FR: "Suivre l'autobus"
- EN: "Settings" → FR: "Paramètres"

### Enabling High-Contrast Mode
Toggle the "High Contrast Mode" switch in the Settings section. The entire application's color scheme will change immediately for better accessibility.

### API Usage

#### Language Manager
```javascript
// Get current language
const currentLang = languageManager.getLanguage(); // Returns "EN" or "FR"

// Set language
languageManager.setLanguage('FR'); // All text updates immediately

// Toggle between languages
languageManager.toggleLanguage();

// Get translation
const text = languageManager.translate('signalBus');
// Returns "Signal Bus" if EN, "Signaler l'autobus" if FR

// Listen for language changes
languageManager.addListener(function(newLanguage) {
  console.log('Language changed to:', newLanguage);
});

// Update all page text
languageManager.updatePageText();
```

#### Settings Manager
```javascript
// Get a setting
const isHighContrast = settingsManager.getSetting('highContrast');

// Set a setting (updates and stores immediately)
settingsManager.setSetting('highContrast', true);

// Toggle a boolean setting
settingsManager.toggleSetting('darkMode');

// Listen for setting changes
settingsManager.addListener('highContrast', function(enabled) {
  console.log('High contrast is now:', enabled);
});

// Apply all settings
settingsManager.applyAllSettings();
```

## Translation Coverage

### Button Labels
- Signal Bus / Signaler l'autobus
- Track Bus / Suivre l'autobus
- Settings / Paramètres
- Save / Sauvegarder
- Cancel / Annuler
- Confirm / Confirmer
- Back / Retour
- Next / Suivant
- Refresh / Actualiser
- Stop / Arrêter
- Start / Démarrer

### Status Messages
- Bus Arriving / Autobus en approche
- Bus Delayed / Autobus retardé
- Bus On Time / Autobus à l'heure
- No Service / Aucun service
- Service Active / Service actif
- Connecting / Connexion...
- Connected / Connecté
- Disconnected / Déconnecté
- Error / Erreur
- Success / Succès
- Loading / Chargement...

### Settings Labels
- Language / Langue
- Notifications / Notifications
- High Contrast Mode / Mode contraste élevé
- Enable Notifications / Activer les notifications
- Dark Mode / Mode sombre
- Font Size / Taille de police
- Auto Refresh / Actualisation automatique
- Refresh Interval / Intervalle d'actualisation
- About App / À propos de l'application
- Version / Version

## Implementation Details

### Stored Variables
All settings are stored in localStorage and persist across sessions:
- `language`: "EN" or "FR"
- `highContrast`: boolean
- `darkMode`: boolean
- `notifications`: boolean
- `autoRefresh`: boolean
- `refreshInterval`: number (seconds)
- `fontSize`: "small", "medium", or "large"

### Architecture
- **translations.js**: Contains complete EN/FR translation dictionary
- **languageManager.js**: Manages language state and switching logic
- **settingsManager.js**: Handles all settings including high-contrast mode
- **app.js**: Initializes app and connects UI to managers
- **styles.css**: CSS with variables for normal and high-contrast modes

### Browser Compatibility
- Modern browsers with localStorage support
- ES6+ JavaScript features
- CSS custom properties (variables)

## License
MIT