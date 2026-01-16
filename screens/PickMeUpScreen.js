import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useSettings } from '../context/SettingsContext';

export default function PickMeUpScreen({ navigation }) {
  const {
    busNumber,
    strongSignalMode,
    isFlashing,
    setIsFlashing,
    flashStep,
    setFlashStep,
    isGreen,
    setIsGreen,
  } = useSettings();

  const [flashingText, setFlashingText] = useState('PICK');
  const [fontSize, setFontSize] = useState(48);

  // Timer for flashing
  useEffect(() => {
    let interval;
    
    if (isFlashing) {
      interval = setInterval(() => {
        handleFlashStep();
        // Toggle isGreen for color flashing
        setIsGreen((prev) => !prev);
      }, 500);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isFlashing, flashStep, busNumber]);

  // Orientation check and font size adjustment
  useEffect(() => {
    const updateFontSize = () => {
      const { width, height } = Dimensions.get('window');
      const isLandscape = width > height;

      if (isLandscape) {
        if (strongSignalMode) {
          setFontSize(72);
        } else {
          setFontSize(64);
        }
      } else {
        if (strongSignalMode) {
          setFontSize(56);
        } else {
          setFontSize(48);
        }
      }
    };

    updateFontSize();

    const subscription = Dimensions.addEventListener('change', updateFontSize);

    return () => {
      subscription?.remove();
    };
  }, [strongSignalMode]);

  // Start flashing on mount
  useEffect(() => {
    setIsFlashing(true);
  }, []);

  const handleFlashStep = () => {
    // If busNumber is not empty, always show busNumber
    if (busNumber !== '') {
      setFlashingText(busNumber);
      return;
    }

    // Otherwise cycle through PICK, ME, UP
    if (flashStep === 1) {
      setFlashingText('PICK');
      setFlashStep(2);
    } else if (flashStep === 2) {
      setFlashingText('ME');
      setFlashStep(3);
    } else {
      setFlashingText('UP');
      setFlashStep(1);
    }
  };

  const handleTapStopper = () => {
    // Stop flashing and navigate to StoppedScreen (Home for now)
    setIsFlashing(false);
    navigation.navigate('Home');
  };

  // Determine colors based on isGreen state
  const backgroundColor = isGreen ? '#00FF00' : '#FFFFFF';
  const textColor = isGreen ? '#FFFFFF' : '#00FF00';
  const fontWeight = strongSignalMode ? '900' : 'bold';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text 
        style={[
          styles.flashingLabel, 
          { 
            fontSize, 
            color: textColor,
            fontWeight: fontWeight,
          }
        ]}
      >
        {flashingText}
      </Text>
      
      {/* Tap-anywhere overlay */}
      <TouchableOpacity
        style={styles.tapStopper}
        activeOpacity={1}
        onPress={handleTapStopper}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashingLabel: {
    textAlign: 'center',
    width: '100%',
  },
  tapStopper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
});
