// Best Bus Beacon - Main Application
// Implements multilingual system with EN/FR language switching
// All toggles update stored variables and apply changes immediately

document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
  // Load stored settings and apply them
  settingsManager.applyAllSettings();
  
  // Sync language manager with settings manager
  const storedLanguage = settingsManager.getSetting('language');
  languageManager.setLanguage(storedLanguage);
  
  // Update all text to current language
  languageManager.updatePageText();
  
  // Set up event listeners
  setupLanguageToggle();
  setupSettingToggles();
  setupButtons();
  
  // Listen for language changes to update all text immediately
  languageManager.addListener(function(newLanguage) {
    languageManager.updatePageText();
    updateLanguageButtons(newLanguage);
    
    // Sync with settings manager
    settingsManager.setSetting('language', newLanguage);
  });
  
  // Listen for setting changes
  setupSettingListeners();
  
  console.log('Best Bus Beacon initialized');
  console.log('Current language:', languageManager.getLanguage());
  console.log('Settings:', settingsManager.settings);
}

/**
 * Set up language toggle buttons
 */
function setupLanguageToggle() {
  const langEN = document.getElementById('langEN');
  const langFR = document.getElementById('langFR');
  
  langEN.addEventListener('click', function() {
    languageManager.setLanguage('EN');
  });
  
  langFR.addEventListener('click', function() {
    languageManager.setLanguage('FR');
  });
  
  // Update button states
  updateLanguageButtons(languageManager.getLanguage());
}

/**
 * Update language button active states
 * @param {string} language - Current language code
 */
function updateLanguageButtons(language) {
  const langEN = document.getElementById('langEN');
  const langFR = document.getElementById('langFR');
  
  if (language === 'EN') {
    langEN.classList.add('active');
    langFR.classList.remove('active');
  } else {
    langFR.classList.add('active');
    langEN.classList.remove('active');
  }
}

/**
 * Set up setting toggle switches
 */
function setupSettingToggles() {
  // High Contrast Toggle
  const highContrastToggle = document.getElementById('highContrastToggle');
  highContrastToggle.checked = settingsManager.getSetting('highContrast');
  highContrastToggle.addEventListener('change', function() {
    settingsManager.toggleSetting('highContrast');
    console.log('High contrast mode:', settingsManager.getSetting('highContrast'));
  });
  
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.checked = settingsManager.getSetting('darkMode');
  darkModeToggle.addEventListener('change', function() {
    settingsManager.toggleSetting('darkMode');
    console.log('Dark mode:', settingsManager.getSetting('darkMode'));
  });
  
  // Notifications Toggle
  const notificationsToggle = document.getElementById('notificationsToggle');
  notificationsToggle.checked = settingsManager.getSetting('notifications');
  notificationsToggle.addEventListener('change', function() {
    settingsManager.toggleSetting('notifications');
    console.log('Notifications:', settingsManager.getSetting('notifications'));
  });
  
  // Auto Refresh Toggle
  const autoRefreshToggle = document.getElementById('autoRefreshToggle');
  autoRefreshToggle.checked = settingsManager.getSetting('autoRefresh');
  autoRefreshToggle.addEventListener('change', function() {
    settingsManager.toggleSetting('autoRefresh');
    console.log('Auto refresh:', settingsManager.getSetting('autoRefresh'));
  });
  
  // Font Size Select
  const fontSizeSelect = document.getElementById('fontSizeSelect');
  fontSizeSelect.value = settingsManager.getSetting('fontSize');
  fontSizeSelect.addEventListener('change', function() {
    settingsManager.setSetting('fontSize', this.value);
    console.log('Font size:', settingsManager.getSetting('fontSize'));
  });
}

/**
 * Set up button click handlers
 */
function setupButtons() {
  // Signal Bus Button
  document.getElementById('signalBusBtn').addEventListener('click', function() {
    const message = languageManager.translate('signalBus');
    showNotification(message, 'success');
  });
  
  // Track Bus Button
  document.getElementById('trackBusBtn').addEventListener('click', function() {
    const message = languageManager.translate('trackBus');
    showNotification(message, 'info');
  });
  
  // Refresh Button
  document.getElementById('refreshBtn').addEventListener('click', function() {
    const message = languageManager.translate('loading');
    showNotification(message, 'info');
    setTimeout(function() {
      const successMsg = languageManager.translate('success');
      showNotification(successMsg, 'success');
    }, 1000);
  });
  
  // Save Button
  document.getElementById('saveBtn').addEventListener('click', function() {
    const message = languageManager.translate('success');
    showNotification(message, 'success');
  });
  
  // Cancel Button
  document.getElementById('cancelBtn').addEventListener('click', function() {
    const message = languageManager.translate('cancel');
    showNotification(message, 'info');
  });
}

/**
 * Set up listeners for setting changes
 */
function setupSettingListeners() {
  // Listen for high contrast changes
  settingsManager.addListener('highContrast', function(enabled) {
    console.log('High contrast mode changed to:', enabled);
  });
  
  // Listen for language changes
  settingsManager.addListener('language', function(language) {
    console.log('Language changed to:', language);
  });
}

/**
 * Show a notification message
 * @param {string} message - Message to display
 * @param {string} type - Notification type (success, info, error)
 */
function showNotification(message, type) {
  console.log(`[${type.toUpperCase()}] ${message}`);
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    background-color: var(--${type === 'success' ? 'success' : 'primary'}-color);
    color: white;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    font-weight: bold;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(function() {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(function() {
      notification.remove();
    }, 300);
  }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
