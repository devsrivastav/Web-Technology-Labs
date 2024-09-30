
document.getElementById('registrationForm').addEventListener('submit', function(event) {
        let valid = true;

        // Clear previous errors
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(error => error.style.display = 'none');

        // Validate Username
        const username = document.getElementById('username').value;
        if (username === '') {
            document.getElementById('usernameError').style.display = 'block';
            valid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            valid = false;
        }

        // Validate Phone Number
        const phone = document.getElementById('phone').value;
        const phonePattern = /^\d{10}$/; // Adjust regex based on your requirement
        if (!phonePattern.test(phone)) {
            document.getElementById('phoneError').style.display = 'block';
            valid = false;
        }

        // Validate Password
        const password = document.getElementById('password').value;
        if (password === '') {
            document.getElementById('passwordError').style.display = 'block';
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission
        }
    });