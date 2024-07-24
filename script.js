/* ------------ Cilck Event ----------*/

const container = document.querySelector(".clickEvent");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.querySelector("p");

console.log(answer);

btn2.addEventListener("click", () => {
  answer.classList.add("badAnswerJS");
});
btn1.addEventListener("click", () => {
  answer.classList.add("greatAnswerJS");
});
console.log();

/*--------- Mouse Event -------- */
