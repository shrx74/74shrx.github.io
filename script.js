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

const projectModal = document.querySelector("#projectModal");
const modalMedia = document.querySelector("#modalMedia");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");

const closeProjectModal = () => {
  const video = modalMedia.querySelector("video");
  if (video) video.pause();

  projectModal.hidden = true;
  document.body.classList.remove("modal-open");
  modalMedia.replaceChildren();
};

document.querySelectorAll(".video-native video").forEach((video) => {
  video.addEventListener("contextmenu", (event) => event.preventDefault());
});

document.querySelectorAll(".project").forEach((project) => {
  const video = project.querySelector(".video-native video");
  if (!video) return;

  project.addEventListener("click", (event) => {
    if (event.target.closest(".video-native") || event.target.closest("a")) return;

    const modalVideo = document.createElement("video");
    modalVideo.src = video.currentSrc || video.src;
    modalVideo.controls = true;
    modalVideo.autoplay = true;
    modalVideo.playsInline = true;
    modalVideo.preload = "metadata";
    modalVideo.setAttribute("controlslist", "nodownload noremoteplayback");
    modalVideo.setAttribute("disablepictureinpicture", "");
    modalVideo.addEventListener("contextmenu", (event) => event.preventDefault());

    modalMedia.replaceChildren(modalVideo);
    modalTitle.textContent = project.querySelector("h3")?.textContent ?? "";
    modalDescription.textContent = project.querySelector(".project-text p")?.textContent ?? "";

    projectModal.hidden = false;
    document.body.classList.add("modal-open");
  });
});

projectModal.querySelectorAll("[data-modal-close]").forEach((element) => {
  element.addEventListener("click", closeProjectModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !projectModal.hidden) {
    closeProjectModal();
  }
});
