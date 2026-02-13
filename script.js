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
  "Идеи закончились, а чужое брать не хочу...",
  "недавно мне сон крутой приснился мы там с тобой ездили в индонезию и попали в очень странное место там было очень много бассейнов в которых купались старики но примечательно было не это а тот факт что в цетре каждого бассейна росли десятки деревьев, на каждом из которых висели спелые огромные фрукты типа бананы манго и тд но их никто не ел мы залезли и начали их кушать и я проснулся",
  "успела прочитать?",
  "недавно мне сон крутой приснился мы там с тобой ездили в индонезию и попали в очень странное место там было очень много бассейнов в которых купались старики но примечательно было не это а тот факт что в цетре каждого бассейна росли десятки деревьев, на каждом из которых висели спелые огромные фрукты типа бананы манго и тд но их никто не ел мы залезли и начали их кушать и я проснулся",
  "а теперь?",
  "ну и ладно",
  "сегодня я 2 часа клеил сержантскую книжку, каждую страницу ламинировал скотчем и потом всё степлером закрепил",
  "всё, пора спать",
  "хотя честно хочу еще немного побыть с тобой",
  "как жизнь?",
  "Завтра, 13 февраля, будет небольшой дождь, восточный ветер - будь готова",
  "А послезавтра дождь со снегом",
  "Да, божья коровка — это жук (лат. Coccinellidae), относящийся к отряду жесткокрылых, семейству жуков",
  "там ниже кнопки будут покликай",
  "И я любил. И я изведал<br>Безумный хмель любовных мук,<br>И пораженья, и победы,<br>И имя: враг; и слово: друг.",
  "А сейчас 23:48 12.02.26, чудное время, спокойно и тепло",
  "Мне еще один ужас снился с тобой связанный, но это как-нибудь потом",
  "а что тебе снится?",
  "надеюсь ты повелась на мой розыгрыш снизу",
  "и что ты не прочитала про розыгрыш до самого розыгрыша",
  "а ты действительно красивая",
  "не буду ничего редактировать и так тебе и отправлю эту валентинку",
  "вот теперь спать",
  "диван алина",
  "когда пришел на конкурс самого доброго человека но мой соперник не пришел чтобы позволить мне победить"
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
