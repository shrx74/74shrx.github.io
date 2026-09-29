const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

const copyDiscord = document.querySelector("#copyDiscord");
const copyLabel = document.querySelector("#copyLabel");

if (copyDiscord) {
  copyDiscord.addEventListener("click", async () => {
    const username = copyDiscord.dataset.discord;

    if (!username || username === "YOUR_DISCORD_USERNAME") {
      copyLabel.textContent = "add username";
      setTimeout(() => {
        copyLabel.textContent = "copy";
      }, 1600);
      return;
    }

    try {
      await navigator.clipboard.writeText(username);
      copyLabel.textContent = "copied";
    } catch {
      copyLabel.textContent = username;
    }

    setTimeout(() => {
      copyLabel.textContent = "copy";
    }, 1600);
  });
}
