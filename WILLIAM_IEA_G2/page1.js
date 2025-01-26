const darkModeButton = document.getElementById("darkMode");
const body = document.body;

darkModeButton.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    darkModeButton.textContent = "MODE SOMBRE";
  } else {
    body.classList.add("dark-mode");
    darkModeButton.textContent = "MODE CLAIR";
  }
});