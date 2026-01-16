// Language Manager - Handles language storage and switching
// Implements stored variable "language" with values "EN" or "FR"

class LanguageManager {
  constructor() {
    // Initialize with stored language or default to EN
    this.currentLanguage = this.getStoredLanguage() || 'EN';
    this.listeners = [];
  }
  
  /**
   * Get the stored language from localStorage
   * @returns {string} Language code ("EN" or "FR")
   */
  getStoredLanguage() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('language') || 'EN';
    }
    return 'EN';
  }
  
  /**
   * Set and store the language
   * @param {string} language - Language code ("EN" or "FR")
   */
  setLanguage(language) {
    if (language !== 'EN' && language !== 'FR') {
      console.error('Invalid language. Must be "EN" or "FR"');
      return;
    }
    
    this.currentLanguage = language;
    
    // Store in localStorage
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('language', language);
    }
    
    // Notify all listeners that language has changed
    this.notifyListeners();
  }
  
  /**
   * Get the current language
   * @returns {string} Current language code
   */
  getLanguage() {
    return this.currentLanguage;
  }
  
  /**
   * Toggle between EN and FR
   */
  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'EN' ? 'FR' : 'EN';
    this.setLanguage(newLanguage);
  }
  
  /**
   * Get translation for a key in current language
   * @param {string} key - Translation key
   * @returns {string} Translated text
   */
  translate(key) {
    if (typeof translations === 'undefined') {
      console.error('Translations not loaded');
      return key;
    }
    
    const translation = translations[this.currentLanguage][key];
    if (!translation) {
      console.warn(`Translation not found for key: ${key}`);
      return key;
    }
    
    return translation;
  }
  
  /**
   * Register a listener for language changes
   * @param {Function} callback - Function to call when language changes
   */
  addListener(callback) {
    this.listeners.push(callback);
  }
  
  /**
   * Remove a listener
   * @param {Function} callback - Function to remove
   */
  removeListener(callback) {
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }
  
  /**
   * Notify all listeners of language change
   */
  notifyListeners() {
    this.listeners.forEach(listener => {
      try {
        listener(this.currentLanguage);
      } catch (error) {
        console.error('Error in language change listener:', error);
      }
    });
  }
  
  /**
   * Update all elements with data-translate attribute
   */
  updatePageText() {
    if (typeof document === 'undefined') return;
    
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      element.textContent = this.translate(key);
    });
    
    // Update all elements with data-translate-placeholder attribute
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      element.placeholder = this.translate(key);
    });
  }
}

// Create singleton instance
const languageManager = new LanguageManager();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = languageManager;
}
