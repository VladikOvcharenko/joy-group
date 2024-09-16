import GraphModal from "graph-modal";

const modal = new GraphModal();

class ModalVideo {
  constructor({
    modalSelector,
    openButtonSelector,
    closeButtonSelector,
    videoSelector,
    videoSrc,
  }) {
    this.modal = document.querySelector(modalSelector);
    this.openButton = document.querySelector(openButtonSelector);
    this.closeButton = document.querySelector(closeButtonSelector);
    this.video = document.querySelector(videoSelector);
    this.videoSrc = videoSrc;

    if (!this.modal || !this.openButton || !this.closeButton || !this.video) {
      return;
    }

    this.initEvents();
  }

  openModal() {
    this.modal.classList.add("modal__video-active");
    this.video.src = `${this.videoSrc}?autoplay=1&rel=0`;
    document.body.classList.add("dis-scroll");
  }

  closeModal() {
    this.modal.classList.remove("modal__video-active");
    this.video.src = "";
    document.body.classList.remove("dis-scroll");
  }

  initEvents() {
    this.openButton.addEventListener("click", () => this.openModal());

    this.closeButton.addEventListener("click", () => this.closeModal());

    this.modal.addEventListener("click", (event) => {
      if (!this.video.contains(event.target)) {
        this.closeModal();
      }
    });
  }
}

const mainOpenModal = new ModalVideo({
  modalSelector: ".main-open__modal",
  openButtonSelector: ".main-open__btn",
  closeButtonSelector: ".main-open__modal-close",
  videoSelector: ".main-open__modal-video",
  videoSrc: "https://www.youtube.com/embed/Gc82IL5apgs",
});
const sessionOpenModal = new ModalVideo({
  modalSelector: ".session-hero__modal",
  openButtonSelector: ".session-hero__video-btn",
  closeButtonSelector: ".session-hero__modal-close",
  videoSelector: ".session-hero__modal-video",
  videoSrc: "https://www.youtube.com/embed/Gc82IL5apgs",
});
