document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for registration form submission
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var fullName = document.getElementById("fullName").value.trim();
        var email = document.getElementById("email").value.trim();
        var phoneNumber = document.getElementById("phoneNumber").value.trim();
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        // Validation criteria
        var errors = [];

        // Validate Full Name
        if (fullName.length < 5) {
            errors.push("Name must be at least 5 characters long.");
        }

        // Validate Email
        if (!email.includes("@")) {
            errors.push("Enter a valid email address.");
        }

        // Validate Phone Number
        if (phoneNumber.length !== 10 || phoneNumber === "123456789" || isNaN(phoneNumber)) {
            errors.push("Enter a valid 10-digit phone number.");
        }

        // Validate Password
        if (password === "password" || password.length < 8 || password.toLowerCase() === fullName.toLowerCase()) {
            errors.push("Password must be at least 8 characters long and not 'password' or your name.");
        }

        // Validate Confirm Password
        if (password !== confirmPassword) {
            errors.push("Passwords do not match.");
        }

        // Display errors or submit the form
        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            // Form is valid, show success message (you can implement this as a popup or notification)
            alert("Registration successful!");
            // Reset form fields if needed
            document.getElementById("registrationForm").reset();
        }
    });

});


document.addEventListener("DOMContentLoaded", function() {
    
    // Add event listener for login form submission
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Example login validation
        if (username === "example@example.com" && password === "password") {
            alert("Login successful!");
            // Redirect to dashboard or any other page
        } else {
            alert("Invalid username/email or password.");
        }
    });

    // Function to close popup
    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    // Add event listener for registration form submission
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var fullName = document.getElementById("fullName").value;
        var email = document.getElementById("email").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        // Validation criteria
        var errors = [];

        if (fullName.length < 5) {
            errors.push("Name must be at least 5 characters long.");
        }

        if (!email.includes("@")) {
            errors.push("Enter a valid email address.");
        }

        if (phoneNumber.length !== 10 || phoneNumber === "123456789") {
            errors.push("Enter a valid 10-digit phone number.");
        }

        if (password === "password" || password.length < 8 || password === fullName) {
            errors.push("Password must be at least 8 characters long and not 'password' or your name.");
        }

        if (password !== confirmPassword) {
            errors.push("Passwords do not match.");
        }

        // Display errors or submit the form
        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            // Form is valid, show the popup
            document.getElementById("popup").style.display = "block";
        }
    });

});
