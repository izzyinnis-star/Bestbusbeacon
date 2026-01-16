import React from 'react';
import { useSettings } from '../contexts/SettingsContext';
import './Toggle.css';

const Toggle = ({ 
  checked, 
  onChange, 
  label, 
  ariaLabel,
  id 
}) => {
  const { triggerFeedback } = useSettings();

  const handleChange = (e) => {
    triggerFeedback('success');
    onChange && onChange(e.target.checked);
  };

  const toggleId = id || `toggle-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="toggle-container">
      <label htmlFor={toggleId} className="toggle-label">
        {label}
      </label>
      <div className="toggle-wrapper">
        <input
          type="checkbox"
          id={toggleId}
          className="toggle-input sr-only"
          checked={checked}
          onChange={handleChange}
          aria-label={ariaLabel || label}
          role="switch"
          aria-checked={checked}
        />
        <label 
          htmlFor={toggleId} 
          className={`toggle-switch ${checked ? 'active' : ''}`}
          aria-hidden="true"
        >
          <span className="toggle-slider"></span>
        </label>
        <span className="toggle-status" aria-live="polite">
          {checked ? 'On' : 'Off'}
        </span>
      </div>
    </div>
  );
};

export default Toggle;
