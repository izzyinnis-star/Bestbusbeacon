import React from 'react';
import { useSettings } from '../contexts/SettingsContext';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'large',
  ariaLabel,
  icon,
  disabled = false,
  type = 'button'
}) => {
  const { triggerFeedback } = useSettings();

  const handleClick = (e) => {
    if (!disabled) {
      triggerFeedback('success');
      onClick && onClick(e);
    }
  };

  return (
    <button
      className={`button button-${variant} button-${size}`}
      onClick={handleClick}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      disabled={disabled}
      type={type}
    >
      {icon && <span className="button-icon" aria-hidden="true">{icon}</span>}
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;
