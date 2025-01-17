import "./styles.css";
import { openModal, submitModal, cancelModal } from "./modal";

// handle btns

document.getElementById("add-task-btn").addEventListener("click", () => {
    openModal();
});

document.getElementById("submit-data").addEventListener("click", () => {
    submitModal();
});

document.getElementById("cancel-action").addEventListener("click", () => {
    cancelModal();
});