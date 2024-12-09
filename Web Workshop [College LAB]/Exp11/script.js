document.getElementById('questionnaireForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById('age').value;
    const interests = document.querySelectorAll('input[name="interests"]:checked');
    const feedback = document.getElementById('feedback').value;

    // Validation checks
    if (!name) {
        alert('Please enter your name');
        return;
    }

    if (!gender) {
        alert('Please select your gender');
        return;
    }

    if (!age) {
        alert('Please select your age group');
        return;
    }

    // Collect form data
    const formData = {
        name: name,
        gender: gender.value,
        age: age,
        interests: Array.from(interests).map(cb => cb.id),
        feedback: feedback
    };

    // Display submission confirmation
    alert('Thank you for submitting the questionnaire!');
    console.log('Form Data:', formData);
    
    // Reset form
    this.reset();
});