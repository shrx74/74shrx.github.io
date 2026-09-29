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

document.querySelectorAll(".youtube-player").forEach((player) => {
  const preview = player.querySelector(".youtube-preview");

  preview.addEventListener("click", () => {
    const videoId = player.dataset.youtubeId;
    const iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
    iframe.title = preview.getAttribute("aria-label") ?? "Project demo";
    iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    player.replaceChildren(iframe);
  });

  const image = preview.querySelector("img");

  image.addEventListener("error", () => {
    if (!image.src.includes("hqdefault.jpg")) {
      image.src = `https://i.ytimg.com/vi/${player.dataset.youtubeId}/hqdefault.jpg`;
    }
  });

  image.src = image.dataset.src;
});
