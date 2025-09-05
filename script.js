// ==================== DARK MODE TOGGLE ====================
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ==================== BUTTON CLICK COUNTER ====================
const myButton = document.getElementById("myButton");
const buttonMessage = document.getElementById("buttonMessage");
let clickCount = 0;

myButton.addEventListener("click", () => {
  clickCount++;
  buttonMessage.textContent = `You clicked ${clickCount} time${clickCount > 1 ? "s" : ""}! 🎉`;
});

// ==================== TOGGLE SWITCH ====================
const toggleSwitch = document.getElementById("toggleSwitch");
const toggleMessage = document.getElementById("toggleMessage");

toggleSwitch.addEventListener("change", () => {
  toggleMessage.textContent = toggleSwitch.checked
    ? "Switch is ON ✅"
    : "Switch is OFF ❌";
});

// ==================== DROPDOWN ====================
const myDropdown = document.getElementById("myDropdown");
const dropdownMessage = document.getElementById("dropdownMessage");

myDropdown.addEventListener("change", () => {
  dropdownMessage.textContent = myDropdown.value
    ? `You selected: ${myDropdown.value}`
    : "";
});

// ==================== FORM VALIDATION ====================
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Remove previous error messages
  document.querySelectorAll(".error").forEach(el => el.remove());

  let valid = true;
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Name validation
  if (name.value.trim() === "") {
    showError(name, "Name is required");
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    showError(email, "Enter a valid email");
    valid = false;
  }

  // Password validation
  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    valid = false;
  }

  if (valid) {
    alert("✅ Form submitted successfully!");
    myForm.reset();
  }
});

function showError(input, message) {
  const error = document.createElement("small");
  error.classList.add("error");
  error.textContent = message;
  input.insertAdjacentElement("afterend", error);
}

// ==================== FAQ ====================
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
