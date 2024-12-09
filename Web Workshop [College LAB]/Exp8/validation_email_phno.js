function validateEmailAndPhone() {
    // Get form elements
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Email validation using regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Phone number validation
    // Accepts formats: +91 99999 99999 or 9999999999
    const phoneRegex = /^(\+91[\s])?[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number (optionally with +91 prefix)');
        return false;
    }

    return true;
}