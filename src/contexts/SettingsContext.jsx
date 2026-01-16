import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SettingsContext = createContext();

const DEFAULT_SETTINGS = {
  language: 'en',
  vibrationEnabled: true,
  soundEnabled: true,
  highContrast: false,
};

export const SettingsProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [settings, setSettings] = useState(() => {
    // Load settings from localStorage on initialization
    const savedSettings = localStorage.getItem('appSettings');
    return savedSettings ? JSON.parse(savedSettings) : DEFAULT_SETTINGS;
  });

  // Persist settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('appSettings', JSON.stringify(settings));
  }, [settings]);

  // Sync language with i18n
  useEffect(() => {
    i18n.changeLanguage(settings.language);
    localStorage.setItem('language', settings.language);
  }, [settings.language, i18n]);

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const triggerFeedback = (type = 'success') => {
    // Vibration feedback
    if (settings.vibrationEnabled && navigator.vibrate) {
      if (type === 'success') {
        navigator.vibrate(200); // Short vibration for success
      } else if (type === 'error') {
        navigator.vibrate([100, 50, 100]); // Pattern for errors
      } else {
        navigator.vibrate(100); // Default short vibration
      }
    }

    // Sound feedback
    if (settings.soundEnabled) {
      playFeedbackSound(type);
    }
  };

  const playFeedbackSound = (type) => {
    // Create audio context for sound feedback
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Different frequencies for different feedback types
    if (type === 'success') {
      oscillator.frequency.value = 800;
    } else if (type === 'error') {
      oscillator.frequency.value = 400;
    } else {
      oscillator.frequency.value = 600;
    }

    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting, updateSettings, triggerFeedback }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
