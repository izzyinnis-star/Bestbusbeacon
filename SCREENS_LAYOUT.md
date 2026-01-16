# Screens Layout

## Home Screen

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                              ┃
┃                              ┃
┃                              ┃
┃       Not Signaling          ┃  ← Status indicator
┃                              ┃
┃                              ┃
┃    ┏━━━━━━━━━━━━━━━━━━━━━┓   ┃
┃    ┃                     ┃   ┃
┃    ┃   Signal Bus        ┃   ┃  ← Large button
┃    ┃                     ┃   ┃     (grey when inactive)
┃    ┗━━━━━━━━━━━━━━━━━━━━━┛   ┃
┃                              ┃
┃          Settings            ┃  ← Settings button
┃                              ┃
┃                              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

When Signaling Active:
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                              ┃
┃                              ┃
┃    ✨ Signaling Active ✨     ┃  ← Status changes
┃                              ┃
┃    ┏━━━━━━━━━━━━━━━━━━━━━┓   ┃
┃    ┃                     ┃   ┃  ← Button pulses
┃    ┃   Signal Bus        ┃   ┃     (bright yellow)
┃    ┃                     ┃   ┃     (scale 1.0→1.2)
┃    ┗━━━━━━━━━━━━━━━━━━━━━┛   ┃
┃                              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

## Settings Screen

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                              ┃
┃         Settings             ┃  ← Title
┃                              ┃
┃  ┌────────────────────────┐  ┃
┃  │ Language     [EN] [FR] │  ┃  ← Language toggle
┃  └────────────────────────┘  ┃
┃                              ┃
┃  ┌────────────────────────┐  ┃
┃  │ High Contrast     ○─   │  ┃  ← High-contrast toggle
┃  └────────────────────────┘  ┃
┃                              ┃
┃  ┌────────────────────────┐  ┃
┃  │ Sound            ─●    │  ┃  ← Sound toggle
┃  └────────────────────────┘  ┃
┃                              ┃
┃  ┌────────────────────────┐  ┃
┃  │ Vibration        ─●    │  ┃  ← Vibration toggle
┃  └────────────────────────┘  ┃
┃                              ┃
┃     ┏━━━━━━━━━━━━━━━━━━┓     ┃
┃     ┃  Test Feedback   ┃     ┃  ← Test button
┃     ┗━━━━━━━━━━━━━━━━━━┛     ┃     (green)
┃                              ┃
┃          Back                ┃  ← Back button
┃                              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

## High-Contrast Mode Example

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ █████████████████████████████┃  ← Black background
┃ █                           █┃     White text
┃ █   Not Signaling           █┃     High contrast
┃ █                           █┃
┃ █  ┏━━━━━━━━━━━━━━━━━━━━━┓  █┃
┃ █  ┃                     ┃  █┃
┃ █  ┃   Signal Bus        ┃  █┃  ← Dark grey button
┃ █  ┃                     ┃  █┃     (inactive)
┃ █  ┗━━━━━━━━━━━━━━━━━━━━━┛  █┃
┃ █                           █┃
┃ █       Settings            █┃
┃ █                           █┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

When Active (High-Contrast):
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ █████████████████████████████┃
┃ █                           █┃
┃ █   Signaling Active        █┃
┃ █                           █┃
┃ █  ┏━━━━━━━━━━━━━━━━━━━━━┓  █┃
┃ █  ┃                     ┃  █┃
┃ █  ┃   Signal Bus        ┃  █┃  ← Bright yellow
┃ █  ┃   (YELLOW/BLACK)    ┃  █┃     (active + pulsing)
┃ █  ┗━━━━━━━━━━━━━━━━━━━━━┛  █┃
┃ █                           █┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

## Interaction Flow

```
┌─────────────┐
│ Home Screen │
└──────┬──────┘
       │
       ├─ Press "Signal Bus" button
       │  ├─ Toggle state
       │  ├─ Change color
       │  ├─ Play chime (if enabled)
       │  ├─ Vibrate (if enabled)
       │  └─ Start/stop animation
       │
       └─ Press "Settings" button
          │
          ▼
     ┌──────────────────┐
     │ Settings Screen  │
     └────────┬─────────┘
              │
              ├─ Change language → Updates all text
              ├─ Toggle high-contrast → Updates colors
              ├─ Toggle sound → Updates feedback
              ├─ Toggle vibration → Updates feedback
              ├─ Press "Test Feedback" → Test settings
              └─ Press "Back" → Return to Home
```

## Color Scheme

### Normal Mode
- Background: Light grey (#f5f5f5)
- Text: Dark grey (#333333)
- Inactive button: Grey (#9E9E9E)
- Active button: Gold/Yellow (#FFD700)
- Settings button: Blue (#2196F3)
- Test button: Green (#4CAF50)

### High-Contrast Mode
- Background: Black (#000000)
- Text: White (#FFFFFF)
- Inactive button: Dark grey (#333333)
- Active button: Bright yellow (#FFFF00)
- Settings button: White (#FFFFFF)
- Test button: Yellow (#FFFF00)

## Animations

### Pulsing Animation (Home Screen - Active State)
```
Size: 1.0 → 1.1 → 1.2 → 1.1 → 1.0 (repeat)
Duration: 800ms per direction
Easing: Ease in/out
Loop: Continuous while active
```

## Persistence

All settings are saved to AsyncStorage:
- language: 'en' | 'fr'
- highContrast: boolean
- soundEnabled: boolean
- vibrationEnabled: boolean

Settings load automatically on app startup.
