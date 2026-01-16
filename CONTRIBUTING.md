# Contributing to BusBeacon

Thank you for your interest in contributing to BusBeacon! This document provides guidelines for contributing to the project.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:

1. Check if the issue already exists in the [GitHub Issues](https://github.com/izzyinnis-star/Bestbusbeacon/issues)
2. If not, create a new issue with:
   - Clear, descriptive title
   - Detailed description of the issue/feature
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable
   - Device and OS version

### Suggesting Enhancements

We welcome suggestions for new features! Please:

1. Open an issue with the "enhancement" label
2. Describe the feature and its benefits
3. Explain how it would work
4. Consider accessibility implications
5. Consider multilingual support needs

### Code Contributions

#### Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature/fix
4. Make your changes
5. Test thoroughly
6. Submit a pull request

#### Development Guidelines

**For Thunkable Development:**
1. Follow the [Implementation Guide](docs/implementation-guide.md)
2. Test on both iOS and Android
3. Test with accessibility features enabled
4. Test in all supported languages
5. Maintain consistent design with existing screens

**For Documentation:**
1. Write clear, concise documentation
2. Include code examples where appropriate
3. Update relevant docs when making changes
4. Proofread for grammar and clarity

#### Code Style

**Naming Conventions:**
- Components: PascalCase (e.g., `ActivateBeaconButton`)
- Variables: camelCase (e.g., `currentLanguage`)
- Functions: camelCase (e.g., `getText()`)
- Constants: UPPER_CASE (e.g., `MAX_DURATION`)

**Block Organization:**
- Group related blocks together
- Comment complex logic
- Keep functions focused and reusable
- Avoid deeply nested blocks

**Accessibility:**
- All interactive elements must have labels
- Minimum touch target: 44x44 points
- Test with screen readers
- Maintain high contrast ratios

**Translations:**
- Add new strings to all language files
- Use `getText(key)` for all UI text
- Test in all supported languages
- Provide context for translators

### Pull Request Process

1. **Before Submitting:**
   - Test your changes thoroughly
   - Update documentation
   - Add/update translations if needed
   - Ensure code follows style guidelines
   - Run accessibility tests

2. **PR Description:**
   - Clearly describe what your PR does
   - Reference related issues
   - List any breaking changes
   - Include screenshots for UI changes
   - Note any special testing considerations

3. **Review Process:**
   - Maintainers will review your PR
   - Address any feedback or requested changes
   - Be patient and responsive
   - Once approved, your PR will be merged

### Adding Translations

To add a new language:

1. Open `config/translations.json` (or relevant file)
2. Add your language code (e.g., "de" for German)
3. Translate all keys
4. Test in the app
5. Update README with new language
6. Submit PR

Translation guidelines:
- Maintain tone and context
- Keep length similar to original
- Consider cultural appropriateness
- Test on device (text may wrap differently)

### Accessibility Contributions

Accessibility is a priority for BusBeacon. Contributions that improve accessibility are highly valued:

- Screen reader compatibility improvements
- High contrast mode enhancements
- Keyboard navigation support
- Alternative input methods
- Improved error messages
- Better focus indicators

### Testing

**Manual Testing Checklist:**
- [ ] Test on iOS device
- [ ] Test on Android device
- [ ] Test with VoiceOver/TalkBack enabled
- [ ] Test in high contrast mode
- [ ] Test with large text size
- [ ] Test in all supported languages
- [ ] Test with poor network connection
- [ ] Test with location services disabled
- [ ] Test on tablet and phone sizes

**Device Testing:**
Ideally test on:
- iPhone (various models)
- Android phone (various manufacturers)
- iPad
- Android tablet

### Documentation Contributions

Documentation is just as important as code:

- Fix typos and grammar
- Clarify confusing sections
- Add missing information
- Update outdated content
- Improve examples
- Add diagrams or screenshots

### Community Guidelines

**Be Respectful:**
- Treat all contributors with respect
- Welcome newcomers
- Be patient with questions
- Provide constructive feedback
- Celebrate contributions

**Be Collaborative:**
- Share knowledge
- Help others
- Give credit where due
- Work together on solutions

**Be Professional:**
- Keep discussions on-topic
- Avoid personal attacks
- Focus on the code/ideas, not the person
- Follow the code of conduct

## Code of Conduct

### Our Pledge

We pledge to make participation in BusBeacon a harassment-free experience for everyone, regardless of:
- Age
- Body size
- Disability
- Ethnicity
- Gender identity and expression
- Level of experience
- Nationality
- Personal appearance
- Race
- Religion
- Sexual identity and orientation

### Our Standards

**Positive Behavior:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what's best for the community
- Showing empathy towards others

**Unacceptable Behavior:**
- Trolling, insulting, or derogatory comments
- Personal or political attacks
- Public or private harassment
- Publishing others' private information
- Other conduct which could reasonably be considered inappropriate

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the project maintainers. All complaints will be reviewed and investigated promptly and fairly.

## Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project README (for significant contributions)
- Release notes
- Special thanks section

## Questions?

If you have questions about contributing:
- Open an issue with the "question" label
- Ask in GitHub Discussions
- Contact the maintainers

## License

By contributing to BusBeacon, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to BusBeacon and helping make public transportation more accessible for everyone!
