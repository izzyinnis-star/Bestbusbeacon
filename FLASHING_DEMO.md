# BusBeacon Flashing System - Visual Guide

## How It Works

The PickMeUpScreen implements a complete flashing system that cycles through visual states every 500ms.

## Visual States

### State 1: Green Background (500ms)
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ███████████████████████████ ┃
┃ ███████████████████████████ ┃
┃ █████████ GREEN ███████████ ┃
┃ ███████ BACKGROUND █████████ ┃
┃ ███████████████████████████ ┃
┃ ███████████████████████████ ┃
┃        PICK                  ┃  ← White text
┃                              ┃
┃ ███████████████████████████ ┃
┃ ███████████████████████████ ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### State 2: White Background (500ms later)
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                              ┃
┃                              ┃
┃        WHITE                 ┃
┃      BACKGROUND              ┃
┃                              ┃
┃                              ┃
┃        ME                    ┃  ← Green text
┃                              ┃
┃                              ┃
┃                              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### State 3: Green Background (500ms later)
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ███████████████████████████ ┃
┃ ███████████████████████████ ┃
┃ █████████ GREEN ███████████ ┃
┃ ███████ BACKGROUND █████████ ┃
┃ ███████████████████████████ ┃
┃ ███████████████████████████ ┃
┃        UP                    ┃  ← White text
┃                              ┃
┃ ███████████████████████████ ┃
┃ ███████████████████████████ ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

## Animation Timeline

```
Time    | Background | Text Color | Text    | flashStep | isGreen
--------|------------|------------|---------|-----------|--------
0ms     | Green      | White      | PICK    | 1         | true
500ms   | White      | Green      | ME      | 2         | false
1000ms  | Green      | White      | UP      | 3         | true
1500ms  | White      | Green      | PICK    | 1         | false
2000ms  | Green      | White      | ME      | 2         | true
2500ms  | White      | Green      | UP      | 3         | false
...     | (continues until user taps screen)
```

## Font Sizes by Mode

### Normal Mode (strongSignalMode = false)

**Portrait:**
```
┏━━━━━━━━━━━━━━┓
┃              ┃
┃              ┃
┃    PICK      ┃  ← 48pt
┃              ┃
┃              ┃
┗━━━━━━━━━━━━━━┛
```

**Landscape:**
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                            ┃
┃         PICK               ┃  ← 64pt (larger)
┃                            ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### Strong Signal Mode (strongSignalMode = true)

**Portrait:**
```
┏━━━━━━━━━━━━━━┓
┃              ┃
┃              ┃
┃   PICK       ┃  ← 56pt (bold 900)
┃              ┃
┃              ┃
┗━━━━━━━━━━━━━━┛
```

**Landscape:**
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                            ┃
┃        PICK                ┃  ← 72pt (bold 900)
┃                            ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

## Bus Number Override

When busNumber is set (e.g., "42"):

### State 1: Green Background
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ███████████████████████████ ┃
┃ ███████████████████████████ ┃
┃ ███████████████████████████ ┃
┃ ███████████████████████████ ┃
┃ ███████████████████████████ ┃
┃          42                  ┃  ← White text
┃ ███████████████████████████ ┃
┃ ███████████████████████████ ┃
┃ ███████████████████████████ ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### State 2: White Background
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                              ┃
┃                              ┃
┃                              ┃
┃                              ┃
┃                              ┃
┃          42                  ┃  ← Green text
┃                              ┃
┃                              ┃
┃                              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

No word cycling - just shows bus number with color flashing.

## User Interaction

### Tap Anywhere to Stop
```
       User taps anywhere on screen
                  ↓
         isFlashing → false
                  ↓
           Timer stops
                  ↓
    Navigate back to Home screen
```

The entire screen is a tap target (transparent overlay on top).

## Code Flow

```javascript
// On mount
useEffect(() => {
  setIsFlashing(true);  // Start flashing
}, []);

// Timer runs while isFlashing = true
useEffect(() => {
  let interval;
  
  if (isFlashing) {
    interval = setInterval(() => {
      // Update text (PICK/ME/UP or busNumber)
      handleFlashStep();
      
      // Toggle colors
      setIsGreen((prev) => !prev);
    }, 500);
  }
  
  return () => clearInterval(interval);
}, [isFlashing, flashStep, busNumber]);

// On tap
const handleTapStopper = () => {
  setIsFlashing(false);      // Stop timer
  navigation.navigate('Home'); // Go back
};
```

## Responsive Behavior

### Orientation Change

When device rotates:
```
Portrait (9:16)          →     Landscape (16:9)
Font: 48/56                    Font: 64/72
```

The Dimensions API detects orientation change and updates font size automatically.

## Color Values

| State           | Background | Text Color |
|-----------------|------------|------------|
| isGreen = true  | #00FF00    | #FFFFFF    |
| isGreen = false | #FFFFFF    | #00FF00    |

These create maximum contrast and high visibility for riders signaling the bus.

## Performance

- **Update Frequency**: 500ms (2 times per second)
- **Memory**: Minimal (cleanup on unmount)
- **Battery**: Low impact (paused when not active)
- **Animation**: Native React Native (60fps capable)

## Accessibility

- ✅ High contrast (green and white)
- ✅ Large text (48-72pt)
- ✅ Simple tap interaction
- ✅ Full-screen touch target
- ✅ No complex gestures required
- ✅ Strong Signal Mode for extra visibility

---

This implementation follows the complete BusBeacon specification with all requested features working as designed.
