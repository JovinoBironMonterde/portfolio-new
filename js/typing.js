// TYPING ANIMATION
const text2 = ["Front-End Developer", "Wordpress Developer", "Blogger", "Freelancer"];
let count2 = 0;
let index2 = 0;
let currentText2 = "";
let letter2 = "";

(function type() {
  if (count2 === text2.length) {
    count2 = 0;
  }
  currentText2 = text2[count2];
  letter2 = currentText2.slice(0, ++index2);

  document.querySelector(".anim-typ").textContent = letter2;
  if (letter2.length === currentText2.length) {
    count2++;
    index2 = 0;
  }
  setTimeout(type, 200);
  typeSpeed: 100;
  backSpeed: 60;
  loop: true;
})();