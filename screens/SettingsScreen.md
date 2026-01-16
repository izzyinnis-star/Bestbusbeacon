# Settings Screen

Configuration screen for app preferences, beacon settings, accessibility options, and language selection.

## Components

### Navigation Bar
- **Back Button**: "← Back" - Returns to Home screen
- **Title**: "Settings"

### Settings Sections

#### 1. Language Section
- **Section Title**: "Language"
- **Dropdown Selector**
  - Options: English, Español, Français, 中文, العربية
  - Current selection highlighted
  - Changes apply immediately

#### 2. Beacon Preferences Section
- **Section Title**: "Beacon Preferences"
- **Visual Beacon Toggle**
  - Label: "Visual Beacon"
  - Description: "Flash screen to signal driver"
  - Default: ON
- **Audio Alert Toggle**
  - Label: "Audio Alert"
  - Description: "Play alert sound"
  - Default: ON
- **Vibration Toggle**
  - Label: "Vibration Feedback"
  - Description: "Haptic feedback for actions"
  - Default: ON
- **Flash Light Toggle**
  - Label: "Flash Light"
  - Description: "Use camera flash (requires permission)"
  - Default: OFF

#### 3. Accessibility Section
- **Section Title**: "Accessibility"
- **High Contrast Mode Toggle**
  - Label: "High Contrast Mode"
  - Description: "Increase color contrast"
  - Default: OFF
- **Screen Reader Toggle**
  - Label: "Screen Reader Support"
  - Description: "Enhanced VoiceOver/TalkBack"
  - Default: AUTO (device setting)
- **Text Size Slider**
  - Label: "Text Size"
  - Range: 75% to 150%
  - Current value display: "Large" / "Normal" / "Small"
  - Default: 100% (Normal)

#### 4. Notifications Section
- **Section Title**: "Notifications"
- **Enable Notifications Toggle**
  - Label: "Enable Notifications"
  - Description: "Receive app notifications"
  - Default: ON
- **Sound Toggle**
  - Label: "Sound"
  - Description: "Notification sounds"
  - Default: ON
  - Disabled if notifications are off

#### 5. Location Section
- **Section Title**: "Location"
- **Permission Status**
  - Label: "Permission:"
  - Status: "Granted ✓" / "Denied ✗" / "Not Requested"
- **Request Button**
  - Text: "Request Location Access"
  - Visible only if permission not granted
  - Opens system permission dialog

## Behaviors

### On Screen Open
1. Load all user preferences from Local DB
2. Display current settings
3. Check permission statuses
4. Apply current language to UI

### On Language Change
```
When LanguageDropdown.Selection changes:
  - Set currentLanguage to selected value
  - Save to Local DB: preferences.language
  - Call reloadAllTranslations()
  - Update all UI text elements
  - Show toast: "Language updated"
```

### On Beacon Preference Toggle
```
When any beacon toggle changes:
  - Save new value to Local DB
  - If FlashLight toggled ON and permission not granted:
      Request camera permission
      If denied: Reset toggle to OFF
  - Update app variable: beaconPreferences
  - Show toast: "Settings saved"
```

### On Accessibility Toggle
```
When HighContrastMode toggles:
  - Save to Local DB
  - Call applyHighContrastMode()
  - Update all screen colors immediately
  
When TextSizeSlider changes:
  - Save to Local DB
  - Call applyTextScale(value)
  - Update all font sizes immediately
  - Show preview of new size
```

### On Notification Toggle
```
When EnableNotifications toggles:
  - Save to Local DB
  - Request notification permission if toggled ON
  - If denied: Reset toggle to OFF
  - Enable/disable sound toggle based on state
```

### On Location Request Button Click
```
When RequestLocationButton clicks:
  - Request location permission
  - Update permission status display
  - If granted:
      Hide request button
      Show "Granted ✓"
      Trigger location update on Home screen
  - If denied:
      Show explanation dialog
      Provide link to device settings
```

### On Back Button Click
1. Save all changes (if auto-save is off)
2. Navigate back to Home screen
3. Trigger refresh of Home screen with new settings

## Variables

- `userPreferences` (object): All user settings
  ```json
  {
    "language": "en",
    "visualBeacon": true,
    "audioAlert": true,
    "vibration": true,
    "flashLight": false,
    "highContrast": false,
    "screenReader": "auto",
    "textSize": 100,
    "notifications": true,
    "notificationSound": true
  }
  ```
- `permissions` (object): Permission statuses
  ```json
  {
    "location": "granted",
    "notifications": "granted",
    "camera": "denied"
  }
  ```

## Styling

