// Listener for the page upon load

document.addEventListener("DOMContentLoaded", function () {
    const homePgBtn = document.getElementById("homePgBtn");
    const createAccountBtn = document.getElementById("createAccountBtn");
    const logInBtn = document.getElementById("logInBtn");
    const forgotInfoBtn = document.getElementById("forgotInfoBtn");
    homePgBtn.addEventListener("click", () => {
        window.location.href = "/pages/mainpage.html";
    });
    createAccountBtn.addEventListener("click", () => {
        window.location.href = "/pages/registration.html";
    });
    logInBtn.addEventListener("click", () => {
        window.location.href = "/pages/mainpage.html";
    });
    forgotInfoBtn.addEventListener("click", () => {
        window.location.href = "/pages/reset_form.html";
    });
})
document.getElementById('logInSubmission')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData.entries());
  
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
  
    const data = await res.json();
    if (data.accessToken) {
      localStorage.setItem('jwt', data.accessToken);
      window.location.href = '/mainpage.html';
    } else {
      document.getElementById('message').innerText = data.error || 'Login failed';
    }
  });
  function fetchWithAuth(url) {
    const token = localStorage.getItem('jwt');
    return fetch(url, {
      headers: { Authorization: 'Bearer ' + token }
    });
  };