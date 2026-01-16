import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';
import { useSettings } from '../context/SettingsContext';
import { getTranslation } from '../utils/translations';

export default function SettingsScreen({ navigation }) {
  const {
    language,
    highContrast,
    soundEnabled,
    vibrationEnabled,
    saveLanguage,
    saveHighContrast,
    saveSoundEnabled,
    saveVibrationEnabled,
  } = useSettings();

  const handleTestFeedback = async () => {
    // Play sound
    if (soundEnabled) {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/chime.mp3'),
          { shouldPlay: true }
        );
        
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            sound.unloadAsync();
          }
        });
      } catch (error) {
        // Gracefully handle missing audio file
        console.log('Audio not available:', error.message);
      }
    }

    // Trigger vibration
    if (vibrationEnabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
  };

  const styles = getStyles(highContrast);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.title}>{getTranslation(language, 'settings')}</Text>

        {/* Language Toggle */}
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>{getTranslation(language, 'language')}</Text>
          <View style={styles.languageToggle}>
            <TouchableOpacity
              style={[
                styles.languageButton,
                language === 'en' && styles.languageButtonActive,
              ]}
              onPress={() => saveLanguage('en')}
            >
              <Text
                style={[
                  styles.languageButtonText,
                  language === 'en' && styles.languageButtonTextActive,
                ]}
              >
                {getTranslation(language, 'english')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.languageButton,
                language === 'fr' && styles.languageButtonActive,
              ]}
              onPress={() => saveLanguage('fr')}
            >
              <Text
                style={[
                  styles.languageButtonText,
                  language === 'fr' && styles.languageButtonTextActive,
                ]}
              >
                {getTranslation(language, 'french')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* High Contrast Mode Toggle */}
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>
            {getTranslation(language, 'highContrast')}
          </Text>
          <Switch
            value={highContrast}
            onValueChange={saveHighContrast}
            trackColor={{ false: '#767577', true: highContrast ? '#FFFF00' : '#81b0ff' }}
            thumbColor={highContrast ? '#FFFFFF' : '#f4f3f4'}
          />
        </View>

        {/* Sound Toggle */}
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>{getTranslation(language, 'sound')}</Text>
          <Switch
            value={soundEnabled}
            onValueChange={saveSoundEnabled}
            trackColor={{ false: '#767577', true: highContrast ? '#FFFF00' : '#81b0ff' }}
            thumbColor={highContrast ? '#FFFFFF' : '#f4f3f4'}
          />
        </View>

        {/* Vibration Toggle */}
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>
            {getTranslation(language, 'vibration')}
          </Text>
          <Switch
            value={vibrationEnabled}
            onValueChange={saveVibrationEnabled}
            trackColor={{ false: '#767577', true: highContrast ? '#FFFF00' : '#81b0ff' }}
            thumbColor={highContrast ? '#FFFFFF' : '#f4f3f4'}
          />
        </View>

        {/* Test Feedback Button */}
        <TouchableOpacity style={styles.testButton} onPress={handleTestFeedback}>
          <Text style={styles.testButtonText}>
            {getTranslation(language, 'testFeedback')}
          </Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>
            {getTranslation(language, 'back')}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const getStyles = (highContrast) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: highContrast ? '#000000' : '#f5f5f5',
    },
    scrollView: {
      flex: 1,
    },
    content: {
      padding: 20,
      paddingTop: 60,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 30,
      color: highContrast ? '#FFFFFF' : '#333333',
      textAlign: 'center',
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 15,
      marginBottom: 15,
      backgroundColor: highContrast ? '#1a1a1a' : '#FFFFFF',
      borderRadius: 10,
      borderWidth: highContrast ? 2 : 0,
      borderColor: highContrast ? '#FFFFFF' : 'transparent',
    },
    settingLabel: {
      fontSize: 18,
      fontWeight: '600',
      color: highContrast ? '#FFFFFF' : '#333333',
      flex: 1,
    },
    languageToggle: {
      flexDirection: 'row',
      borderRadius: 8,
      overflow: 'hidden',
      borderWidth: highContrast ? 2 : 1,
      borderColor: highContrast ? '#FFFFFF' : '#CCCCCC',
    },
    languageButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: highContrast ? '#000000' : '#F0F0F0',
    },
    languageButtonActive: {
      backgroundColor: highContrast ? '#FFFFFF' : '#2196F3',
    },
    languageButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: highContrast ? '#FFFFFF' : '#333333',
    },
    languageButtonTextActive: {
      color: highContrast ? '#000000' : '#FFFFFF',
    },
    testButton: {
      marginTop: 20,
      paddingVertical: 18,
      paddingHorizontal: 40,
      borderRadius: 10,
      backgroundColor: highContrast ? '#FFFF00' : '#4CAF50',
      alignItems: 'center',
    },
    testButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000000',
    },
    backButton: {
      marginTop: 20,
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 10,
      backgroundColor: highContrast ? '#FFFFFF' : '#9E9E9E',
      alignItems: 'center',
    },
    backButtonText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000000',
    },
  });
