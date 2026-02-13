const button = document.getElementById("trainButton");
const buttonBad = document.getElementById("badButton");
const sound = document.getElementById("trainSound");
const footer = document.querySelector(".footer");

const train = document.getElementById("train");

button.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();
  button.textContent = "Как тебе звуки поезда? Варианты ответа: ";
  button.style.background = "transparent";
  button.style.color = "white";
  buttonBad.style = "display:inline;";

  train.style = "display:inline;";

  window.scrollTo({
  top: document.body.scrollHeight,
  behavior: "smooth"
  });
});


buttonBad.addEventListener("mouseenter", () => {
  const btnWidth = buttonBad.offsetWidth;
  const btnHeight = buttonBad.offsetHeight;

  const footerRect = footer.getBoundingClientRect();

  const maxX = footerRect.width - btnWidth;
  const maxY = footerRect.height - btnHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  buttonBad.style.left = randomX + "px";
  buttonBad.style.top = randomY + "px";
});


const textElement = document.getElementById("loveText");

const phrases = [
  "Ты случайно не божья коровка?<br>Просто рядом с тобой я жук",
  "Ты случайно не информ?<br>А ну ладно",
  "Твои родители случайно не сушат киви?<br>Тогда откуда у них такая мышка",
  "C одной стороны, да<br> С другой стороны, нет",
  "Ты случайно не с одной стороны?<br>Не, я с другой",
  "Ты случайно не радий, диспрозий, кислород, сера и титан?",
  "Тогда почему рядом с тобой столько Ra – Dy – O – S – Ti",
  "Твои глаза случайно не ирландское море?<br>Тогда почему в них так легко утонуть",
  "А ты случайно не пила тес?<br>Просто у меня пакетик пропал куда-то",
  "Идеи кончились...",
  "диван алина",
  "Сериал крутится вокруг молодого игрока в лакросс по имени Скотт Маккол. Однажды ночью он блуждал по лесу в поисках трупа и подвергся нападению оборотня.",
  "Хотя и бабочки, и жуки относятся к классу насекомых, они принадлежат к разным отрядам",
  "И я любил. И я изведал<br>Безумный хмель любовных мук,<br>И пораженья, и победы,<br>И имя: враг; и слово: друг.",
  "gap в CSS — это свойство, используемое для создания промежутков (отступов) между элементами внутри контейнеров",
  "Взвешивайся 3 раза в неделю утром натощак",
  "Сегодня будет хорошая погода",
  "Нормально"
];

let currentIndex = 0;

setInterval(() => {
  textElement.classList.add("fade-out");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % phrases.length;
    textElement.innerHTML = phrases[currentIndex];

    textElement.classList.remove("fade-out");
    textElement.classList.add("fade-in");

    setTimeout(() => {
      textElement.classList.remove("fade-in");
    }, 600);

  }, 600);

}, 6000);
