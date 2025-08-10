const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const feedback = document.getElementById("feedback");
const togglePassword = document.getElementById("togglePassword");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    let strength = 0;

    // Criteria checks
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    // Update bar & feedback
    switch (strength) {
        case 0:
            strengthBar.style.width = "0%";
            feedback.textContent = "";
            break;
        case 1:
            strengthBar.style.width = "20%";
            strengthBar.style.backgroundColor = "red";
            feedback.textContent = "Very Weak";
            break;
        case 2:
            strengthBar.style.width = "40%";
            strengthBar.style.backgroundColor = "orange";
            feedback.textContent = "Weak";
            break;
        case 3:
            strengthBar.style.width = "60%";
            strengthBar.style.backgroundColor = "yellow";
            feedback.textContent = "Medium";
            break;
        case 4:
            strengthBar.style.width = "80%";
            strengthBar.style.backgroundColor = "lightgreen";
            feedback.textContent = "Strong";
            break;
        case 5:
            strengthBar.style.width = "100%";
            strengthBar.style.backgroundColor = "green";
            feedback.textContent = "Very Strong";
            break;
    }
});

// Toggle password visibility
togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁";
    }
});