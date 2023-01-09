const body = document.querySelector("body");
body.style.backgroundColor = "blue";
const p = document.querySelector("p");
p.innerHTML = "fuck nati";
p.addEventListener("click", (e) => {
  p.style.color = "red";
  p.classList.add("big");
});
