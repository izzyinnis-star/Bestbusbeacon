// Settings Manager - Handles all app settings including high-contrast mode
// All toggles update stored variables

class SettingsManager {
  constructor() {
    // Initialize settings from localStorage or defaults
    this.settings = {
      language: 'EN',
      highContrast: false,
      darkMode: false,
      notifications: true,
      autoRefresh: true,
      refreshInterval: 30,
      fontSize: 'medium'
    };
    
    this.loadSettings();
    this.listeners = {};
    this.languageChangeHandler = null; // External handler for language changes
  }
  
  /**
   * Load settings from localStorage
   */
  loadSettings() {
    if (typeof localStorage !== 'undefined') {
      try {
        const storedSettings = localStorage.getItem('appSettings');
        if (storedSettings) {
          this.settings = { ...this.settings, ...JSON.parse(storedSettings) };
        }
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    }
  }
  
  /**
   * Save settings to localStorage
   */
  saveSettings() {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('appSettings', JSON.stringify(this.settings));
      } catch (error) {
        console.error('Error saving settings:', error);
      }
    }
  }
  
  /**
   * Get a setting value
   * @param {string} key - Setting key
   * @returns {*} Setting value
   */
  getSetting(key) {
    return this.settings[key];
  }
  
  /**
   * Set a setting value and store it
   * @param {string} key - Setting key
   * @param {*} value - Setting value
   * @param {Object} options - Optional settings like {skipApply: boolean}
   */
  setSetting(key, value, options = {}) {
    const oldValue = this.settings[key];
    this.settings[key] = value;
    this.saveSettings();
    
    // Notify listeners
    this.notifyListeners(key, value, oldValue);
    
    // Apply setting immediately unless skipApply is true
    if (!options.skipApply) {
      this.applySetting(key, value);
    }
  }
  
  /**
   * Toggle a boolean setting
   * @param {string} key - Setting key
   */
  toggleSetting(key) {
    if (typeof this.settings[key] === 'boolean') {
      this.setSetting(key, !this.settings[key]);
    }
  }
  
  /**
   * Apply a setting to the UI immediately
   * @param {string} key - Setting key
   * @param {*} value - Setting value
   */
  applySetting(key, value) {
    if (typeof document === 'undefined') return;
    
    switch (key) {
      case 'highContrast':
        this.applyHighContrast(value);
        break;
      case 'darkMode':
        this.applyDarkMode(value);
        break;
      case 'fontSize':
        this.applyFontSize(value);
        break;
      case 'language':
        // Language changes are delegated to external handler if available
        // This allows decoupling - the app.js sets up the connection
        if (this.languageChangeHandler) {
          this.languageChangeHandler(value);
        }
        break;
    }
  }
  
  /**
   * Apply high-contrast mode across all screens
   * Adjusts colors for better visibility
   * @param {boolean} enabled - Whether high-contrast is enabled
   */
  applyHighContrast(enabled) {
    if (typeof document === 'undefined') return;
    
    const body = document.body;
    if (enabled) {
      body.classList.add('high-contrast');
      body.classList.remove('normal-contrast');
    } else {
      body.classList.remove('high-contrast');
      body.classList.add('normal-contrast');
    }
  }
  
  /**
   * Apply dark mode
   * @param {boolean} enabled - Whether dark mode is enabled
   */
  applyDarkMode(enabled) {
    if (typeof document === 'undefined') return;
    
    const body = document.body;
    if (enabled) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
  
  /**
   * Apply font size
   * @param {string} size - Font size (small, medium, large)
   */
  applyFontSize(size) {
    if (typeof document === 'undefined') return;
    
    const body = document.body;
    body.classList.remove('font-small', 'font-medium', 'font-large');
    body.classList.add(`font-${size}`);
  }
  
  /**
   * Apply all settings to the UI
   */
  applyAllSettings() {
    Object.keys(this.settings).forEach(key => {
      this.applySetting(key, this.settings[key]);
    });
  }
  
  /**
   * Register a listener for setting changes
   * @param {string} key - Setting key to listen for
   * @param {Function} callback - Function to call when setting changes
   */
  addListener(key, callback) {
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }
    this.listeners[key].push(callback);
  }
  
  /**
   * Remove a listener
   * @param {string} key - Setting key
   * @param {Function} callback - Function to remove
   */
  removeListener(key, callback) {
    if (this.listeners[key]) {
      this.listeners[key] = this.listeners[key].filter(
        listener => listener !== callback
      );
    }
  }
  
  /**
   * Notify all listeners of a setting change
   * @param {string} key - Setting key
   * @param {*} newValue - New value
   * @param {*} oldValue - Old value
   */
  notifyListeners(key, newValue, oldValue) {
    if (this.listeners[key]) {
      this.listeners[key].forEach(listener => {
        try {
          listener(newValue, oldValue);
        } catch (error) {
          console.error(`Error in setting listener for ${key}:`, error);
        }
      });
    }
  }
  
  /**
   * Reset all settings to defaults
   */
  resetToDefaults() {
    this.settings = {
      language: 'EN',
      highContrast: false,
      darkMode: false,
      notifications: true,
      autoRefresh: true,
      refreshInterval: 30,
      fontSize: 'medium'
    };
    this.saveSettings();
    this.applyAllSettings();
  }
  
  /**
   * Set external handler for language changes (dependency injection)
   * @param {Function} handler - Function to call when language setting changes
   */
  setLanguageChangeHandler(handler) {
    this.languageChangeHandler = handler;
  }
}

// Create singleton instance
const settingsManager = new SettingsManager();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = settingsManager;
}
