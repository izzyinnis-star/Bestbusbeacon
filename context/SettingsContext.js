import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsContext = createContext();

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export const SettingsProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [highContrast, setHighContrast] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  // Global variables for BusBeacon flashing system
  const [busNumber, setBusNumber] = useState('');
  const [strongSignalMode, setStrongSignalMode] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const [flashStep, setFlashStep] = useState(1);
  const [isGreen, setIsGreen] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('language');
      const savedHighContrast = await AsyncStorage.getItem('highContrast');
      const savedSound = await AsyncStorage.getItem('soundEnabled');
      const savedVibration = await AsyncStorage.getItem('vibrationEnabled');

      if (savedLanguage) setLanguage(savedLanguage);
      if (savedHighContrast) setHighContrast(savedHighContrast === 'true');
      if (savedSound) setSoundEnabled(savedSound === 'true');
      if (savedVibration) setVibrationEnabled(savedVibration === 'true');
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveLanguage = async (lang) => {
    try {
      await AsyncStorage.setItem('language', lang);
      setLanguage(lang);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  const saveHighContrast = async (value) => {
    try {
      await AsyncStorage.setItem('highContrast', value.toString());
      setHighContrast(value);
    } catch (error) {
      console.error('Error saving high contrast:', error);
    }
  };

  const saveSoundEnabled = async (value) => {
    try {
      await AsyncStorage.setItem('soundEnabled', value.toString());
      setSoundEnabled(value);
    } catch (error) {
      console.error('Error saving sound setting:', error);
    }
  };

  const saveVibrationEnabled = async (value) => {
    try {
      await AsyncStorage.setItem('vibrationEnabled', value.toString());
      setVibrationEnabled(value);
    } catch (error) {
      console.error('Error saving vibration setting:', error);
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        language,
        highContrast,
        soundEnabled,
        vibrationEnabled,
        isLoading,
        saveLanguage,
        saveHighContrast,
        saveSoundEnabled,
        saveVibrationEnabled,
        // Global variables for BusBeacon flashing system
        busNumber,
        setBusNumber,
        strongSignalMode,
        setStrongSignalMode,
        isFlashing,
        setIsFlashing,
        flashStep,
        setFlashStep,
        isGreen,
        setIsGreen,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
