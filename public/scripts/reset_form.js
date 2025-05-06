// Listener for the page upon load

document.addEventListener("DOMContentLoaded", function () {
    const emailRstInstBtn = document.getElementById("emailRstInstBtn");
    const backToLoginBtn = document.getElementById("backToLoginBtn");

    emailRstInstBtn.addEventListener("click", () => {
        submitReset();
    })

    backToLoginBtn.addEventListener("click", () => {
        window.location.href = "/pages/login.html";
    })

    function submitReset() {
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message");
  
        if (!validateEmail(email)) {
          message.style.color = "#990000"; 
          message.textContent = "Please enter a valid email address.";
          return;
        }
  
        message.style.color = "#228B22"; 
        message.textContent = `Reset instructions have been sent to ${email}.`;
  
        
        setTimeout(() => {
          hideResetForm();
        }, 3000);
    }
  
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
      }
});