### Colors
- Background: White (#FFFFFF)
- Navigation bar: Primary blue (#2196F3)
- Section dividers: Light gray (#E0E0E0)
- Toggle active: Primary blue (#2196F3)
- Toggle inactive: Gray (#BDBDBD)
- Text primary: Dark gray (#212121)
- Text secondary: Medium gray (#757575)

### Fonts
- Section title: 20px, bold
- Setting label: 16px, bold
- Setting description: 14px, regular
- Current value: 14px, regular, italic

### Spacing
- Screen padding: 16px
- Section spacing: 24px
- Setting item spacing: 16px
- Section divider: 1px solid gray

## Accessibility

- All toggles have clear labels and descriptions
- Slider has value announcements for screen readers
- Permission status clearly indicates granted/denied
- All touch targets minimum 44x44pt
- High contrast mode preview shows before applying
- Screen reader announces all state changes

## Translations

Text elements use `getText(key)` function:
- `getText('settings')` → "Settings"
- `getText('language')` → "Language"
- `getText('beacon_preferences')` → "Beacon Preferences"
- `getText('visual_beacon')` → "Visual Beacon"
- `getText('audio_alert')` → "Audio Alert"
- `getText('vibration')` → "Vibration Feedback"
- `getText('flash_light')` → "Flash Light"
- `getText('accessibility')` → "Accessibility"
- `getText('high_contrast')` → "High Contrast Mode"
- `getText('screen_reader')` → "Screen Reader Support"
- `getText('text_size')` → "Text Size"
- `getText('notifications')` → "Notifications"

## Implementation Notes

### Thunkable Components Used
- Screen (SettingsScreen)
- Scroll View (for long content)
- Column (section containers)
- Row (for label + toggle pairs)
- Label (section titles, descriptions)
- Switch (toggles)
- Dropdown (language selector)
- Slider (text size)
- Button (back, request permission)
- Local DB (storage)

### Functions
- `loadPreferences()`
- `savePreference(key, value)`
- `reloadAllTranslations()`
- `applyHighContrastMode()`
- `applyTextScale(scale)`
- `checkPermission(type)`
- `requestPermission(type)`

### Local DB Keys
- `app.language`
- `beacon.visual`
- `beacon.audio`
- `beacon.vibration`
- `beacon.flashLight`
- `accessibility.highContrast`
- `accessibility.textSize`
- `notifications.enabled`
- `notifications.sound`

## Visual Reference

```
┌─────────────────────────────────┐
│  [← Back]      Settings         │  ← Navigation (60px)
├─────────────────────────────────┤
│ (Scrollable Content)            │
│                                 │
│  Language                       │  ← Section 1
│  [English           ▼]          │
│                                 │
│  ─────────────────────────────  │  ← Divider
│                                 │
│  Beacon Preferences             │  ← Section 2
│  Visual Beacon          [ON]    │
│  Audio Alert            [ON]    │
│  Vibration Feedback     [ON]    │
│  Flash Light            [OFF]   │
│    (Requires camera permission) │
│                                 │
│  ─────────────────────────────  │
│                                 │
│  Accessibility                  │  ← Section 3
│  High Contrast Mode     [OFF]   │
│  Screen Reader Support  [AUTO]  │
│  Text Size: [═══●═══] Normal    │
│                                 │
│  ─────────────────────────────  │
│                                 │
│  Notifications                  │  ← Section 4
│  Enable Notifications   [ON]    │
│  Sound                  [ON]    │
│                                 │
│  ─────────────────────────────  │
│                                 │
│  Location                       │  ← Section 5
│  Permission: Granted ✓          │
│                                 │
└─────────────────────────────────┘
```

## Testing Checklist

- [ ] Settings load correctly from storage
- [ ] Language change updates all UI text
- [ ] Language change persists after app restart
- [ ] All toggles save changes immediately
- [ ] Flash light toggle requests camera permission
- [ ] High contrast mode applies immediately
- [ ] Text size slider updates font sizes live
- [ ] Text size change persists
- [ ] Notification toggles request permission
- [ ] Location permission status displays correctly
- [ ] Request button only shows when permission denied
- [ ] Back button returns to Home screen
- [ ] All settings persist after app restart
- [ ] Screen is scrollable on small devices
- [ ] All touch targets are accessible
- [ ] Screen reader announces all changes
- [ ] Works in all supported languages

## Permission Handling

### Location Permission
```
States:
- "not_determined": Show request button
- "denied": Show request button + explanation
- "granted": Show checkmark, hide button
- "restricted": Show message "Location disabled in device settings"

Request flow:
1. User taps request button
2. System permission dialog appears
3. If granted: Update UI, enable location features
4. If denied: Show explanation, option to open device settings
```

### Camera Permission (Flash Light)
```
States:
- "not_determined": Allow toggle, request on enable
- "denied": Toggle disabled, show message
- "granted": Toggle enabled

Request flow:
1. User toggles flash light ON
2. Check permission status
3. If not granted: Request permission
4. If denied: Reset toggle to OFF, show message
5. If granted: Keep toggle ON, save preference
```

### Notification Permission
```
States:
- "not_determined": Show dialog on first toggle
- "denied": Toggle disabled, show message
- "granted": Toggle enabled

Request flow:
1. User toggles notifications ON
2. Request notification permission
3. If granted: Enable notifications
4. If denied: Reset toggle to OFF, show message
```

## Known Issues / Future Improvements

- Add ability to reset all settings to defaults
- Add data usage settings
- Add cache management
- Add about section with app version
- Add feedback/support contact options
- Add privacy policy link
- Add terms of service link
- Add theme options (light/dark/auto)
- Add custom beacon duration setting
- Add nearby stop radius setting
- Export/import settings feature
