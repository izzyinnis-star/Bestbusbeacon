# BusBeacon - 15-Step Build Plan

This document provides the complete step-by-step implementation guide for building the BusBeacon app in Thunkable X.

## Overview

Follow these 15 steps organized into 4 phases to build the complete BusBeacon app:

### 🟩 Phase 1: Core Screens & Navigation (Steps 1-5)
- Main Screen with three buttons (Pick Me Up, Not This Bus, Settings)
- Pick Me Up Screen with green flashing and PICK → ME → UP animation
- Tap-to-stop functionality
- Landscape-aware font scaling

### 🟨 Phase 2: Not This Bus Screen (Steps 6-8)
- Red flashing screen with "NOT THIS BUS" message
- Same flashing logic and tap-to-stop

### 🟦 Phase 3: Settings & Personalization (Steps 9-11)
- Settings screen for bus number and strong signal mode
- Persistent storage with LocalDB
- Apply settings to flashing screens

### 🟪 Phase 4: Polish & Accessibility (Steps 12-15)
- Optional vibration feedback
- Optional sound feedback
- Optional brightness boost
- Final testing and polish

## Complete Implementation Guide

For the complete detailed 15-step implementation guide with all code blocks, component specifications, and troubleshooting tips, please refer to the original plan provided in the GitHub issue comment.

Key features implemented:
- **Visual Signals**: Green "Pick Me Up" and Red "Not This Bus" full-screen flashing
- **Text Animation**: PICK → ME → UP cycling or custom bus number display
- **Strong Signal Mode**: Enhanced visibility with larger fonts (48px → 56px portrait, 64px → 72px landscape)
- **Personalization**: Custom bus number input
- **Tap-to-Stop**: Tap anywhere to stop flashing
- **Optional Features**: Vibration, sound, brightness boost

## Quick Reference

### Global Variables
- `busNumber` (string) - Custom bus number
- `strongSignalMode` (boolean) - Enhanced visibility toggle
- `isFlashing` (boolean) - Current flashing state
- `flashStep` (number) - Animation step (0=PICK, 1=ME, 2=UP)
- `isGreen` (boolean) - Color alternating state

### Timer Settings
- Flash interval: 500ms
- Alternates background/text colors every 500ms

### Font Sizes
- Portrait normal: 48px
- Portrait strong: 56px
- Landscape normal: 64px
- Landscape strong: 72px

### Colors
- Green: #4CAF50 (Pick Me Up)
- Red: #F44336 (Not This Bus)
- White: #FFFFFF (Alternating color)
- Gray: #9E9E9E (Settings button)
- Blue: #2196F3 (Save button)

## Testing Checklist

### Core Functionality
- [ ] Main screen displays three buttons
- [ ] Pick Me Up navigates to green flashing screen
- [ ] Not This Bus navigates to red flashing screen
- [ ] Settings button opens settings screen

### Flashing Behavior
- [ ] Green screen flashes green ↔ white
- [ ] Text cycles PICK → ME → UP (when no bus number)
- [ ] Bus number displays when set
- [ ] Red screen flashes red ↔ white with "NOT THIS BUS"
- [ ] Tap anywhere stops flashing immediately

### Settings
- [ ] Settings load correctly
- [ ] Strong Signal toggle works
- [ ] Bus number input saves
- [ ] Settings persist after app restart
- [ ] Strong signal mode increases font size

### Orientation
- [ ] Landscape uses larger fonts
- [ ] Portrait uses smaller fonts
- [ ] Font updates on orientation change

## Implementation Time

- Phase 1: 60-90 minutes
- Phase 2: 30-45 minutes
- Phase 3: 45-60 minutes
- Phase 4: 30-60 minutes
- **Total: 2.5-4 hours**

## Resources

- Thunkable Documentation: https://docs.thunkable.com
- Thunkable Community: https://community.thunkable.com
- GitHub Repository: https://github.com/izzyinnis-star/Bestbusbeacon
