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

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

/*--------- key Event -------- */

const text = document.getElementById("text");
const textAnswer = document.querySelector(".textAnswer");
console.log(textAnswer);

text.addEventListener("keypress", (e) => {
  console.log(e.key);
  textAnswer.innerHTML = `<h3> ${e.key} </h3>`;
});

console.log(text);
