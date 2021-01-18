const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Hello World",
  "Toast No 2",
  "Javascript Rocks",
  "Message Four",
];

const types = ["info", "error", "success"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const toastDiv = document.createElement("div");
  toastDiv.classList.add("toast");
  toastDiv.classList.add(
    type ? type : types[Math.floor(Math.random() * types.length)]
  );
  toastDiv.innerText = message
    ? message
    : messages[Math.floor(Math.random() * messages.length)];
  toasts.appendChild(toastDiv);
  setTimeout(() => {
    toastDiv.remove();
  }, 3000);
}
