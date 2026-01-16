// Theme configuration for high-contrast and normal modes
export const getTheme = (highContrast) => {
  if (highContrast) {
    return {
      backgroundColor: '#000000', // Black background
      textColor: '#FFFFFF', // White text
      buttonBackground: '#FFFF00', // Yellow buttons
      buttonText: '#000000', // Black button text
      borderColor: '#FFFFFF',
      disabledColor: '#666666',
      signalActiveColor: '#FFFF00',
      signalInactiveColor: '#333333',
    };
  }

  // Normal theme
  return {
    backgroundColor: '#FFFFFF', // White background
    textColor: '#000000', // Black text
    buttonBackground: '#007AFF', // iOS blue
    buttonText: '#FFFFFF', // White button text
    borderColor: '#CCCCCC',
    disabledColor: '#999999',
    signalActiveColor: '#34C759', // Green when active
    signalInactiveColor: '#007AFF', // Blue when inactive
  };
};

// Translations
export const translations = {
  en: {
    appTitle: 'Best Bus Beacon',
    signalButton: 'SIGNAL BUS',
    signaling: 'SIGNALING...',
    stopSignal: 'STOP SIGNAL',
    settings: 'Settings',
    home: 'Home',
    language: 'Language',
    highContrastMode: 'High Contrast Mode',
    soundEnabled: 'Sound',
    vibrationEnabled: 'Vibration',
    on: 'ON',
    off: 'OFF',
    english: 'English',
    spanish: 'Spanish',
    french: 'French',
  },
  es: {
    appTitle: 'Best Bus Beacon',
    signalButton: 'SEÑALAR AUTOBÚS',
    signaling: 'SEÑALANDO...',
    stopSignal: 'DETENER SEÑAL',
    settings: 'Configuración',
    home: 'Inicio',
    language: 'Idioma',
    highContrastMode: 'Modo de Alto Contraste',
    soundEnabled: 'Sonido',
    vibrationEnabled: 'Vibración',
    on: 'ACTIVADO',
    off: 'DESACTIVADO',
    english: 'Inglés',
    spanish: 'Español',
    french: 'Francés',
  },
  fr: {
    appTitle: 'Best Bus Beacon',
    signalButton: 'SIGNALER LE BUS',
    signaling: 'SIGNALISATION...',
    stopSignal: 'ARRÊTER LE SIGNAL',
    settings: 'Paramètres',
    home: 'Accueil',
    language: 'Langue',
    highContrastMode: 'Mode Contraste Élevé',
    soundEnabled: 'Son',
    vibrationEnabled: 'Vibration',
    on: 'ACTIVÉ',
    off: 'DÉSACTIVÉ',
    english: 'Anglais',
    spanish: 'Espagnol',
    french: 'Français',
  },
};
