# BusBeacon - Detailed Design Specification

This document provides comprehensive design specifications for implementing the BusBeacon app in Thunkable X.

## Table of Contents
1. [Screen Designs](#screen-designs)
2. [Component Specifications](#component-specifications)
3. [Logic & Functionality](#logic--functionality)
4. [Accessibility Implementation](#accessibility-implementation)
5. [Multilingual Configuration](#multilingual-configuration)
6. [Implementation Guide](#implementation-guide)

---

## Screen Designs

### 1. Home Screen

**Purpose**: Main interface for beacon activation and app navigation

**Layout**:
```
┌─────────────────────────────────┐
│  [Menu ☰]    BusBeacon   [⚙️]  │
├─────────────────────────────────┤
│                                 │
│      📍 Current Location:       │
│      Main St & 5th Ave          │
│                                 │
│   Nearby Bus Stops:             │
│   • Stop A - 0.1 mi            │
│   • Stop B - 0.3 mi            │
│                                 │
│   ┌─────────────────────────┐  │
│   │                         │  │
│   │   ACTIVATE BEACON       │  │
│   │         🔆              │  │
│   │                         │  │
│   └─────────────────────────┘  │
│                                 │
│      [Help & Tutorial]          │
│                                 │
└─────────────────────────────────┘
```

**Components**:
- **Navigation Bar**
  - Type: Row container
  - Components: Menu button, Title label, Settings button
  - Height: 60px
  - Background: Primary color (#2196F3)

- **Location Display**
  - Type: Column container
  - Label: "Current Location"
  - Value: Dynamic text showing address
  - Icon: 📍 (location pin)
  - Font size: 18px

- **Nearby Stops List**
  - Type: List viewer
  - Max items shown: 3
  - Each item: Stop name + distance
  - Tappable: Yes (shows stop details)

- **Activate Beacon Button**
  - Type: Button
  - Size: 280x280px (centered)
  - Background: Gradient (yellow to orange)
  - Text: "ACTIVATE BEACON"
  - Text color: Black
  - Font size: 24px, bold
  - Border radius: 20px
  - Shadow: Elevated (8dp)
  - Accessibility: aria-label "Activate beacon to signal bus driver"

- **Help Button**
  - Type: Button
  - Size: Full width, 50px height
  - Text: "Help & Tutorial"
  - Style: Outlined

### 2. Beacon Active Screen

**Purpose**: Full-screen visual beacon with controls

**Layout**:
```
┌─────────────────────────────────┐
│                                 │
│     Beacon Active 🔆            │
│                                 │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│  ▓                           ▓  │
│  ▓  FLASHING BEACON PATTERN  ▓  │
│  ▓                           ▓  │
│  ▓      Duration: 0:45       ▓  │
│  ▓                           ▓  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│                                 │
│   ┌─────────────────────────┐  │
│   │     STOP BEACON         │  │
│   └─────────────────────────┘  │
│                                 │
│   Battery: 87% | Volume: 🔊     │
│                                 │
└─────────────────────────────────┘
```

**Components**:
- **Status Bar**
  - Type: Row container
  - Text: "Beacon Active"
  - Icon: 🔆
  - Background: Semi-transparent
  
- **Beacon Display Area**
  - Type: Column container
  - Size: Full screen minus header/footer
  - Background: Animated flashing (yellow ↔ white)
  - Flash interval: 500ms
  - Pattern: Smooth fade transition
  
- **Timer Display**
  - Type: Label
  - Text: "Duration: MM:SS"
  - Font size: 32px, bold
  - Color: Black
  - Updates every second

- **Stop Beacon Button**
  - Type: Button
  - Size: 280x80px
  - Background: Red (#F44336)
  - Text: "STOP BEACON"
  - Text color: White
  - Font size: 22px, bold
  - Position: Bottom center
  - Accessibility: aria-label "Stop beacon signal"

- **Status Footer**
  - Type: Row container
  - Battery indicator
  - Audio volume status
  - Font size: 14px

### 3. Settings Screen

**Purpose**: Configure app preferences and accessibility options

**Layout**:
```
┌─────────────────────────────────┐
│  [← Back]       Settings        │
├─────────────────────────────────┤
│                                 │
│  Language                       │
│  [English ▼]                    │
│                                 │
│  ────────────────────────────  │
│                                 │
│  Beacon Preferences             │
│  ☑ Visual Beacon               │
│  ☑ Audio Alert                 │
│  ☑ Vibration Feedback          │
│  ☐ Flash Light (requires perm) │
│                                 │
│  ────────────────────────────  │
│                                 │
│  Accessibility                  │
│  ☑ High Contrast Mode          │
│  ☑ Screen Reader Support       │
│  Text Size: [═══●═══] Large    │
│                                 │
│  ────────────────────────────  │
│                                 │
│  Notifications                  │
│  ☑ Enable Notifications        │
│  ☑ Sound                       │
│                                 │
│  ────────────────────────────  │
│                                 │
│  Location                       │
│  Permission: Granted ✓          │
│  [Request Location Access]      │
│                                 │
└─────────────────────────────────┘
```

**Components**:
- **Navigation Bar**
  - Back button (navigates to Home)
  - Title: "Settings"

- **Language Selector**
  - Type: Dropdown
  - Options: English, Spanish (Español), French (Français), Mandarin (中文), Arabic (العربية)
  - Default: Device language

- **Beacon Preferences Section**
  - Type: Column with checkboxes
  - Visual Beacon: Toggle (default: on)
  - Audio Alert: Toggle (default: on)
  - Vibration: Toggle (default: on)
  - Flash Light: Toggle (default: off, requires permission)

- **Accessibility Section**
  - High Contrast Mode: Toggle
  - Screen Reader: Toggle
  - Text Size Slider: Range 12-28px

- **Notifications Section**
  - Enable Notifications: Toggle
  - Sound: Toggle

- **Location Section**
  - Permission status display
  - Request button (if not granted)

### 4. Help Screen

**Purpose**: User guidance and support

**Layout**:
```
┌─────────────────────────────────┐
│  [← Back]       Help            │
├─────────────────────────────────┤
│                                 │
│  🎯 Quick Start Guide           │
│  ┌─────────────────────────┐   │
│  │ 1. Grant location perm   │   │
│  │ 2. Press Activate Beacon │   │
│  │ 3. Show screen to driver │   │
│  │ 4. Press Stop when done  │   │
│  └─────────────────────────┘   │
│                                 │
│  ❓ Frequently Asked Questions  │
│  • How does the beacon work?    │
│  • Is my data private?          │
│  • What languages are supported?│
│  • How to enable accessibility? │
│                                 │
│  📧 Contact Support             │
│  [Send Feedback]                │
│                                 │
│  🔒 Privacy Policy              │
│  [View Privacy Policy]          │
│                                 │
└─────────────────────────────────┘
```

**Components**:
- **Quick Start Section**
  - Type: Card with numbered list
  - Clear, simple instructions

- **FAQ Section**
  - Type: Expandable list
  - Each question is tappable to show answer

- **Contact Support**
  - Type: Button
  - Opens email or in-app feedback form

- **Privacy Policy**
  - Type: Button
  - Opens privacy policy text

---

## Component Specifications

### Color Palette

```json
{
  "primary": "#2196F3",
  "primaryDark": "#1976D2",
  "primaryLight": "#BBDEFB",
  "accent": "#FFC107",
  "beaconYellow": "#FFEB3B",
  "beaconOrange": "#FF9800",
  "error": "#F44336",
  "success": "#4CAF50",
  "textPrimary": "#212121",
  "textSecondary": "#757575",
  "background": "#FFFFFF",
  "backgroundDark": "#F5F5F5"
}
```

### Typography

```json
{
  "headingLarge": {
    "fontSize": 32,
    "fontWeight": "bold",
    "fontFamily": "System"
  },
  "headingMedium": {
    "fontSize": 24,
    "fontWeight": "bold",
    "fontFamily": "System"
  },
  "body": {
    "fontSize": 16,
    "fontWeight": "normal",
    "fontFamily": "System"
  },
  "button": {
    "fontSize": 18,
    "fontWeight": "bold",
    "fontFamily": "System"
  },
  "caption": {
    "fontSize": 14,
    "fontWeight": "normal",
    "fontFamily": "System"
  }
}
```

### Touch Targets

All interactive elements meet WCAG 2.1 Level AA requirements:
- Minimum size: 44x44 points
- Spacing between elements: 8 points minimum
- Large primary actions: 280x80 points or larger

---

## Logic & Functionality

### Beacon Activation Flow

```
1. User taps "ACTIVATE BEACON" button
   ├─> Check location permission
   │   ├─> If denied: Show permission request dialog
   │   └─> If granted: Continue
   ├─> Check if beacon preferences loaded
   ├─> Navigate to Beacon Active Screen
   ├─> Start visual animation (flashing)
   ├─> If audio enabled: Play alert sound (looping)
   ├─> If vibration enabled: Trigger haptic feedback
   ├─> Start timer counter
   └─> Set screen brightness to maximum

2. While beacon is active:
   ├─> Animate background color (yellow ↔ white, 500ms interval)
   ├─> Update timer display every second
   ├─> Keep screen awake (prevent auto-lock)
   └─> Monitor battery level

3. User taps "STOP BEACON" button
   ├─> Stop visual animation
   ├─> Stop audio alert
   ├─> Trigger confirmation haptic feedback
   ├─> Reset screen brightness to user preference
   ├─> Navigate back to Home Screen
   └─> Show success message: "Beacon stopped"
```

### Location Detection Logic

```
On App Launch:
├─> Request location permission
├─> If granted:
│   ├─> Get current GPS coordinates
│   ├─> Reverse geocode to address
│   ├─> Display address on Home Screen
│   ├─> Query nearby bus stops (simulated or API)
│   └─> Display list of stops with distances
└─> If denied:
    └─> Show prompt explaining need for location access
```

### Language Switching Logic

```
On App Launch:
├─> Check for saved language preference
│   ├─> If exists: Load saved language
│   └─> If not: Detect device language
├─> Load language strings from translations
└─> Apply to all UI elements

On Language Change (Settings):
├─> Save new language preference to local storage
├─> Reload all UI text strings
└─> Update screen (no restart needed)
```

### Accessibility Features Logic

```
High Contrast Mode:
├─> When enabled:
│   ├─> Increase color contrast ratios (4.5:1 minimum)
│   ├─> Use pure black (#000000) for text
│   ├─> Use white (#FFFFFF) for backgrounds
│   └─> Remove gradients

Screen Reader Support:
├─> Add aria-label to all interactive elements
├─> Implement focus order for keyboard navigation
├─> Announce state changes ("Beacon activated", "Beacon stopped")
└─> Provide text alternatives for icons

Text Size Adjustment:
├─> Scale all font sizes by user preference (0.75x to 1.5x)
├─> Reflow content to fit (no horizontal scrolling)
└─> Maintain touch target sizes
```

---

## Accessibility Implementation

### WCAG 2.1 Level AA Compliance

**1. Perceivable**
- All images have text alternatives
- Color contrast ratios meet 4.5:1 for normal text, 3:1 for large text
- Text can be resized up to 200% without loss of functionality
- Flashing animation stays below 3 flashes per second

**2. Operable**
- All functionality available via touch with 44x44pt minimum
- No time limits on user actions
- Clear focus indicators on all interactive elements
- Gesture alternatives provided (buttons as well as swipes)

**3. Understandable**
- Clear, simple language (readability grade: 8th grade level)
- Consistent navigation across screens
- Error messages provide suggestions for correction
- Help documentation available

**4. Robust**
- Compatible with iOS VoiceOver and Android TalkBack
- Works on iOS 12.0+ and Android 6.0+
- Graceful degradation when features unavailable

### Screen Reader Announcements

```javascript
// Thunkable blocks pseudo-code
when BeaconButton.Click:
  speak("Activating beacon signal")
  
when StopButton.Click:
  speak("Beacon signal stopped")
  
when LocationUpdated:
  speak("Current location: " + LocationAddress)
```

---

## Multilingual Configuration

### Supported Languages

1. **English** (en)
2. **Spanish** (es)
3. **French** (fr)
4. **Mandarin Chinese** (zh)
5. **Arabic** (ar)

### Translation Structure

All UI text stored in a translations object:

```json
{
  "en": {
    "app_name": "BusBeacon",
    "home_title": "BusBeacon",
    "activate_beacon": "ACTIVATE BEACON",
    "stop_beacon": "STOP BEACON",
    "current_location": "Current Location:",
    "nearby_stops": "Nearby Bus Stops:",
    "settings": "Settings",
    "help": "Help & Tutorial",
    "language": "Language",
    "beacon_preferences": "Beacon Preferences",
    "visual_beacon": "Visual Beacon",
    "audio_alert": "Audio Alert",
    "vibration": "Vibration Feedback",
    "flash_light": "Flash Light",
    "accessibility": "Accessibility",
    "high_contrast": "High Contrast Mode",
    "screen_reader": "Screen Reader Support",
    "text_size": "Text Size",
    "notifications": "Notifications",
    "beacon_active": "Beacon Active",
    "duration": "Duration:",
    "battery": "Battery:",
    "permission_location": "Location permission needed to find nearby bus stops",
    "beacon_activated": "Beacon activated successfully",
    "beacon_stopped": "Beacon stopped"
  },
  "es": {
    "app_name": "BusBeacon",
    "home_title": "BusBeacon",
    "activate_beacon": "ACTIVAR BALIZA",
    "stop_beacon": "DETENER BALIZA",
    "current_location": "Ubicación Actual:",
    "nearby_stops": "Paradas de Autobús Cercanas:",
    "settings": "Configuración",
    "help": "Ayuda y Tutorial",
    "language": "Idioma",
    "beacon_preferences": "Preferencias de Baliza",
    "visual_beacon": "Baliza Visual",
    "audio_alert": "Alerta de Audio",
    "vibration": "Retroalimentación por Vibración",
    "flash_light": "Luz de Flash",
    "accessibility": "Accesibilidad",
    "high_contrast": "Modo de Alto Contraste",
    "screen_reader": "Soporte de Lector de Pantalla",
    "text_size": "Tamaño de Texto",
    "notifications": "Notificaciones",
    "beacon_active": "Baliza Activa",
    "duration": "Duración:",
    "battery": "Batería:",
    "permission_location": "Se necesita permiso de ubicación para encontrar paradas cercanas",
    "beacon_activated": "Baliza activada exitosamente",
    "beacon_stopped": "Baliza detenida"
  },
  "fr": {
    "app_name": "BusBeacon",
    "home_title": "BusBeacon",
    "activate_beacon": "ACTIVER LA BALISE",
    "stop_beacon": "ARRÊTER LA BALISE",
    "current_location": "Emplacement Actuel:",
    "nearby_stops": "Arrêts de Bus à Proximité:",
    "settings": "Paramètres",
    "help": "Aide et Tutoriel",
    "language": "Langue",
    "beacon_preferences": "Préférences de Balise",
    "visual_beacon": "Balise Visuelle",
    "audio_alert": "Alerte Audio",
    "vibration": "Retour Haptique",
    "flash_light": "Flash Lumineux",
    "accessibility": "Accessibilité",
    "high_contrast": "Mode Contraste Élevé",
    "screen_reader": "Support du Lecteur d'Écran",
    "text_size": "Taille du Texte",
    "notifications": "Notifications",
    "beacon_active": "Balise Active",
    "duration": "Durée:",
    "battery": "Batterie:",
    "permission_location": "Permission de localisation nécessaire pour trouver les arrêts à proximité",
    "beacon_activated": "Balise activée avec succès",
    "beacon_stopped": "Balise arrêtée"
  },
  "zh": {
    "app_name": "BusBeacon",
    "home_title": "BusBeacon",
    "activate_beacon": "激活信标",
    "stop_beacon": "停止信标",
    "current_location": "当前位置：",
    "nearby_stops": "附近公交站：",
    "settings": "设置",
    "help": "帮助与教程",
    "language": "语言",
    "beacon_preferences": "信标偏好",
    "visual_beacon": "视觉信标",
    "audio_alert": "音频警报",
    "vibration": "振动反馈",
    "flash_light": "闪光灯",
    "accessibility": "无障碍功能",
    "high_contrast": "高对比度模式",
    "screen_reader": "屏幕阅读器支持",
    "text_size": "文字大小",
    "notifications": "通知",
    "beacon_active": "信标激活",
    "duration": "持续时间：",
    "battery": "电池：",
    "permission_location": "需要位置权限才能找到附近的公交站",
    "beacon_activated": "信标已成功激活",
    "beacon_stopped": "信标已停止"
  },
  "ar": {
    "app_name": "BusBeacon",
    "home_title": "BusBeacon",
    "activate_beacon": "تفعيل المنارة",
    "stop_beacon": "إيقاف المنارة",
    "current_location": "الموقع الحالي:",
    "nearby_stops": "محطات الحافلات القريبة:",
    "settings": "الإعدادات",
    "help": "المساعدة والتعليمات",
    "language": "اللغة",
    "beacon_preferences": "تفضيلات المنارة",
    "visual_beacon": "منارة بصرية",
    "audio_alert": "تنبيه صوتي",
    "vibration": "ردود فعل اهتزازية",
    "flash_light": "ضوء الفلاش",
    "accessibility": "إمكانية الوصول",
    "high_contrast": "وضع التباين العالي",
    "screen_reader": "دعم قارئ الشاشة",
    "text_size": "حجم النص",
    "notifications": "الإشعارات",
    "beacon_active": "المنارة نشطة",
    "duration": "المدة:",
    "battery": "البطارية:",
    "permission_location": "إذن الموقع مطلوب للعثور على المحطات القريبة",
    "beacon_activated": "تم تفعيل المنارة بنجاح",
    "beacon_stopped": "تم إيقاف المنارة"
  }
}
```

### Implementation in Thunkable

1. Create an app variable `translations` with the above structure
2. Create an app variable `currentLanguage` (default: device language)
3. Create a function `getText(key)` that returns `translations[currentLanguage][key]`
4. Use `getText(key)` for all UI text instead of hardcoded strings

---

## Implementation Guide

### Step 1: Project Setup in Thunkable X

1. Go to https://x.thunkable.com
2. Click "Create New Project"
3. Name: "BusBeacon"
4. Choose "Blank" template

### Step 2: Create Screens

Create 4 screens:
1. HomeScreen (default)
2. BeaconActiveScreen
3. SettingsScreen
4. HelpScreen

### Step 3: Install Required Components

For each screen, add these components:

**HomeScreen**:
- Row (Navigation bar)
- Column (Main content)
- Button (Menu, Settings, Activate Beacon, Help)
- Label (Location, Title)
- List Viewer (Nearby stops)
- Location Sensor
- Local DB (for preferences)

**BeaconActiveScreen**:
- Column (Full screen container)
- Label (Status, Timer, Battery)
- Button (Stop Beacon)
- Timer component (for animation)
- Sound component (for audio alert)
- Vibration component

**SettingsScreen**:
- Scroll View (for all settings)
- Column containers (for sections)
- Switch components (for toggles)
- Dropdown (for language)
- Slider (for text size)

**HelpScreen**:
- Scroll View
- Column containers
- Labels (for text content)
- Buttons (for actions)

### Step 4: Implement Core Logic

**Beacon Activation** (HomeScreen):
```
When ActivateBeaconButton.Click:
  - Save timestamp
  - Navigate to BeaconActiveScreen
  - Start beacon animation
```

**Beacon Animation** (BeaconActiveScreen):
```
When Screen.Opens:
  - Set Timer1.Interval to 500
  - Set Timer1.Enabled to true
  - Set backgroundColor to yellow

When Timer1.Fires:
  - If backgroundColor is yellow:
      Set backgroundColor to white
    Else:
      Set backgroundColor to yellow
  - Update duration timer
  - If audio enabled:
      Play sound
  - If vibration enabled:
      Vibrate(100)
```

**Stop Beacon** (BeaconActiveScreen):
```
When StopBeaconButton.Click:
  - Set Timer1.Enabled to false
  - Stop sound
  - Reset backgroundColor to white
  - Navigate back to HomeScreen
```

### Step 5: Add Location Detection

```
When HomeScreen.Opens:
  - Request location permission
  - If granted:
      Get LocationSensor.Latitude and LocationSensor.Longitude
      Call reverse geocoding API or use Maps component
      Display address
      Calculate nearby stops (simulated or API call)
```

### Step 6: Implement Translations

1. Create `translations` app variable with all strings
2. Create `currentLanguage` app variable
3. On app start, detect device language
4. Create `getText(key)` function
5. Set all label/button text using `getText(key)`

### Step 7: Add Accessibility Features

1. Set all button sizes to minimum 44x44pt
2. Add `accessibilityLabel` property to all components
3. Use high contrast colors
4. Test with VoiceOver/TalkBack

### Step 8: Testing

1. Test on Thunkable Live app
2. Test all beacon modes (visual, audio, vibration)
3. Test language switching
4. Test with accessibility features enabled
5. Test on different device sizes

### Step 9: Publishing

1. Configure app settings:
   - App name: BusBeacon
   - Bundle ID: com.busbeacon.app
   - Version: 1.0.0
   - Icon: Create 1024x1024px icon
   - Splash screen: Design splash screen

2. Build APK/AAB for Android
3. Build for iOS (requires Apple Developer account)
4. Submit to stores with descriptions in all supported languages

---

## Technical Notes

### Battery Optimization

The beacon feature can drain battery quickly. To optimize:
- Limit beacon duration (auto-stop after 5 minutes)
- Display battery warning if below 20%
- Reduce animation complexity when battery is low

### Offline Functionality

Core beacon features work without internet:
- Visual beacon: Always works
- Audio beacon: Always works (local sound file)
- Location detection: Works with GPS (no internet needed)
- Nearby stops: Requires internet or cached data

### Privacy Considerations

- Location data never sent to external servers
- No user tracking or analytics
- All preferences stored locally
- Open source and transparent

---

## Future Enhancements (v2.0)

- Integration with real-time bus tracking APIs
- QR code generation for bus drivers to scan
- Social features (share beacon with other riders)
- Smartwatch companion app
- Widget for quick beacon activation
- Custom beacon colors and patterns
- Integration with transit agency apps

---

## Support & Resources

- Thunkable Documentation: https://docs.thunkable.com
- Thunkable Community: https://community.thunkable.com
- Accessibility Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Project Repository: https://github.com/izzyinnis-star/Bestbusbeacon

---

*Document Version: 1.0*  
*Last Updated: January 2026*
