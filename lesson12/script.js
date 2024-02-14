const box = document.querySelector("#box");
console.log(box);

// box.style.height = '200px';
// box.style.backgroundColor = '#eee';

// box.style.cssText = 'height: 200px; background-color: #eee';

const button = document.querySelectorAll("button"); // button is not a class! that's why we write it without '.'
console.log(button[1]);

const circle = document.querySelector(".circle"); // circle is a class! that's why we write it with '.'
console.log(circle);

const div = document.createElement("div");
div.classList.add("button-red");
document.body.prepend(div);

div.innerHTML = "<h1>Hello</h1>";

div.remove();

circle.addEventListener("click", () => {
  console.log("Button is clicked");
});

// circle.addEventListener("click", (item) => {
//   console.log("Button is clicked");
//   item.target.remove();
// });

// buttons.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("Hello");
//   });
// });
