/* style switcher  */
const links = document.querySelectorAll(".alternate-style"),
  totlelinks = links.length;

function setActivestyle(color) {
  for (let i = 0; i < totlelinks; i++) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
}

/* body skin */
const body_skin = document.querySelectorAll(".body-skin"),
  body_skin_length = body_skin.length;
for (let i = 0; i < body_skin_length; i++) {
  body_skin[i].addEventListener("change", function () {
    if (this.value === "light") {
      document.body.className = "light_style";
    } else {
      document.body.className = "";
    }
  });
}

let typed = new Typed(".typing", {
  strings: [
    "",
    "HTML",
    "CSS",
    "Bootstrap",
    "Vue.js",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/* date */
let date = new Date(); //object
let Time = document.getElementById("year");
Time.innerHTML = date.getFullYear();
