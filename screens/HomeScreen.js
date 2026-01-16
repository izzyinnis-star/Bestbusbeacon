import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';
import { useSettings } from '../context/SettingsContext';
import { getTranslation } from '../utils/translations';

export default function HomeScreen({ navigation }) {
  const [isSignaling, setIsSignaling] = useState(false);
  const { language, highContrast, soundEnabled, vibrationEnabled } = useSettings();
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const soundObject = useRef(null);

  useEffect(() => {
    if (isSignaling) {
      // Start pulsing animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [isSignaling]);

  useEffect(() => {
    return () => {
      if (soundObject.current) {
        soundObject.current.unloadAsync();
      }
    };
  }, []);

  const playChime = async () => {
    if (!soundEnabled) return;

    try {
      // Audio file not included in repository
      // To enable sound: Add a chime.mp3 file to the assets directory
      // and uncomment the following lines:
      
      // const { sound } = await Audio.Sound.createAsync(
      //   require('../assets/chime.mp3'),
      //   { shouldPlay: true }
      // );
      // soundObject.current = sound;
      // 
      // sound.setOnPlaybackStatusUpdate((status) => {
      //   if (status.didJustFinish) {
      //     sound.unloadAsync();
      //   }
      // });
      
      console.log('Sound would play here (add chime.mp3 to enable)');
    } catch (error) {
      console.log('Audio not available:', error.message);
    }
  };

  const triggerVibration = () => {
    if (!vibrationEnabled) return;

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleSignalBusPress = () => {
    const newSignalingState = !isSignaling;
    setIsSignaling(newSignalingState);

    if (newSignalingState) {
      playChime();
      triggerVibration();
    }
  };

  const styles = getStyles(highContrast);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.statusText}>
          {isSignaling
            ? getTranslation(language, 'signalingActive')
            : getTranslation(language, 'notSignaling')}
        </Text>

        <Animated.View
          style={[
            styles.buttonContainer,
            isSignaling && { transform: [{ scale: pulseAnim }] },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.signalButton,
              isSignaling ? styles.signalButtonActive : styles.signalButtonInactive,
            ]}
            onPress={handleSignalBusPress}
            activeOpacity={0.8}
          >
            <Text style={styles.signalButtonText}>
              {getTranslation(language, 'signalBus')}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.settingsButtonText}>
            {getTranslation(language, 'settings')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const getStyles = (highContrast) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: highContrast ? '#000000' : '#f5f5f5',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    statusText: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 40,
      color: highContrast ? '#FFFFFF' : '#333333',
      textAlign: 'center',
    },
    buttonContainer: {
      width: '100%',
      marginBottom: 40,
    },
    signalButton: {
      width: '100%',
      paddingVertical: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 8,
    },
    signalButtonInactive: {
      backgroundColor: highContrast ? '#333333' : '#9E9E9E',
    },
    signalButtonActive: {
      backgroundColor: highContrast ? '#FFFF00' : '#FFD700',
    },
    signalButtonText: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#000000',
    },
    settingsButton: {
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 10,
      backgroundColor: highContrast ? '#FFFFFF' : '#2196F3',
    },
    settingsButtonText: {
      fontSize: 18,
      fontWeight: '600',
      color: highContrast ? '#000000' : '#FFFFFF',
    },
  });
