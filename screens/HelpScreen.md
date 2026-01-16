# Help Screen

User guidance, tutorials, FAQ, and support information.

## Components

### Navigation Bar
- **Back Button**: "← Back" - Returns to Home screen
- **Title**: "Help"

### Help Sections

#### 1. Quick Start Guide
- **Section Title**: "🎯 Quick Start Guide"
- **Content**: Step-by-step instructions in a card
  1. Grant location permission
  2. Press "Activate Beacon" button
  3. Show screen to approaching bus driver
  4. Press "Stop Beacon" when driver sees you

#### 2. Video Tutorial (Future Feature)
- **Section Title**: "📹 Video Tutorial"
- **Content**: Embedded video or link to tutorial
- **Fallback**: Animated GIF showing app usage

#### 3. Frequently Asked Questions
- **Section Title**: "❓ Frequently Asked Questions"
- **Content**: Expandable/collapsible Q&A items
  
  **Questions:**
  1. How does the beacon work?
  2. Is my location data private?
  3. What languages are supported?
  4. How do I enable accessibility features?
  5. Why does my beacon stop automatically?
  6. Does the app work offline?
  7. How much battery does the beacon use?
  8. Can I customize the beacon colors?

#### 4. Feature Guide
- **Section Title**: "✨ Features"
- **Content**: List of key features with descriptions
  - Visual Beacon
  - Audio Alert
  - Multilingual Support
  - Accessibility Features
  - Location Detection

#### 5. Contact Support
- **Section Title**: "📧 Contact Support"
- **Content**: Support options
  - Email: support@busbeacon.app
  - GitHub Issues: Link to repository
  - Community Forum: Link to discussions
- **Action Button**: "Send Feedback"

#### 6. Privacy & Legal
- **Section Title**: "🔒 Privacy & Legal"
- **Content**: Links to important documents
  - Privacy Policy
  - Terms of Service
  - Open Source License
  - Attributions

#### 7. About
- **Section Title**: "ℹ️ About BusBeacon"
- **Content**: App information
  - Version: 1.0.0
  - Build: 2026.01.16
  - Developer: BusBeacon Team
  - License: MIT

## Behaviors

### On Screen Open
1. Load FAQ items
2. Collapse all FAQ answers (only questions visible)
3. Check for app updates (optional)
4. Load current app version

### On FAQ Item Click
```
When FAQItem clicks:
  - If item is collapsed:
      Expand to show answer
      Collapse any other expanded items
  - If item is expanded:
      Collapse to hide answer
  - Smooth animation for expand/collapse
```

### On Send Feedback Button Click
```
When SendFeedbackButton clicks:
  - Open email composer
  - Pre-fill recipient: support@busbeacon.app
  - Pre-fill subject: "BusBeacon Feedback"
  - Pre-fill body with:
      App Version: [version]
      Device: [device model]
      OS: [OS version]
      Language: [current language]
      ---
      [User feedback here]
```

### On Privacy Policy Button Click
```
When PrivacyPolicyButton clicks:
  - Open web browser component
  - Load privacy policy URL
  - Or navigate to PrivacyPolicyScreen (if local)
```

### On Terms of Service Button Click
```
When TermsButton clicks:
  - Open web browser component
  - Load terms of service URL
  - Or navigate to TermsScreen (if local)
```

### On GitHub Link Click
```
When GitHubButton clicks:
  - Open device browser
  - Navigate to: https://github.com/izzyinnis-star/Bestbusbeacon
```

### On Back Button Click
1. Navigate back to Home screen

## Variables

- `faqItems` (list): Array of FAQ objects
  ```json
  [
    {
      "question": "How does the beacon work?",
      "answer": "The beacon uses your phone's screen to flash bright colors...",
      "expanded": false
    }
  ]
  ```
- `appVersion` (string): Current version number
- `supportEmail` (string): support@busbeacon.app

## Styling

