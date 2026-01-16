import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSettings } from './contexts/SettingsContext';
import Home from './components/Home';
import Settings from './components/Settings';
import Button from './components/Button';
import './App.css';

function App() {
  const { t } = useTranslation();
  const { settings } = useSettings();
  const [currentPage, setCurrentPage] = useState('home');

  // Apply high contrast mode to body
  useEffect(() => {
    if (settings.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [settings.highContrast]);

  const renderPage = () => {
    switch (currentPage) {
      case 'settings':
        return <Settings />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      {/* Skip to main content link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation Bar */}
      <nav className="app-nav" role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <Button
            variant={currentPage === 'home' ? 'primary' : 'outline'}
            size="medium"
            onClick={() => setCurrentPage('home')}
            ariaLabel={t('home')}
          >
            🏠 {t('home')}
          </Button>
          <Button
            variant={currentPage === 'settings' ? 'primary' : 'outline'}
            size="medium"
            onClick={() => setCurrentPage('settings')}
            ariaLabel={t('settings')}
          >
            ⚙️ {t('settings')}
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="app-main" role="main">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="app-footer" role="contentinfo">
        <p>
          {t('appName')} - {t('accessibility')} {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
