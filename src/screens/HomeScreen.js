import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useAppContext} from '../context/AppContext';
import {getTheme, translations} from '../utils/theme';
import {playChime, vibrate} from '../utils/sound';

// Helper function to get signal button text color
const getSignalButtonTextColor = (highContrast, isSignaling, theme) => {
  if (highContrast) {
    return theme.buttonText;
  }
  return isSignaling ? '#000000' : '#FFFFFF';
};

const HomeScreen = ({navigation}) => {
  const {
    isSignaling,
    setIsSignaling,
    language,
    highContrast,
    soundEnabled,
    vibrationEnabled,
  } = useAppContext();

  const theme = getTheme(highContrast);
  const t = translations[language] || translations.en;

  const handleSignalToggle = () => {
    // Toggle signaling state
    const newSignalingState = !isSignaling;
    setIsSignaling(newSignalingState);

    // Play sound if enabled and starting to signal
    if (newSignalingState && soundEnabled) {
      playChime();
    }

    // Vibrate if enabled
    if (vibrationEnabled) {
      vibrate(200);
    }
  };

  const handleSettingsPress = () => {
    if (vibrationEnabled) {
      vibrate(50);
    }
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <StatusBar
        barStyle={highContrast ? 'light-content' : 'dark-content'}
        backgroundColor={theme.backgroundColor}
      />
      <View style={styles.content}>
        {/* App Title */}
        <Text style={[styles.title, {color: theme.textColor}]}>
          {t.appTitle}
        </Text>

        {/* Status Text */}
        {isSignaling && (
          <Text style={[styles.statusText, {color: theme.textColor}]}>
            {t.signaling}
          </Text>
        )}

        {/* Main Signal Button */}
        <TouchableOpacity
          style={[
            styles.signalButton,
            {
              backgroundColor: isSignaling
                ? theme.signalActiveColor
                : theme.signalInactiveColor,
            },
          ]}
          onPress={handleSignalToggle}
          activeOpacity={0.8}>
          <Text
            style={[
              styles.signalButtonText,
              {
                color: getSignalButtonTextColor(highContrast, isSignaling, theme),
              },
            ]}>
            {isSignaling ? t.stopSignal : t.signalButton}
          </Text>
        </TouchableOpacity>

        {/* Settings Button */}
        <TouchableOpacity
          style={[
            styles.settingsButton,
            {
              backgroundColor: theme.buttonBackground,
              borderColor: theme.borderColor,
            },
          ]}
          onPress={handleSettingsPress}
          activeOpacity={0.8}>
          <Text style={[styles.settingsButtonText, {color: theme.buttonText}]}>
            {t.settings}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  statusText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  signalButton: {
    width: 250,
    height: 250,
    borderRadius: 125,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  signalButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  settingsButton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
    borderWidth: 2,
    minWidth: 200,
  },
  settingsButtonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HomeScreen;