### Colors
- Background: White (#FFFFFF)
- Navigation bar: Primary blue (#2196F3)
- Section title: Primary blue (#2196F3)
- Card background: Light gray (#F5F5F5)
- FAQ question: Dark gray (#212121)
- FAQ answer: Medium gray (#757575)
- Links: Primary blue (#2196F3)

### Fonts
- Section title: 20px, bold
- Section emoji: 24px
- FAQ question: 16px, bold
- FAQ answer: 15px, regular
- Body text: 15px, regular
- Button text: 16px, bold

### Spacing
- Screen padding: 16px
- Section spacing: 24px
- Card padding: 16px
- FAQ item spacing: 12px

## Accessibility

- All FAQ items are keyboard navigable
- Screen reader announces expanded/collapsed state
- Links have clear labels ("Opens in browser")
- All text is selectable for assistive tools
- High contrast mode supported
- All touch targets minimum 44x44pt

## Translations

Text elements use `getText(key)` function:
- `getText('help')` → "Help"
- `getText('quick_start')` → "Quick Start Guide"
- `getText('faq')` → "Frequently Asked Questions"
- `getText('contact_support')` → "Contact Support"
- `getText('privacy_policy')` → "Privacy Policy"
- `getText('about')` → "About BusBeacon"

### FAQ Translations

Each FAQ item has translations in all supported languages:

```json
{
  "faq1_q": {
    "en": "How does the beacon work?",
    "es": "¿Cómo funciona la baliza?",
    "fr": "Comment fonctionne la balise?",
    "zh": "信标如何工作？",
    "ar": "كيف تعمل المنارة؟"
  },
  "faq1_a": {
    "en": "The beacon uses your phone's screen to flash bright colors that catch the bus driver's attention. You can also enable audio alerts and vibration.",
    "es": "La baliza utiliza la pantalla de su teléfono para mostrar colores brillantes que llaman la atención del conductor del autobús. También puede habilitar alertas de audio y vibración.",
    "fr": "La balise utilise l'écran de votre téléphone pour afficher des couleurs vives qui attirent l'attention du chauffeur de bus. Vous pouvez également activer les alertes audio et les vibrations.",
    "zh": "信标使用手机屏幕闪烁明亮的颜色以吸引公交司机的注意。您还可以启用音频警报和振动。",
    "ar": "تستخدم المنارة شاشة هاتفك لعرض ألوان زاهية تلفت انتباه سائق الحافلة. يمكنك أيضًا تمكين التنبيهات الصوتية والاهتزاز."
  }
}
```

## Implementation Notes

### Thunkable Components Used
- Screen (HelpScreen)
- Scroll View (for long content)
- Column (section containers)
- Card (for quick start guide)
- Label (text content)
- Button (actions, links)
- List Viewer (for FAQ items)
- Web Viewer (for external links)

### Functions
- `loadFAQItems()`
- `toggleFAQItem(index)`
- `openEmail(address, subject, body)`
- `openURL(url)`
- `getAppVersion()`

### FAQ Content

**Q1: How does the beacon work?**
A: The beacon uses your phone's screen to flash bright colors (yellow and white) that catch the bus driver's attention. You can also enable optional audio alerts and vibration feedback. The flashing pattern is designed to be visible from a distance while being safe (no seizure risk).

**Q2: Is my location data private?**
A: Yes! BusBeacon is privacy-first. Your location is only used locally on your device to show nearby bus stops. We never send your location to any server or third party. All data stays on your phone.

**Q3: What languages are supported?**
A: BusBeacon supports 5 languages:
- English
- Spanish (Español)
- French (Français)
- Mandarin Chinese (中文)
- Arabic (العربية)

You can change the language in Settings at any time.

**Q4: How do I enable accessibility features?**
A: Go to Settings > Accessibility. There you can enable:
- High Contrast Mode (for better visibility)
- Screen Reader Support (VoiceOver/TalkBack)
- Adjustable Text Size (75% to 150%)

**Q5: Why does my beacon stop automatically?**
A: For battery conservation, the beacon automatically stops after 5 minutes. You can always activate it again if needed. The beacon will also stop if your battery drops below 10%.

**Q6: Does the app work offline?**
A: Yes! The core beacon features (visual beacon, audio alert, vibration) work completely offline. Location detection and nearby stop information require an internet connection.

**Q7: How much battery does the beacon use?**
A: The beacon is designed to be efficient, but the bright flashing screen does use battery. On average, 5 minutes of beacon use consumes about 2-3% battery. We recommend keeping your phone charged if you use public transit frequently.

**Q8: Can I customize the beacon colors?**
A: In version 1.0, the beacon uses optimized yellow and white colors for maximum visibility. Custom colors are planned for a future update! You can enable High Contrast Mode for black and white.

## Visual Reference

```
┌─────────────────────────────────┐
│  [← Back]         Help          │  ← Navigation (60px)
├─────────────────────────────────┤
│ (Scrollable Content)            │
│                                 │
│  🎯 Quick Start Guide           │  ← Section 1
│  ┌─────────────────────────┐   │
│  │ 1. Grant location perm   │   │
│  │ 2. Press Activate Beacon │   │
│  │ 3. Show screen to driver │   │
│  │ 4. Press Stop when done  │   │
│  └─────────────────────────┘   │
│                                 │
│  ❓ Frequently Asked Questions  │  ← Section 2
│  ┌─────────────────────────┐   │
│  │ ▶ How does beacon work?  │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ ▶ Is my data private?    │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ ▼ What languages?        │   │
│  │   BusBeacon supports 5...│   │
│  └─────────────────────────┘   │
│                                 │
│  📧 Contact Support             │  ← Section 3
│  support@busbeacon.app          │
│  ┌─────────────────────────┐   │
│  │    Send Feedback        │   │
│  └─────────────────────────┘   │
│                                 │
│  🔒 Privacy & Legal             │  ← Section 4
│  • Privacy Policy               │
│  • Terms of Service             │
│  • Open Source License          │
│                                 │
│  ℹ️ About BusBeacon             │  ← Section 5
│  Version: 1.0.0                 │
│  License: MIT                   │
│                                 │
└─────────────────────────────────┘
```

## Testing Checklist

- [ ] Screen loads correctly
- [ ] FAQ items expand/collapse on tap
- [ ] Only one FAQ item expanded at a time
- [ ] Send Feedback opens email with pre-filled info
- [ ] Privacy Policy link opens correctly
- [ ] Terms of Service link opens correctly
- [ ] GitHub link opens in browser
- [ ] App version displays correctly
- [ ] All text displays in selected language
- [ ] High contrast mode applies to help content
- [ ] Screen reader announces all content
- [ ] FAQ answers are readable
- [ ] All links are tappable
- [ ] Back button returns to Home screen
- [ ] Content is scrollable on small screens

## Future Improvements

- Add video tutorials
- Add interactive app tour for first-time users
- Add search functionality for FAQ
- Add "Was this helpful?" feedback on FAQ items
- Add more FAQ items based on user questions
- Add in-app chat support
- Add community forum integration
- Add tutorial mode (guided walkthrough)
- Add tips and tricks section
- Add changelog/what's new section
- Add user feedback/rating prompt
- Add social media links
