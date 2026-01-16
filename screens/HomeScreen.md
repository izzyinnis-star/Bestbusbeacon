# Home Screen

The main landing screen of the BusBeacon app where users can activate the beacon.

## Components

### Navigation Bar
- **Menu Button** (☰): Opens side menu/drawer
- **App Title**: "BusBeacon"
- **Settings Button** (⚙️): Navigates to Settings screen

### Location Section
- **Location Icon**: 📍
- **Location Label**: "Current Location:"
- **Address Display**: Dynamic text showing current street address
- **Status**: Shows "Getting location..." if permission not granted

### Nearby Stops Section
- **Section Title**: "Nearby Bus Stops:"
- **List Viewer**: Shows up to 3 nearest bus stops
  - Each item format: "Stop Name - Distance"
  - Example: "Main St Station - 0.2 mi"
  - Tappable to show more details (future feature)

### Main Action
- **Activate Beacon Button**
  - Size: 280x280px (circular or rounded square)
  - Centered on screen
  - Large, prominent design
  - Background: Gradient (yellow to orange)
  - Text: "ACTIVATE BEACON"
  - Icon: 🔆
  - Accessibility: Large touch target, clear label

### Help Section
- **Help Button**: "Help & Tutorial"
  - Full width
  - Navigates to Help screen

## Behaviors

### On Screen Open
1. Check location permission
2. If granted: Fetch current location and nearby stops
3. If denied: Show request dialog
4. Load user preferences (language, accessibility settings)
5. Apply translations to UI text

### On Activate Beacon Button Click
1. Validate location permission
2. Get beacon preferences from storage
3. Trigger haptic feedback
4. Navigate to Beacon Active screen
5. Pass beacon duration parameter

### On Settings Button Click
1. Navigate to Settings screen

### On Menu Button Click
1. Open menu drawer (or navigate to Help)

### On Help Button Click
1. Navigate to Help screen

## Variables

- `currentLocation` (object): {latitude, longitude, address}
- `nearbyStops` (list): Array of stop objects
- `userPreferences` (object): Loaded from Local DB

## Styling

### Colors
- Background: White (#FFFFFF)
- Navigation bar: Primary blue (#2196F3)
- Beacon button: Gradient (yellow #FFEB3B to orange #FF9800)
- Text: Dark gray (#212121)

### Fonts
- Title: 32px, bold
- Body text: 16px, regular
- Button text: 24px, bold
- Caption: 14px, regular

### Spacing
- Screen padding: 16px
- Component spacing: 12px
- Section spacing: 24px

## Accessibility

- All text elements have semantic labels
- Beacon button has aria-label: "Activate beacon to signal bus driver"
- Screen reader announces location when updated
- High contrast mode adjusts colors automatically
- All touch targets minimum 44x44pt

## Translations

Text elements use `getText(key)` function:
- `getText('home_title')` → "BusBeacon"
- `getText('activate_beacon')` → "ACTIVATE BEACON"
- `getText('current_location')` → "Current Location:"
- `getText('nearby_stops')` → "Nearby Bus Stops:"
- `getText('help')` → "Help & Tutorial"

## Implementation Notes

### Thunkable Components Used
- Screen (HomeScreen)
- Row (Navigation)
- Column (Main layout)
- Label (Text displays)
- Button (Actions)
- List Viewer (Nearby stops)
- Location Sensor (GPS)
- Local DB (Storage)

### Functions
- `checkLocationPermission()`
- `loadNearbyStops()`
- `navigateToBeacon()`
- `getText(key)`

## Visual Reference

```
┌─────────────────────────────────┐
│  [☰]      BusBeacon        [⚙️]  │  ← Navigation Bar (60px)
├─────────────────────────────────┤
│                                 │
│      📍 Current Location:       │  ← Location Section
│      Main St & 5th Ave          │
│                                 │
│   Nearby Bus Stops:             │  ← Nearby Stops Section
│   ┌─────────────────────────┐  │
│   │ • Main St - 0.1 mi      │  │
│   │ • Oak Ave - 0.3 mi      │  │
│   │ • Park Rd - 0.5 mi      │  │
│   └─────────────────────────┘  │
│                                 │
│   ┌─────────────────────────┐  │
│   │                         │  │
│   │   ACTIVATE BEACON       │  │  ← Main Action Button
│   │         🔆              │  │     (280x280px)
│   │                         │  │
│   └─────────────────────────┘  │
│                                 │
│   ┌─────────────────────────┐  │
│   │   Help & Tutorial       │  │  ← Help Button
│   └─────────────────────────┘  │
│                                 │
└─────────────────────────────────┘
```

## Testing Checklist

- [ ] Screen loads correctly
- [ ] Location permission request shows
- [ ] Current location displays when permission granted
- [ ] Nearby stops list populates
- [ ] Activate button is responsive
- [ ] Activate button triggers navigation to Beacon screen
- [ ] Settings button opens Settings screen
- [ ] Help button opens Help screen
- [ ] All text displays in selected language
- [ ] High contrast mode works
- [ ] Screen reader announces all elements
- [ ] Works on different screen sizes (phone/tablet)

## Known Issues / Future Improvements

- Nearby stops currently simulated; needs real API integration
- Add pull-to-refresh for location updates
- Add map view option
- Cache location data for offline use
- Add recent beacon history
