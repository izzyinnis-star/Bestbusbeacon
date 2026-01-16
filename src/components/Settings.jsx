import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSettings } from '../contexts/SettingsContext';
import Toggle from './Toggle';
import Button from './Button';
import './Settings.css';

const Settings = () => {
  const { t } = useTranslation();
  const { settings, updateSetting, triggerFeedback } = useSettings();

  const handleLanguageChange = (lang) => {
    updateSetting('language', lang);
    triggerFeedback('success');
  };

  const handleSave = () => {
    triggerFeedback('success');
    // Settings are automatically saved via context, but we trigger feedback
    alert(t('settingsSaved'));
  };

  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1 className="settings-title">{t('settings')}</h1>
      </header>

      <div className="settings-content">
        {/* Language Selection */}
        <section className="settings-section">
          <h2 className="section-title">{t('language')}</h2>
          <div className="language-buttons">
            <Button
              variant={settings.language === 'en' ? 'primary' : 'outline'}
              size="medium"
              onClick={() => handleLanguageChange('en')}
              ariaLabel={t('english')}
            >
              🇬🇧 {t('english')}
            </Button>
            <Button
              variant={settings.language === 'fr' ? 'primary' : 'outline'}
              size="medium"
              onClick={() => handleLanguageChange('fr')}
              ariaLabel={t('french')}
            >
              🇫🇷 {t('french')}
            </Button>
          </div>
        </section>

        {/* Feedback Settings */}
        <section className="settings-section">
          <h2 className="section-title">{t('accessibility')}</h2>
          <div className="settings-list">
            <Toggle
              checked={settings.vibrationEnabled}
              onChange={(checked) => updateSetting('vibrationEnabled', checked)}
              label={t('vibrationFeedback')}
              ariaLabel={t('vibrationFeedback')}
            />
            <Toggle
              checked={settings.soundEnabled}
              onChange={(checked) => updateSetting('soundEnabled', checked)}
              label={t('soundFeedback')}
              ariaLabel={t('soundFeedback')}
            />
            <Toggle
              checked={settings.highContrast}
              onChange={(checked) => updateSetting('highContrast', checked)}
              label={t('highContrast')}
              ariaLabel={t('highContrast')}
            />
          </div>
        </section>

        {/* Save Button */}
        <div className="settings-actions">
          <Button
            variant="success"
            size="large"
            onClick={handleSave}
            ariaLabel={t('saveSettings')}
          >
            ✓ {t('saveSettings')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
