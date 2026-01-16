import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import './Home.css';

const Home = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="app-title">{t('appName')}</h1>
        <p className="app-subtitle">{t('welcomeMessage')}</p>
      </header>

      <div className="home-content">
        <div className="welcome-section">
          <h2 className="welcome-title">{t('welcome')}</h2>
          <p className="accessibility-message">{t('accessibilityMessage')}</p>
        </div>

        <nav className="home-nav" aria-label="Main navigation">
          <Button
            variant="primary"
            size="large"
            onClick={() => alert('View Bus Arrivals (Feature Coming Soon)')}
            icon="🚌"
            ariaLabel={t('viewBuses')}
          >
            {t('viewBuses')}
          </Button>
          
          <Button
            variant="secondary"
            size="large"
            onClick={() => alert('Nearby Stops (Feature Coming Soon)')}
            icon="📍"
            ariaLabel={t('nearbyStops')}
          >
            {t('nearbyStops')}
          </Button>
          
          <Button
            variant="outline"
            size="large"
            onClick={() => alert('Favorites (Feature Coming Soon)')}
            icon="⭐"
            ariaLabel={t('favorites')}
          >
            {t('favorites')}
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Home;
