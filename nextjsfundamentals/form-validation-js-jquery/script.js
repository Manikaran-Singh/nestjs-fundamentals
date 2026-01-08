$(document).ready(function () {

    // Toggle password show/hide
    $("#togglePassword").click(function () {
        const passwordField = $("#password");

        if (passwordField.attr("type") === "password") {
            passwordField.attr("type", "text");
            $(this).text("Hide");
        } else {
            passwordField.attr("type", "password");
            $(this).text("Show");
        }
    });

    // Form submit validation
    $("#registerForm").submit(function (e) {
        e.preventDefault();

        $("#message").hide().removeClass("error success");

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const phone = $("#phone").val().trim();
        const password = $("#password").val().trim();

        // Required field validation
        if (name === "" || email === "" || phone === "" || password === "") {
            showError("All fields are required");
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError("Please enter a valid email address");
            return;
        }

        // Phone number validation
        if (!/^\d{10}$/.test(phone)) {
            showError("Phone number must be exactly 10 digits");
            return;
        }

        // Strong password validation
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordPattern.test(password)) {
            showError("Password must be at least 8 characters and include uppercase, lowercase and a number");
            return;
        }

        // Success
        showSuccess("Form submitted successfully!");
        $("#registerForm")[0].reset();
    });

    // Error message function
    function showError(message) {
        $("#message").addClass("error").text(message).fadeIn();
    }

    // Success message function
    function showSuccess(message) {
        $("#message").addClass("success").text(message).fadeIn();
    }

});
