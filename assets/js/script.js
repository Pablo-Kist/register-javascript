const inputs = document.querySelectorAll(".input");
const letter = document.querySelector(".letter");
const eyes = document.querySelectorAll(".form-password i");
const h1 = document.querySelector("h1");

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    letter.style.opacity = 0;
    if (input.type !== "password") {
      setTimeout(() => {
        letter.textContent = e.target.value.split("").slice(-1);
        letter.style.opacity = 1;
      }, 100);
    } else {
      setTimeout(() => {
        letter.textContent = "*";
        letter.style.opacity = 1;
      }, 100);
    }
  });
  input.addEventListener("focus", (e) => {
    h1.style.opacity = onabort;
    setTimeout(() => {
      h1.textContent = e.target.placeholder;
      h1.style.opacity = 1;
    }, 200);
  });
});

eyes.forEach((eye) => {
  eye.addEventListener("click", () => {
    eye.classList.toggle("fa-eye");

    eye.classList.contains("fa-eye")
      ? (eye.previousElementSibling.type = "text")
      : (eye.previousElementSibling.type = "password");
  });
});
