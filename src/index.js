import "./styles.css";
import { openModal, submitModal, closeModal } from "./modal";

// handle btns

document.getElementById("add-task-btn").addEventListener("click", () => {
    openModal();
});

document.getElementById("submit-data").addEventListener("click", () => {
    submitModal();
});

document.getElementById("cancel-action").addEventListener("click", () => {
    closeModal();
});