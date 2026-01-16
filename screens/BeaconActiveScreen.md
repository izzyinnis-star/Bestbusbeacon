# Beacon Active Screen

The full-screen visual beacon that signals bus drivers. This screen displays a flashing pattern to get the driver's attention.

## Components

### Status Bar
- **Status Label**: "Beacon Active 🔆"
- **Background**: Semi-transparent overlay
- **Position**: Top of screen

### Beacon Display Area
- **Container**: Full-screen column
- **Animation**: Flashing background (yellow ↔ white)
- **Flash Interval**: 500ms
- **Transition**: Smooth fade
- **Pattern**: Alternating colors for maximum visibility

### Timer Display
- **Format**: "Duration: MM:SS"
- **Font Size**: 32px, bold
- **Color**: Black (high contrast)
- **Position**: Center of screen
- **Updates**: Every second

### Stop Beacon Button
- **Text**: "STOP BEACON"
- **Size**: 280x80px
- **Background**: Red (#F44336)
- **Text Color**: White
- **Position**: Bottom center (with margin)
- **Accessibility**: Large touch target, clear label

### Status Footer
- **Battery Indicator**: Shows current battery percentage
- **Volume Status**: Shows if audio is on/off
- **Font Size**: 14px
- **Position**: Below stop button

## Behaviors

### On Screen Open
1. Load beacon preferences from storage
2. Set screen brightness to maximum
3. Prevent screen auto-lock
4. Start timer (count up from 0:00)
5. If visual beacon enabled: Start flashing animation
6. If audio alert enabled: Play alert sound (looping)
7. If vibration enabled: Trigger initial haptic feedback
8. Monitor battery level

### Flashing Animation Logic
```
When Timer1 fires (every 500ms):
  If backgroundColor == yellow:
    Set backgroundColor to white
  Else:
    Set backgroundColor to yellow
```

### Timer Logic
```
When Timer2 fires (every 1000ms):
  Increment seconds counter
  If seconds >= 60:
    Increment minutes
    Reset seconds to 0
  Update display: "Duration: MM:SS"
  
  If duration >= 300 seconds (5 minutes):
    Auto-stop beacon (battery conservation)
    Show warning: "Beacon auto-stopped after 5 minutes"
```

### Audio Alert Logic
```
When Screen.Opens AND audioEnabled:
  Set Sound1.Loop to true
  Play Sound1
  
When Screen.Closes OR StopButton.Click:
  Stop Sound1
```

### On Stop Beacon Button Click
1. Stop flashing animation
2. Stop audio alert
3. Stop vibration
4. Trigger confirmation haptic feedback
5. Reset screen brightness to normal
6. Re-enable screen auto-lock
7. Navigate back to Home screen
8. Show toast: "Beacon stopped"

### Battery Monitoring
```
When Timer3 fires (every 30 seconds):
  Get current battery level
  Update battery display
  
  If battery < 20%:
    Show warning: "Low battery - Beacon may stop soon"
    Reduce animation complexity
  
  If battery < 10%:
    Auto-stop beacon
    Show message: "Beacon stopped due to low battery"
```

## Variables

- `beaconStartTime` (number): Timestamp when beacon started
- `isFlashing` (boolean): Current animation state
- `secondsElapsed` (number): Beacon duration counter
- `visualEnabled` (boolean): User preference
- `audioEnabled` (boolean): User preference
- `vibrationEnabled` (boolean): User preference
- `batteryLevel` (number): Current battery percentage

## Styling

### Normal Mode
- Background: Alternating yellow (#FFEB3B) and white (#FFFFFF)
- Text: Black (#000000)
- Stop button: Red (#F44336)
- Status text: White on semi-transparent black

### High Contrast Mode
- Background: Alternating pure black (#000000) and pure white (#FFFFFF)
- Text: Opposite of background
- Stop button: Dark red (#C62828)
- Increased border thickness

### Colors
- Primary flash color: Yellow (#FFEB3B)
- Secondary flash color: White (#FFFFFF)
- Stop button: Red (#F44336)
- Text: Black (#000000)
- Status bar: Semi-transparent black (rgba(0,0,0,0.3))

### Fonts
- Timer: 32px, bold, monospace
- Stop button: 22px, bold
- Status footer: 14px, regular

### Spacing
- Screen padding: 16px
- Button margin bottom: 32px
- Timer position: Center (vertically and horizontally)

## Accessibility

- Stop button minimum 280x80px (large touch target)
- Stop button aria-label: "Stop beacon signal"
- Screen reader announces: "Beacon activated" on open
- Screen reader announces: "Beacon stopped" on close
- High contrast mode increases visibility
- Haptic feedback confirms actions
- Timer is readable with screen readers

## Translations

Text elements use `getText(key)` function:
- `getText('beacon_active')` → "Beacon Active"
- `getText('stop_beacon')` → "STOP BEACON"
- `getText('duration')` → "Duration:"
- `getText('battery')` → "Battery:"

## Implementation Notes

### Thunkable Components Used
- Screen (BeaconActiveScreen)
- Column (Full-screen container)
- Label (Timer, status, battery)
- Button (Stop beacon)
- Timer (x3: Animation, Duration, Battery monitoring)
- Sound (Audio alert)
- Device (Vibration, screen brightness, battery)

### Functions
- `startBeacon()`
- `stopBeacon()`
- `toggleFlashColor()`
- `updateTimer()`
- `checkBattery()`

### Timers Configuration
- Timer1 (Animation): Interval 500ms, enabled on start
- Timer2 (Duration): Interval 1000ms, enabled on start
- Timer3 (Battery): Interval 30000ms, enabled on start

## Visual Reference

```
┌─────────────────────────────────┐
│  ▓▓▓ Beacon Active 🔆 ▓▓▓▓▓▓▓▓  │  ← Status Bar
│                                 │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│  ▓                           ▓  │
│  ▓   (Flashing Background)   ▓  │
│  ▓                           ▓  │
│  ▓      Duration: 0:45       ▓  │  ← Timer Display
│  ▓                           ▓  │     (32px, bold)
│  ▓                           ▓  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│                                 │
│   ┌─────────────────────────┐  │
│   │                         │  │
│   │     STOP BEACON         │  │  ← Stop Button
│   │                         │  │     (280x80px)
│   └─────────────────────────┘  │
│                                 │
│   Battery: 87% | Volume: 🔊     │  ← Status Footer
│                                 │
└─────────────────────────────────┘

Animation Cycle (repeats every 500ms):
Frame 1: Background = Yellow (#FFEB3B)
  ↓ 500ms
Frame 2: Background = White (#FFFFFF)
  ↓ 500ms
Frame 1: (repeat)
```

## Testing Checklist

- [ ] Screen opens with correct beacon preferences
- [ ] Visual animation starts automatically
- [ ] Audio alert plays if enabled
- [ ] Vibration triggers if enabled
- [ ] Timer counts up correctly
- [ ] Battery level displays and updates
- [ ] Stop button stops all beacon functions
- [ ] Returns to Home screen when stopped
- [ ] Screen stays awake during beacon
- [ ] Brightness increases during beacon
- [ ] Auto-stops after 5 minutes
- [ ] Low battery warning shows at 20%
- [ ] Auto-stops at 10% battery
- [ ] High contrast mode works
- [ ] Screen reader announces state changes
- [ ] Works in all supported languages

## Safety Features

### Battery Conservation
- Auto-stop after 5 minutes (default)
- Warning at 20% battery
- Auto-stop at 10% battery
- Reduced animation complexity when battery low

### Screen Protection
- Prevents screen burn-in with color alternation
- Flash rate stays below 3Hz (seizure safety)
- Brightness returns to normal after stop

### User Control
- Large, easy-to-reach stop button
- Confirmation feedback on stop
- Clear duration display
- Battery status always visible

## Known Issues / Future Improvements

- Add customizable flash colors
- Add flash pattern options (fast/slow/pulse)
- Add countdown mode (beacon for X minutes)
- Add emergency mode (brighter, faster flash)
- Integration with smartwatch for remote stop
- Add beacon activity log
- Add nearby bus real-time arrival info
