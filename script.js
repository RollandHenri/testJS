/* ------------ Cilck Event ----------*/

const container = document.querySelector(".clickEvent");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.querySelector("p");

btn2.addEventListener("click", () => {
  answer.classList.add("badAnswerJS");
});
btn1.addEventListener("click", () => {
  answer.classList.add("greatAnswerJS");
});

/*--------- Mouse Event -------- */

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", () => {});
console.log(mousemove);
