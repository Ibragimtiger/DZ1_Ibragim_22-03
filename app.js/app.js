const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

  if (!emailRegex.test(email)) {
    alert("email указан неверно!!!");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Пароль должен состоять не менее чем из 4 символов и включать по крайней мере одну букву и одну цифру!!!");
    return;
  }

  alert("Действительный адрес электронной почты и пароль.");
});
const block = document.querySelector("#block");
let x = 0;
let y = 0;

function moveBlock() {
  setTimeout(() => {
    if (x < 900 && y <= 0) {
      x += 20;      
    } else if (x >= 900 && y < 200) {
      y += 20
    } else if (x > 0 && y >= 200) {
      x -= 20
    }  else if (x <= 0 && y > 0) {
      y -= 20
    }
  
    block.style.left = x + "px";
    block.style.top = y + "px";
    moveBlock()
  }, 50)
}

moveBlock();