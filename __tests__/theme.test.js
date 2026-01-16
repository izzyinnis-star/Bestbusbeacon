/**
 * Theme utility tests
 */

import {getTheme, translations} from '../src/utils/theme';

describe('Theme Utilities', () => {
  describe('getTheme', () => {
    it('should return high contrast theme when enabled', () => {
      const theme = getTheme(true);
      expect(theme.backgroundColor).toBe('#000000');
      expect(theme.textColor).toBe('#FFFFFF');
      expect(theme.buttonBackground).toBe('#FFFF00');
      expect(theme.buttonText).toBe('#000000');
    });

    it('should return normal theme when high contrast is disabled', () => {
      const theme = getTheme(false);
      expect(theme.backgroundColor).toBe('#FFFFFF');
      expect(theme.textColor).toBe('#000000');
      expect(theme.buttonBackground).toBe('#007AFF');
      expect(theme.buttonText).toBe('#FFFFFF');
    });
  });

  describe('translations', () => {
    it('should have English translations', () => {
      expect(translations.en).toBeDefined();
      expect(translations.en.appTitle).toBe('Best Bus Beacon');
      expect(translations.en.signalButton).toBe('SIGNAL BUS');
    });

    it('should have Spanish translations', () => {
      expect(translations.es).toBeDefined();
      expect(translations.es.appTitle).toBe('Best Bus Beacon');
      expect(translations.es.signalButton).toBe('SEÑALAR AUTOBÚS');
    });

    it('should have French translations', () => {
      expect(translations.fr).toBeDefined();
      expect(translations.fr.appTitle).toBe('Best Bus Beacon');
      expect(translations.fr.signalButton).toBe('SIGNALER LE BUS');
    });
  });
});
