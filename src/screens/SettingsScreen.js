import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
} from 'react-native';
import {useAppContext} from '../context/AppContext';
import {getTheme, translations} from '../utils/theme';
import {vibrate} from '../utils/sound';

// Helper component for setting rows
const SettingRow = ({label, children, theme}) => (
  <View style={[styles.settingRow, {borderBottomColor: theme.borderColor}]}>
    <Text style={[styles.settingLabel, {color: theme.textColor}]}>{label}</Text>
    {children}
  </View>
);

// Helper component for toggle buttons
const ToggleButton = ({value, onValueChange, label, theme, highContrast, t}) => (
  <View style={styles.toggleContainer}>
    <Text style={[styles.toggleLabel, {color: theme.textColor}]}>
      {value ? t.on : t.off}
    </Text>
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{
        false: theme.disabledColor,
        true: highContrast ? theme.buttonBackground : '#34C759',
      }}
      thumbColor={highContrast ? theme.buttonText : '#FFFFFF'}
    />
  </View>
);

// Helper component for language buttons
const LanguageButton = ({langCode, langLabel, language, theme, onPress}) => (
  <TouchableOpacity
    style={[
      styles.languageButton,
      {
        backgroundColor:
          language === langCode ? theme.buttonBackground : 'transparent',
        borderColor: theme.borderColor,
      },
    ]}
    onPress={onPress}
    activeOpacity={0.8}>
    <Text
      style={[
        styles.languageButtonText,
        {
          color:
            language === langCode ? theme.buttonText : theme.textColor,
        },
      ]}>
      {langLabel}
    </Text>
  </TouchableOpacity>
);

const SettingsScreen = ({navigation}) => {
  const {
    language,
    setLanguage,
    highContrast,
    setHighContrast,
    soundEnabled,
    setSoundEnabled,
    vibrationEnabled,
    setVibrationEnabled,
  } = useAppContext();

  const theme = getTheme(highContrast);
  const t = translations[language] || translations.en;

  const handleBackPress = () => {
    if (vibrationEnabled) {
      vibrate(50);
    }
    navigation.goBack();
  };

  const handleToggle = (setter, value) => {
    if (vibrationEnabled) {
      vibrate(50);
    }
    setter(value);
  };

  const handleLanguageChange = (newLanguage) => {
    if (vibrationEnabled) {
      vibrate(50);
    }
    setLanguage(newLanguage);
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <StatusBar
        barStyle={highContrast ? 'light-content' : 'dark-content'}
        backgroundColor={theme.backgroundColor}
      />
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, {color: theme.textColor}]}>
            {t.settings}
          </Text>
        </View>

        {/* Language Setting */}
        <SettingRow label={t.language} theme={theme}>
          <View style={styles.languageOptions}>
            <LanguageButton
              langCode="en"
              langLabel={t.english}
              language={language}
              theme={theme}
              onPress={() => handleLanguageChange('en')}
            />
            <LanguageButton
              langCode="es"
              langLabel={t.spanish}
              language={language}
              theme={theme}
              onPress={() => handleLanguageChange('es')}
            />
            <LanguageButton
              langCode="fr"
              langLabel={t.french}
              language={language}
              theme={theme}
              onPress={() => handleLanguageChange('fr')}
            />
          </View>
        </SettingRow>

        {/* High Contrast Mode */}
        <SettingRow label={t.highContrastMode} theme={theme}>
          <ToggleButton
            value={highContrast}
            onValueChange={(val) => handleToggle(setHighContrast, val)}
            label={highContrast ? t.on : t.off}
            theme={theme}
            highContrast={highContrast}
            t={t}
          />
        </SettingRow>

        {/* Sound Setting */}
        <SettingRow label={t.soundEnabled} theme={theme}>
          <ToggleButton
            value={soundEnabled}
            onValueChange={(val) => handleToggle(setSoundEnabled, val)}
            label={soundEnabled ? t.on : t.off}
            theme={theme}
            highContrast={highContrast}
            t={t}
          />
        </SettingRow>

        {/* Vibration Setting */}
        <SettingRow label={t.vibrationEnabled} theme={theme}>
          <ToggleButton
            value={vibrationEnabled}
            onValueChange={(val) => handleToggle(setVibrationEnabled, val)}
            label={vibrationEnabled ? t.on : t.off}
            theme={theme}
            highContrast={highContrast}
            t={t}
          />
        </SettingRow>

        {/* Back Button */}
        <TouchableOpacity
          style={[
            styles.backButton,
            {
              backgroundColor: theme.buttonBackground,
              borderColor: theme.borderColor,
            },
          ]}
          onPress={handleBackPress}
          activeOpacity={0.8}>
          <Text style={[styles.backButtonText, {color: theme.buttonText}]}>
            {t.home}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  settingRow: {
    padding: 20,
    borderBottomWidth: 1,
    minHeight: 80,
  },
  settingLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 12,
  },
  languageOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  languageButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    minWidth: 100,
    marginRight: 10,
    marginBottom: 10,
  },
  languageButtonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  backButton: {
    margin: 20,
    marginTop: 30,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
    borderWidth: 2,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default SettingsScreen;
