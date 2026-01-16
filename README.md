# Best Bus Beacon

An accessible, bilingual bus tracking application designed with accessibility-first principles.

## Features

### ✅ App-Wide Requirements Implemented

1. **Clean, High-Contrast, Accessible Design**
   - High contrast mode toggle
   - Large, clear fonts (18px base, up to 40px for headings)
   - Proper focus indicators for keyboard navigation
   - ARIA labels and roles throughout
   - Screen reader support

2. **Bilingual Support (English & French)**
   - Complete i18n implementation using react-i18next
   - Language toggle in Settings
   - All UI text translated
   - Persistent language preference

3. **Large Buttons & Simple Layouts**
   - Minimum button height: 60px
   - Minimum button width: 200px
   - Clear visual hierarchy
   - Consistent spacing and padding
   - Simple, intuitive navigation

4. **Vibration & Sound Feedback**
   - Vibration feedback for major actions (using Vibration API)
   - Sound feedback with different tones for different actions
   - Toggles to enable/disable each feedback type
   - Success, error, and default feedback patterns

5. **Persistent Settings**
   - All settings stored in localStorage
   - Settings persist between sessions
   - Automatic save on every change
   - Includes: language, vibration, sound, high contrast mode

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **High Contrast Mode**: Toggle for users with visual impairments
- **Large Touch Targets**: All interactive elements meet WCAG 2.1 AAA guidelines
- **Skip Links**: Quick navigation to main content
- **Responsive Design**: Works on all screen sizes

## Technology Stack

- React 19
- Vite (build tool)
- i18next (internationalization)
- Vanilla CSS with CSS variables for theming

## Settings

The Settings page allows users to configure:
- **Language**: Switch between English and French
- **Vibration Feedback**: Enable/disable vibration on actions
- **Sound Feedback**: Enable/disable sound notifications
- **High Contrast Mode**: Toggle high contrast visual theme

All settings are automatically saved and persist across browser sessions.