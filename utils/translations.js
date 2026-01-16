const translations = {
  en: {
    signalBus: 'Signal Bus',
    notSignaling: 'Not Signaling',
    signalingActive: 'Signaling Active',
    settings: 'Settings',
    language: 'Language',
    english: 'English',
    french: 'French',
    highContrast: 'High Contrast Mode',
    sound: 'Sound',
    vibration: 'Vibration',
    testFeedback: 'Test Feedback',
    testPickMeUp: 'Test Pick Me Up',
    back: 'Back',
  },
  fr: {
    signalBus: 'Signaler le Bus',
    notSignaling: 'Pas de Signal',
    signalingActive: 'Signal Actif',
    settings: 'Paramètres',
    language: 'Langue',
    english: 'Anglais',
    french: 'Français',
    highContrast: 'Mode Contraste Élevé',
    sound: 'Son',
    vibration: 'Vibration',
    testFeedback: 'Tester les Retours',
    testPickMeUp: 'Tester Pick Me Up',
    back: 'Retour',
  },
};

export const getTranslation = (language, key) => {
  return translations[language]?.[key] || translations['en'][key];
};

export default translations;
