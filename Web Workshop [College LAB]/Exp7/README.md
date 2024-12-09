# Experiment 7: JavaScript Validation for Name and Password

## Objective

Implement JavaScript validation for the name and password fields of the registration form created in Experiment 6.

## Implementation Details

### Files

- [validation_name_pass.js](Web%20Workshop%20[College%20LAB]/Exp7/validation_name_pass.js): JavaScript validation script
- Connected to [reg_page.html](Web%20Workshop%20[College%20LAB]/Exp6/reg_page.html) from Experiment 6

## Validation Rules

### Name Validation

- Minimum length: 3 characters
- Allowed characters: letters and spaces only
- Pattern: `^[a-zA-Z\s]+$`

### Password Validation

- Minimum length: 8 characters
- Must contain at least:
  - One uppercase letter
  - One lowercase letter
  - One number
  - One special character (!@#$%^&*)

## Implementation

```javascript
// Example validation function
function validateForm() {
    // Name validation
    if (fullname.length < 3) {
        alert('Name must be at least 3 characters long');
        return false;
    }
    
    // Password validation
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return false;
    }
    // Additional validation checks...
}
