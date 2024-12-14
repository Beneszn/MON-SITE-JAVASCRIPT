function darkmode() {
const element = document.body;
element.classList.toggle("darkmode");
  
if (element.classList.contains("darkmode")) {
localStorage.setItem("darkmode", "enabled");
} else {
localStorage.removeItem("darkmode");
}
}

document.addEventListener("DOMContentLoaded", () => {
const element = document.body;
if (localStorage.getItem("darkmode") === "enabled") {
element.classList.add("darkmode");
}
});

const links = document.querySelectorAll("nav li a"); 
const icon = document.querySelector(".menu-icon");   
const nav = document.querySelector("nav");           

if (icon && nav) {
icon.addEventListener("click", () => {
nav.classList.toggle("active");
});
}

if (links.length > 0) {
links.forEach((link) => {
link.addEventListener("click", () => {
if (nav.classList.contains("active")) {
nav.classList.remove("active");
}
});
});
}
const passwordInput = document.getElementById("password");
const passwordRules = document.getElementById("password-rules");
const togglePasswordBtn = document.getElementById("togglePassword");
const passwordInvalidMessage = document.getElementById("password-invalid-message");

function validatePassword(password) {
const lengthCheck = password.length >= 8;
const uppercaseCheck = /[A-Z]/.test(password);
const numberCheck = /[0-9]/.test(password);
const specialCharCheck = /[!@#$%^&*]/.test(password);

return lengthCheck && uppercaseCheck && numberCheck && specialCharCheck;
}

togglePasswordBtn.addEventListener("click", () => {
const type = passwordInput.type === "password" ? "text" : "password";
passwordInput.type = type;
togglePasswordBtn.textContent = type === "password" ? "👁️" : "🙈";
});

passwordInput.addEventListener("input", () => {
const password = passwordInput.value;

if (password === "") {
passwordRules.style.display = "none";
passwordInvalidMessage.textContent = "";
} else {
passwordRules.style.display = "block";
}

if (password.length >= 8 && !validatePassword(password)) {
passwordInput.classList.remove("valid");
passwordInput.classList.add("invalid");
} else if (validatePassword(password)) {
passwordInput.classList.remove("invalid");
passwordInput.classList.add("valid");
passwordInvalidMessage.textContent = ""; // Réinitialiser le message
passwordRules.classList.add("valid");
passwordRules.innerHTML = "Mot de passe valide ✅";
} else {
passwordInput.classList.remove("valid");
passwordInput.classList.add("invalid");
passwordInvalidMessage.textContent = "";
passwordRules.classList.remove("valid");
passwordRules.innerHTML = `
Le mot de passe doit contenir :
<ul>
<li>Au moins 8 caractères</li>
<li>Une lettre majuscule</li>
<li>Un chiffre</li>
<li>Un caractère spécial (!@#$%^&*)</li>
</ul>
`;
}
});