const card = document.getElementById('card');
const formSection = document.getElementById('form-section');
const form = document.getElementById('form');
const successSection = document.getElementById('success');
const emailInput = document.getElementById('email');
let emailValue = emailInput.value;
const emailValidation = () => {
  if (emailValue.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    console.log('Email is valid');
    formSection.style.display = 'none';
  } else {

    console.log('Email is not valid');
  }
}
// Check for form submission
form.addEventListener('submit', (event) => {
  emailValidation();
  event.preventDefault();
  // Perform form submission logic here
});