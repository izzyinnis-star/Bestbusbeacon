# Visual UI Guide

## Home Screen - Normal Mode

```
┌─────────────────────────────────────┐
│                                     │
│      BEST BUS BEACON                │
│                                     │
│                                     │
│         ╭─────────────╮             │
│        ╱               ╲            │
│       │                 │           │
│       │   SIGNAL BUS    │           │
│       │                 │           │
│        ╲               ╱            │
│         ╰─────────────╯             │
│        (Blue Circle)                │
│                                     │
│                                     │
│    ┌─────────────────────┐         │
│    │      Settings       │         │
│    └─────────────────────┘         │
│                                     │
└─────────────────────────────────────┘
```

## Home Screen - High Contrast Mode

```
┌─────────────────────────────────────┐
│ Background: BLACK                   │
│                                     │
│    BEST BUS BEACON (White Text)     │
│                                     │
│                                     │
│         ╭─────────────╮             │
│        ╱               ╲            │
│       │                 │           │
│       │   SIGNAL BUS    │           │
│       │  (Black Text)   │           │
│        ╲               ╱            │
│         ╰─────────────╯             │
│      (Yellow Circle)                │
│                                     │
│                                     │
│    ┌─────────────────────┐         │
│    │    Settings         │         │
│    │  (Yellow Button)    │         │
│    │  (Black Text)       │         │
│    └─────────────────────┘         │
│                                     │
└─────────────────────────────────────┘
```

## Home Screen - Signaling Active

```
┌─────────────────────────────────────┐
│                                     │
│      BEST BUS BEACON                │
│                                     │
│       SIGNALING...                  │
│                                     │
│         ╭─────────────╮             │
│        ╱               ╲            │
│       │                 │           │
│       │   STOP SIGNAL   │           │
│       │                 │           │
│        ╲               ╱            │
│         ╰─────────────╯             │
│   (Green/Yellow Circle Pulsing)     │
│                                     │
│                                     │
│    ┌─────────────────────┐         │
│    │      Settings       │         │
│    └─────────────────────┘         │
│                                     │
└─────────────────────────────────────┘
```

## Settings Screen - Normal Mode

```
┌─────────────────────────────────────┐
│                                     │
│         SETTINGS                    │
│                                     │
├─────────────────────────────────────┤
│ Language                            │
│ ┌─────────┐┌─────────┐┌─────────┐ │
│ │English  ││Spanish  ││French   │ │
│ │ (Blue)  ││         ││         │ │
│ └─────────┘└─────────┘└─────────┘ │
├─────────────────────────────────────┤
│ High Contrast Mode                  │
│                        ON   [⚪━━] │
├─────────────────────────────────────┤
│ Sound                               │
│                        ON   [━━⚪] │
├─────────────────────────────────────┤
│ Vibration                           │
│                        ON   [━━⚪] │
├─────────────────────────────────────┤
│                                     │
│    ┌─────────────────────┐         │
│    │        Home         │         │
│    └─────────────────────┘         │
│                                     │
└─────────────────────────────────────┘
```

## Settings Screen - High Contrast Mode

```
┌─────────────────────────────────────┐
│ Background: BLACK                   │
│                                     │
│      SETTINGS (White Text)          │
│                                     │
├─────────────────────────────────────┤
│ Language (White Text)               │
│ ┌─────────┐┌─────────┐┌─────────┐ │
│ │English  ││Spanish  ││French   │ │
│ │(Yellow) ││(Border) ││(Border) │ │
│ │ Black   ││ White   ││ White   │ │
│ │  Text   ││  Text   ││  Text   │ │
│ └─────────┘└─────────┘└─────────┘ │
├─────────────────────────────────────┤
│ High Contrast Mode (White Text)     │
│                        ON   [⚫━━] │
├─────────────────────────────────────┤
│ Sound (White Text)                  │
│                        ON   [━━⚫] │
├─────────────────────────────────────┤
│ Vibration (White Text)              │
│                        ON   [━━⚫] │
├─────────────────────────────────────┤
│                                     │
│    ┌─────────────────────┐         │
│    │      Home           │         │
│    │  (Yellow Button)    │         │
│    │  (Black Text)       │         │
│    └─────────────────────┘         │
│                                     │
└─────────────────────────────────────┘
```

## Color Specifications

### Normal Mode
- **Background**: #FFFFFF (White)
- **Text**: #000000 (Black)
- **Primary Buttons**: #007AFF (iOS Blue)
- **Primary Button Text**: #FFFFFF (White)
- **Signal Active**: #34C759 (Green)
- **Signal Inactive**: #007AFF (Blue)

### High Contrast Mode
- **Background**: #000000 (Black) ✓
- **Text**: #FFFFFF (White) ✓
- **All Buttons**: #FFFF00 (Yellow) ✓
- **All Button Text**: #000000 (Black) ✓
- **Signal Active**: #FFFF00 (Yellow)
- **Borders**: #FFFFFF (White)

## Interaction Flow

### Starting Signal
1. User taps "SIGNAL BUS" button
2. **Visual**: Button changes to "STOP SIGNAL", changes color
3. **Sound** (if enabled): Chime plays 🔔
4. **Vibration** (if enabled): Device vibrates
5. **Status**: "SIGNALING..." text appears

### Stopping Signal
1. User taps "STOP SIGNAL" button
2. **Visual**: Button changes back to "SIGNAL BUS"
3. **Vibration** (if enabled): Device vibrates
4. **Status**: "SIGNALING..." text disappears

### Changing Settings
1. User taps "Settings" button
2. **Vibration** (if enabled): Device vibrates
3. **Navigation**: Settings screen opens
4. User changes any setting (language, toggles)
5. **Vibration** (if enabled): Device vibrates on change
6. **Persistence**: Setting saved to AsyncStorage immediately
7. **Effect**: Visual change applies immediately
8. User taps "Home"
9. **Navigation**: Returns to home screen with new settings

### Enabling High Contrast
1. User navigates to Settings
2. User toggles "High Contrast Mode" ON
3. **Immediate Effect**: 
   - Background → Black
   - Text → White
   - All Buttons → Yellow with Black text
   - Status bar → Light content
4. Setting persists across app restarts

## Accessibility Features Summary

✅ **Visual**
- High contrast mode for low vision users
- Large buttons (250x250 signal button)
- Clear color differentiation
- Status text for current state

✅ **Audio**
- Optional sound feedback (chime)
- Can be disabled in settings

✅ **Haptic**
- Vibration feedback on all interactions
- Different durations for different actions
- Can be disabled in settings

✅ **Language**
- English, Spanish, French
- Complete UI translation
- Easy to add more languages

✅ **Persistence**
- All settings saved automatically
- No data loss on app restart
- Fast loading from AsyncStorage

## Touch Target Sizes

- **Signal Button**: 250x250 pixels (Excellent - exceeds WCAG AAA)
- **Settings Button**: 200+ pixels wide (Good)
- **Toggle Switches**: Standard React Native Switch (Good)
- **Language Buttons**: 100+ pixels wide (Good)
- **Back Button**: 200+ pixels wide (Good)

All interactive elements meet or exceed WCAG 2.1 Level AAA requirements for touch target size (44x44 points minimum).
