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

  const SettingRow = ({label, children}) => (
    <View style={[styles.settingRow, {borderBottomColor: theme.borderColor}]}>
      <Text style={[styles.settingLabel, {color: theme.textColor}]}>{label}</Text>
      {children}
    </View>
  );

  const ToggleButton = ({value, onValueChange, label}) => (
    <View style={styles.toggleContainer}>
      <Text style={[styles.toggleLabel, {color: theme.textColor}]}>
        {value ? t.on : t.off}
      </Text>
      <Switch
        value={value}
        onValueChange={(val) => handleToggle(onValueChange, val)}
        trackColor={{
          false: theme.disabledColor,
          true: highContrast ? theme.buttonBackground : '#34C759',
        }}
        thumbColor={highContrast ? theme.buttonText : '#FFFFFF'}
      />
    </View>
  );

  const LanguageButton = ({langCode, langLabel}) => (
    <TouchableOpacity
      style={[
        styles.languageButton,
        {
          backgroundColor:
            language === langCode ? theme.buttonBackground : 'transparent',
          borderColor: theme.borderColor,
        },
      ]}
      onPress={() => handleLanguageChange(langCode)}
      activeOpacity={0.8}>
      <Text
        style={[
          styles.languageButtonText,
          {
            color:
              language === langCode
                ? theme.buttonText
                : theme.textColor,
          },
        ]}>
        {langLabel}
      </Text>
    </TouchableOpacity>
  );

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
        <SettingRow label={t.language}>
          <View style={styles.languageOptions}>
            <LanguageButton langCode="en" langLabel={t.english} />
            <LanguageButton langCode="es" langLabel={t.spanish} />
            <LanguageButton langCode="fr" langLabel={t.french} />
          </View>
        </SettingRow>

        {/* High Contrast Mode */}
        <SettingRow label={t.highContrastMode}>
          <ToggleButton
            value={highContrast}
            onValueChange={setHighContrast}
            label={highContrast ? t.on : t.off}
          />
        </SettingRow>

        {/* Sound Setting */}
        <SettingRow label={t.soundEnabled}>
          <ToggleButton
            value={soundEnabled}
            onValueChange={setSoundEnabled}
            label={soundEnabled ? t.on : t.off}
          />
        </SettingRow>

        {/* Vibration Setting */}
        <SettingRow label={t.vibrationEnabled}>
          <ToggleButton
            value={vibrationEnabled}
            onValueChange={setVibrationEnabled}
            label={vibrationEnabled ? t.on : t.off}
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
    gap: 10,
    marginTop: 8,
  },
  languageButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    minWidth: 100,
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
