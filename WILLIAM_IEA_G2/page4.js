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

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", function () {

    tabs.forEach(t => t.classList.remove("tab-visible"));
    contents.forEach(c => c.classList.remove("visible"));
    console.log("Fait apparaître un autre onglet et son contenu");

    this.classList.add("tab-visible");

    if (this.classList.contains("tab-content1")) {
      document.querySelector(".content1").classList.add("visible");
    } else if (this.classList.contains("tab-content2")) {
      document.querySelector(".content2").classList.add("visible");
    } else if (this.classList.contains("tab-content3")) {
      document.querySelector(".content3").classList.add("visible");
    }
  });
});
