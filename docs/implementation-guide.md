# BusBeacon Implementation Guide

Step-by-step guide for building the BusBeacon app in Thunkable X.

## Prerequisites

- Thunkable account (free): https://x.thunkable.com
- Basic understanding of visual block programming
- Mobile device for testing (iOS or Android)
- Thunkable Live app installed on your device

## Part 1: Project Setup (15 minutes)

### Step 1.1: Create New Project

1. Go to https://x.thunkable.com
2. Click "Create New App"
3. Choose "Blank App"
4. Name: "BusBeacon"
5. Click "Create"

### Step 1.2: Configure App Settings

1. Click the gear icon (⚙️) in the top toolbar
2. Set **App Name**: BusBeacon
3. Set **Description**: Signal bus drivers with accessibility support
4. Upload **App Icon** (1024x1024 PNG)
5. Upload **Splash Screen** (2048x2048 PNG)
6. Set **Primary Color**: #2196F3 (blue)
7. Click "Save"

### Step 1.3: Set Up Screens

1. In the Navigator panel, click "Add Screen" (+)
2. Create these screens:
   - HomeScreen (already exists)
   - BeaconActiveScreen
   - SettingsScreen
   - HelpScreen
3. Set HomeScreen as the initial screen

## Part 2: HomeScreen Implementation (45 minutes)

### Step 2.1: Add Navigation Bar

1. Select HomeScreen
2. Drag a **Row** component onto the screen
3. Rename to "NavigationBar"
4. Set properties:
   - Height: 60
   - Background Color: #2196F3 (blue)
   - Justify Content: space-between
   - Align Items: center
   - Padding: 16

### Step 2.2: Add Navigation Buttons

Inside NavigationBar Row:

1. Add **Button** (left side)
   - Text: "☰"
   - Name: MenuButton
   - Width: 44, Height: 44
   - Background: transparent
   - Text Color: white

2. Add **Label** (center)
   - Text: "BusBeacon"
   - Name: TitleLabel
   - Font Size: 24
   - Font Weight: bold
   - Color: white

3. Add **Button** (right side)
   - Text: "⚙️"
   - Name: SettingsButton
   - Width: 44, Height: 44
   - Background: transparent
   - Text Color: white

### Step 2.3: Add Main Content

Below NavigationBar:

1. Add **Column** component
   - Name: MainContent
   - Padding: 16
   - Align Items: center

2. Inside MainContent, add **Column** for Location
   - Name: LocationSection
   - Add **Label**: "📍 Current Location:"
   - Add **Label**: 
     - Name: LocationAddress
     - Text: "Loading..."
     - Font Size: 16

3. Add **Column** for Nearby Stops
   - Name: NearbyStopsSection
   - Add **Label**: "Nearby Bus Stops:"
   - Add **List Viewer**:
     - Name: NearbyStopsList
     - Height: 150

4. Add **Button** for Beacon Activation
   - Name: ActivateBeaconButton
   - Text: "ACTIVATE BEACON\n🔆"
   - Width: 280, Height: 280
   - Background: Linear gradient (yellow to orange)
   - Font Size: 24
   - Font Weight: bold
   - Border Radius: 20
   - Margin Top: 32

5. Add **Button** for Help
   - Name: HelpButton
   - Text: "Help & Tutorial"
   - Width: Fill Container
   - Height: 50
   - Style: Outlined
   - Margin Top: 16

### Step 2.4: Add Location Sensor

1. From Components panel, add **Location Sensor**
2. Name: LocationSensor1

### Step 2.5: Add Local DB for Storage

1. From Components panel, add **Local DB**
2. Name: LocalDB1

### Step 2.6: Create Variables

Click "Variables" in top toolbar:

1. **App Variables**:
   - `currentLanguage` (text) = "en"
   - `userPreferences` (object) = {}
   - `nearbyStops` (list) = []

2. **Screen Variables** (HomeScreen):
   - `locationAddress` (text) = ""

### Step 2.7: Add Logic Blocks

Click "Blocks" for HomeScreen:

**When Screen Opens:**
```
When HomeScreen Opens:
  Call LoadPreferences
  Call CheckLocationPermission
  Call LoadNearbyStops
```

**Function: LoadPreferences**
```
Function LoadPreferences:
  Set userPreferences to LocalDB1.GetValue("preferences")
  If userPreferences is empty:
    Set userPreferences to default object
  Set currentLanguage to userPreferences.language
```

**Function: CheckLocationPermission**
```
Function CheckLocationPermission:
  If LocationSensor1.HasPermission:
    Call GetCurrentLocation
  Else:
    Show Alert: "Location permission needed"
```

**Function: GetCurrentLocation**
```
Function GetCurrentLocation:
  Set LocationAddress.Text to:
    LocationSensor1.Latitude + ", " + LocationSensor1.Longitude
```

**Function: LoadNearbyStops**
```
Function LoadNearbyStops:
  Set nearbyStops to:
    [
      {name: "Main St Station", distance: "0.2 mi"},
      {name: "Oak Ave Stop", distance: "0.4 mi"},
      {name: "Park Rd Terminal", distance: "0.6 mi"}
    ]
  Set NearbyStopsList.Items to nearbyStops
```

