import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create Context for global state
const AppContext = createContext();

// Hook to use the app context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

// Provider component
export const AppProvider = ({children}) => {
  // Global state variables
  const [isSignaling, setIsSignaling] = useState(false);
  const [language, setLanguage] = useState('en'); // Default to English
  const [highContrast, setHighContrast] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Storage keys
  const STORAGE_KEYS = {
    LANGUAGE: '@language',
    HIGH_CONTRAST: '@highContrast',
    SOUND_ENABLED: '@soundEnabled',
    VIBRATION_ENABLED: '@vibrationEnabled',
  };

  // Load settings from storage on app start
  useEffect(() => {
    loadSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const loadSettings = async () => {
    try {
      const [
        storedLanguage,
        storedHighContrast,
        storedSoundEnabled,
        storedVibrationEnabled,
      ] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.LANGUAGE),
        AsyncStorage.getItem(STORAGE_KEYS.HIGH_CONTRAST),
        AsyncStorage.getItem(STORAGE_KEYS.SOUND_ENABLED),
        AsyncStorage.getItem(STORAGE_KEYS.VIBRATION_ENABLED),
      ]);

      if (storedLanguage !== null) setLanguage(storedLanguage);
      if (storedHighContrast !== null) setHighContrast(JSON.parse(storedHighContrast));
      if (storedSoundEnabled !== null) setSoundEnabled(JSON.parse(storedSoundEnabled));
      if (storedVibrationEnabled !== null) setVibrationEnabled(JSON.parse(storedVibrationEnabled));
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Save settings to storage
  const saveLanguage = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.LANGUAGE, value);
      setLanguage(value);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  const saveHighContrast = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.HIGH_CONTRAST, JSON.stringify(value));
      setHighContrast(value);
    } catch (error) {
      console.error('Error saving high contrast:', error);
    }
  };

  const saveSoundEnabled = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, JSON.stringify(value));
      setSoundEnabled(value);
    } catch (error) {
      console.error('Error saving sound enabled:', error);
    }
  };

  const saveVibrationEnabled = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.VIBRATION_ENABLED, JSON.stringify(value));
      setVibrationEnabled(value);
    } catch (error) {
      console.error('Error saving vibration enabled:', error);
    }
  };

  const value = {
    isSignaling,
    setIsSignaling,
    language,
    setLanguage: saveLanguage,
    highContrast,
    setHighContrast: saveHighContrast,
    soundEnabled,
    setSoundEnabled: saveSoundEnabled,
    vibrationEnabled,
    setVibrationEnabled: saveVibrationEnabled,
    isLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
