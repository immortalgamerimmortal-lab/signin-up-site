const container = document.getElementById("container");
const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const message = document.getElementById("form-message");

registerButton.addEventListener("click", () => {
	container.classList.add("active");
	message.textContent = "";
});

loginButton.addEventListener("click", () => {
	container.classList.remove("active");
	message.textContent = "";
});

document.querySelectorAll(".form-container form").forEach((form) => {
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		message.textContent = "Authentication is not connected yet.";
	});
});

document.querySelectorAll(".social-icons a, .forgot-password").forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();
		message.textContent = link.classList.contains("forgot-password")
			? "Password recovery is not connected yet."
			: "Social sign-in is not connected yet.";
	});
});