**When ActivateBeaconButton Clicks:**
```
When ActivateBeaconButton Click:
  Navigate to BeaconActiveScreen
```

**When SettingsButton Clicks:**
```
When SettingsButton Click:
  Navigate to SettingsScreen
```

**When HelpButton Clicks:**
```
When HelpButton Click:
  Navigate to HelpScreen
```

## Part 3: BeaconActiveScreen Implementation (60 minutes)

### Step 3.1: Add Status Bar

1. Select BeaconActiveScreen
2. Add **Row** at top
   - Name: StatusBar
   - Background: rgba(0,0,0,0.3)
   - Padding: 16
3. Add **Label** inside:
   - Text: "Beacon Active 🔆"
   - Color: white
   - Font Size: 20

### Step 3.2: Add Main Beacon Area

1. Add **Column** below StatusBar
   - Name: BeaconArea
   - Height: Fill Container
   - Background: #FFEB3B (yellow)
   - Align Items: center
   - Justify Content: center

2. Add **Label** for Timer
   - Name: DurationTimer
   - Text: "Duration: 0:00"
   - Font Size: 32
   - Font Weight: bold
   - Color: black

### Step 3.3: Add Stop Button

1. Add **Button** at bottom of BeaconArea
   - Name: StopBeaconButton
   - Text: "STOP BEACON"
   - Width: 280, Height: 80
   - Background: #F44336 (red)
   - Text Color: white
   - Font Size: 22
   - Margin: 32

### Step 3.4: Add Status Footer

1. Add **Row** below Stop Button
   - Name: StatusFooter
2. Add **Label**: "Battery: 100%"
   - Name: BatteryLabel
3. Add **Label**: "Volume: 🔊"
   - Name: VolumeLabel

### Step 3.5: Add Timers

1. Add **Timer** component
   - Name: AnimationTimer
   - Interval: 500 (milliseconds)
   - Enabled: false

2. Add **Timer** component
   - Name: DurationTimer_Component
   - Interval: 1000
   - Enabled: false

3. Add **Timer** component
   - Name: BatteryMonitor
   - Interval: 30000
   - Enabled: false

### Step 3.6: Add Sound Component

1. Add **Sound** component
   - Name: BeaconSound
   - Source: (upload beacon_alert.mp3 or use built-in sound)
   - Loop: true

### Step 3.7: Create Variables

**Screen Variables** (BeaconActiveScreen):
- `isYellow` (boolean) = true
- `secondsElapsed` (number) = 0
- `minutesElapsed` (number) = 0

### Step 3.8: Add Logic Blocks

**When Screen Opens:**
```
When BeaconActiveScreen Opens:
  Set secondsElapsed to 0
  Set minutesElapsed to 0
  Set isYellow to true
  Set AnimationTimer.Enabled to true
  Set DurationTimer_Component.Enabled to true
  Set BatteryMonitor.Enabled to true
  If userPreferences.audioAlert is true:
    Play BeaconSound
  Call Device.Vibrate(100)
```

**Animation Logic:**
```
When AnimationTimer Fires:
  If isYellow:
    Set BeaconArea.BackgroundColor to white (#FFFFFF)
    Set isYellow to false
  Else:
    Set BeaconArea.BackgroundColor to yellow (#FFEB3B)
    Set isYellow to true
```

**Duration Counter:**
```
When DurationTimer_Component Fires:
  Set secondsElapsed to secondsElapsed + 1
  If secondsElapsed >= 60:
    Set minutesElapsed to minutesElapsed + 1
    Set secondsElapsed to 0
  
  Set DurationTimer.Text to:
    "Duration: " + minutesElapsed + ":" + 
    (if secondsElapsed < 10 then "0" else "") + secondsElapsed
  
  If minutesElapsed >= 5:
    Call StopBeacon()
    Show Alert: "Beacon auto-stopped after 5 minutes"
```

**Stop Button:**
```
When StopBeaconButton Click:
  Call StopBeacon()
```

**Function: StopBeacon**
```
Function StopBeacon:
  Set AnimationTimer.Enabled to false
  Set DurationTimer_Component.Enabled to false
  Set BatteryMonitor.Enabled to false
  Stop BeaconSound
  Call Device.Vibrate(100)
  Navigate back to HomeScreen
```

## Part 4: SettingsScreen Implementation (45 minutes)

### Step 4.1: Add Navigation

1. Add **Row** at top
   - Name: NavigationBar
   - Background: #2196F3
   - Height: 60
2. Add **Button**: "← Back"
   - Name: BackButton
3. Add **Label**: "Settings"
   - Font Size: 24, Color: white

### Step 4.2: Add Settings Sections

1. Add **Scroll View**
   - Name: SettingsScroll
2. Inside, add **Column**
   - Name: SettingsContent

**Language Section:**
1. Add **Label**: "Language"
2. Add **Dropdown**:
   - Name: LanguageDropdown
   - Options: ["English", "Español", "Français", "中文", "العربية"]

