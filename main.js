
const card = document.getElementById("card");
const formSection = document.getElementById("form-section");
const form = document.getElementById("form");
const successSection = document.getElementById("success");
const emailInput = document.getElementById("email");
const dismiss = document.getElementById("dismiss-btn");
const errorMsg = document.getElementById('error');
let emailValue = emailInput.value;
let submittedEmail = document.getElementById("submitted-email");
successSection.style.display = "none";
errorMsg.style.display = 'none';



const emailValidation = () => {
	const emailValue = emailInput.value.trim();
	const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

	if (isValidEmail) {
		console.log("Email is valid");
		formSection.style.display = "none";
		successSection.style.display = "flex";
		card.classList.add('success');
submittedEmail.textContent = `${emailValue}`
	} else {
		console.log("Email is invalid");
		emailInput.classList.add('error');
		errorMsg.style.display = 'block';
	}
};

const dismissFn = () => {
	formSection.style.display = "flex";
	successSection.style.display = "none";
	errorMsg.style.display = 'none';
	emailInput.classList.remove("error");
	card.classList.remove('success');
};

// Check for form submission
form.addEventListener("submit", (event) => {
	event.preventDefault();
	emailValidation();
	// Perform form submission logic here
});

// listen for dismiss-btn
dismiss.addEventListener("click", () => {
	dismissFn();
});