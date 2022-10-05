const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function () {
  jump();
});
document.addEventListener("click", function () {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 600);
}

//score
let score = document.getElementById("score");
let mili = 0;
setInterval(function () {
  ++mili;
  console.log(mili);
  score.textContent = `${mili}`;
}, 100);

//stop game
let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert(`GAME OVER! your score: ${mili}`);
    window.location.reload();
  }
}, 10);
