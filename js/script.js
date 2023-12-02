
let userName = document.getElementById("name");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("cpassword");
let checkbox = document.getElementById("confirm");
let countryList = document.getElementById("country");
let submitBtn = document.getElementById("submit");
let welcomeMsg = document.getElementById("welcomeMessage");



countries.forEach (country=> {
    option = document.createElement('option');
    option.value = country.code;
    option.text = country.name;
    countryList.appendChild(option);
});


function validation() {
    const validUserName = userName.value.trim() !== '';
    const validPassword = password.value.length >= 12;
    const validConfirmPassword = confirmPassword.value === password.value;
    const validTermChecked = checkbox.checked;
    const validCountrySelected = countryList.value !== 'none';

    return (validUserName && validPassword && validConfirmPassword && validTermChecked && validCountrySelected );
}

function toggleSubmitButton() {
    submitBtn.disabled = !validation();
}


userName.addEventListener("input", toggleSubmitButton);
password.addEventListener("input", toggleSubmitButton);
confirmPassword.addEventListener("input", toggleSubmitButton);
checkbox.addEventListener("change", toggleSubmitButton);
countryList.addEventListener("change", toggleSubmitButton);

document.getElementById("registration").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  if (validation()) {
    welcomeMsg.textContent = `Welcome ${userName.value}! The country code you selected is ${countryList.value}`;
    welcomeMsg.style.display = "block"; 
  }
});