**Beacon Preferences:**
1. Add **Label**: "Beacon Preferences"
2. Add **Switch**: "Visual Beacon"
   - Name: VisualSwitch
3. Add **Switch**: "Audio Alert"
   - Name: AudioSwitch
4. Add **Switch**: "Vibration"
   - Name: VibrationSwitch

**Accessibility:**
1. Add **Label**: "Accessibility"
2. Add **Switch**: "High Contrast"
   - Name: HighContrastSwitch
3. Add **Slider**: "Text Size"
   - Name: TextSizeSlider
   - Min: 75, Max: 150, Value: 100

### Step 4.3: Add Logic

**When Screen Opens:**
```
When SettingsScreen Opens:
  Load preferences from LocalDB
  Set switch values from preferences
```

**When Switch Changes:**
```
When any switch changes:
  Save to LocalDB
  Update userPreferences object
```

## Part 5: HelpScreen Implementation (30 minutes)

### Step 5.1: Add Navigation

Same as SettingsScreen (Back button + Title)

### Step 5.2: Add Content

1. Add **Scroll View**
2. Add **Column** inside
3. Add sections with **Card** components:
   - Quick Start Guide (text)
   - FAQ (expandable items)
   - Contact (button)
   - About (text)

### Step 5.3: Add FAQ Logic

Create expandable FAQ items using toggle state

## Part 6: Translations (30 minutes)

### Step 6.1: Create Translations Object

Create app variable `translations`:
```json
{
  "en": {
    "activate_beacon": "ACTIVATE BEACON",
    "stop_beacon": "STOP BEACON",
    ...
  },
  "es": {
    "activate_beacon": "ACTIVAR BALIZA",
    ...
  }
}
```

### Step 6.2: Create getText Function

```
Function getText(key):
  Return translations[currentLanguage][key]
```

### Step 6.3: Update All Text

Replace all hardcoded text with `getText(key)` calls

## Part 7: Testing (30 minutes)

### Step 7.1: Test on Thunkable Live

1. Install Thunkable Live app on your phone
2. Scan QR code from Thunkable editor
3. Test all features:
   - Beacon activation
   - Settings changes
   - Language switching
   - Navigation

### Step 7.2: Test Accessibility

1. Enable VoiceOver (iOS) or TalkBack (Android)
2. Test screen reader navigation
3. Test with high contrast mode
4. Test with different text sizes

### Step 7.3: Fix Issues

Debug and fix any issues found during testing

## Part 8: Publishing (60 minutes)

### Step 8.1: Prepare for Release

1. Test thoroughly on multiple devices
2. Finalize app icon and splash screen
3. Write app store descriptions
4. Take screenshots for app stores

### Step 8.2: Build Android (APK/AAB)

1. Click "Publish" in top toolbar
2. Select "Android"
3. Choose APK or AAB
4. Download build
5. Test APK on device
6. Upload AAB to Google Play Console

### Step 8.3: Build iOS (IPA)

1. Click "Publish"
2. Select "iOS"
3. Requires Apple Developer account ($99/year)
4. Submit through App Store Connect

### Step 8.4: Submit to Stores

**Google Play:**
1. Create app listing
2. Upload AAB
3. Fill in store details
4. Set pricing (free)
5. Submit for review

**Apple App Store:**
1. Create app in App Store Connect
2. Upload build via Thunkable
3. Fill in metadata
4. Submit for review

## Part 9: Post-Launch (Ongoing)

### Monitor

- App performance
- User feedback
- Crash reports
- Store reviews

### Update

- Fix bugs
- Add features
- Improve translations
- Update for new OS versions

## Time Estimate

- Setup: 15 min
- HomeScreen: 45 min
- BeaconActiveScreen: 60 min
- SettingsScreen: 45 min
- HelpScreen: 30 min
- Translations: 30 min
- Testing: 30 min
- Publishing: 60 min

**Total: ~5 hours** (for experienced developer)

First-time builders: Allow 8-10 hours

## Resources

- Thunkable Docs: https://docs.thunkable.com
- Thunkable Community: https://community.thunkable.com
- Video Tutorials: https://www.youtube.com/thunkable
- GitHub Repo: https://github.com/izzyinnis-star/Bestbusbeacon

## Troubleshooting

### Common Issues

**Location not working:**
- Check permission is granted
- Test on physical device (not always available in Live app preview)

**Sound not playing:**
- Check file format (MP3)
- Check device volume
- Test on physical device

**Blocks not working:**
- Check variable names match exactly
- Check component names match
- Use debugger to trace values

**App crashes:**
- Check for infinite loops
- Check for null values
- Test on multiple devices

## Next Steps

After completing v1.0:
1. Gather user feedback
2. Add bus API integration
3. Add more languages
4. Implement custom beacon colors
5. Add analytics (privacy-respecting)
6. Create smartwatch companion app

---

**Need Help?**

- Check Thunkable documentation
- Ask in Thunkable Community forums
- Open issue on GitHub
- Contact: support@busbeacon.app
