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

text.addEventListener("keypress", (e) => {
  textAnswer.textContent = e.key;
});

/*--------- scroll Event -------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.transform = "translateY(-100px)";
    navbar.style.opacity = 0;
  } else {
    navbar.style.transform = "translateY(0px)";
    navbar.style.opacity = 1;
  }
});

/*--------- Form Event -------- */
