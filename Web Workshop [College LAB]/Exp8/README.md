# Experiment 8: Email and Phone Number Validation

## Objective

Implement JavaScript validation for email addresses and phone numbers, complementing the registration form validation from Experiments 6 and 7.

## Implementation Details

### Files

- [validation_email_phno.js](Web%20Workshop%20[College%20LAB]/Exp8/validation_email_phno.js): Main validation script
- Integrates with previous experiments' files

## Validation Rules

### Email Validation

- Must contain @ symbol
- Valid domain structure required
- Pattern: `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
- Common invalid scenarios handled:
  - Missing @ symbol
  - Invalid domain format
  - Multiple @ symbols

### Phone Number Validation

- 10 digits required
- Optional country code (+91)
- Pattern: `^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$`
- Validates:
  - Indian mobile numbers
  - Optional spacing/hyphens
  - With/without country code

## Features

- Real-time validation
- Descriptive error messages
- Integration with main registration form
- Cross-browser compatibility

## Testing Scenarios

1. Valid email formats
2. Invalid email formats
3. Valid phone numbers
4. Invalid phone numbers
5. Edge cases handling

## Integration

- Works with Experiment 6's HTML form
- Complements Experiment 7's name/password validation
- Combined validation on form submission
