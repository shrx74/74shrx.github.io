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
  projectModal.hidden = true;
  document.body.classList.remove("modal-open");
  modalMedia.replaceChildren();
};

document.querySelectorAll(".project").forEach((project) => {
  const iframe = project.querySelector(".video-embed iframe");
  if (!iframe) return;

  project.addEventListener("click", (event) => {
    if (event.target.closest(".video-embed") || event.target.closest("a")) return;

    const clone = iframe.cloneNode(true);
    const separator = clone.src.includes("?") ? "&" : "?";
    clone.src = clone.src + separator + "autoplay=1&rel=0";

    modalMedia.replaceChildren(clone);
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
