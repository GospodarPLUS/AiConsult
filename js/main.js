let step = 0;
let answers = [];

const questions = [
  "Який тип робіт вас цікавить?",
  "Яка приблизна площа (м²)?",
  "У якому місті?"
];

function addMessage(text, from = "bot") {
  const div = document.createElement("div");
  div.innerText = (from === "bot" ? "🤖 " : "👤 ") + text;
  document.getElementById("messages").appendChild(div);
}

addMessage(
  "Привіт 👋 Я AI-консультант з ремонту та будівництва. Допоможу вам зрозуміти реальну вартість і уникнути переплат."
);

function sendMessage() {
  const input = document.getElementById("userInput");
  if (!input.value) return;

  addMessage(input.value, "user");
  answers.push(input.value);
  input.value = "";

  if (step < questions.length) {
    addMessage(questions[step]);
    step++;
  } else {
    addMessage(
      "Дякую! Для точного кошторису напишіть менеджеру 👉 t.me/@SHA_M_AN"
    );
    addMessage(
  "📌 На основі ваших відповідей я вже можу сформувати попередню оцінку.\n" +
  "Для точного кошторису та рекомендацій напишіть 👉 Telegram t.me/@SHA_M_AN"
);

  }
}

function animateValue(id, end) {
  let start = 0;
  const el = document.getElementById(id);
  const interval = setInterval(() => {
    start++;
    el.textContent = start;
    if (start >= end) clearInterval(interval);
  }, 20);
}

window.addEventListener("scroll", () => {
  const footer = document.querySelector(".footer");
  const rect = footer.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    animateValue("count1", 128);
    animateValue("count2", 47);
  }
}, { once: true });



