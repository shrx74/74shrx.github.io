document.querySelector("#year").textContent = new Date().getFullYear();

const copyButton = document.querySelector("#copyDiscord");
const copyLabel = document.querySelector("#copyLabel");

copyButton.addEventListener("click", async () => {
  const username = copyButton.dataset.discord;

  try {
    await navigator.clipboard.writeText(username);
    copyLabel.textContent = "copied";
  } catch {
    copyLabel.textContent = username;
  }

  setTimeout(() => {
    copyLabel.textContent = "copy";
  }, 1400);
});