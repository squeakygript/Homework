alert(
  "Hi Welcome To The Gay Tutorial Spesficly made for rostam my love may this teaching will get you a fucking job so you wont be broke nigga no more ",
);

let button = document.getElementById("myGayButton");
let body = document.body;

let form = document.getElementById("myGayForm");

button.addEventListener("click", TextTrigger);

function TextTrigger() {
  button.style.color = "pink";
  button.textContent = "ewww where are you touching you little gay boy";

  button.classList.add("gayAnimation");

  setTimeout(function () {
    button.classList.remove("gayAnimation");
  }, 5000);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let gayName = document.getElementById("gayUsername").value;
  let gayPassword = document.getElementById("gayPassword").value;

  console.log("User Name:", gayName);
  console.log("Password:", gayPassword);
});

console.log(class1);
