const text = "Srimaa Patra";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}

typeEffect();
function toggleTheme() {
  document.body.classList.toggle("light");
}

document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you Srimaa! Message sent 🚀");
  this.reset();
});