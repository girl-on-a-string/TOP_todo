import "./styles.css";
import { modalControls, getModalData } from "./modal";

let taskNameInput = document.getElementById("task-name");
let taskDescInput = document.getElementById("task-desc");
let priorityRadios = document.getElementsByName("priority");
let modalErrors = document.getElementById("modal-error-display");

document.getElementById("add-task-btn").addEventListener("click", () => {
    modalControls().openModal();
});

document.getElementById("cancel-action").addEventListener("click", () => {
    taskNameInput.value = "";
    taskDescInput.value = "";

    modalControls().closeModal();
});

document.getElementById("submit-data").addEventListener("click", () => {

    if (taskNameInput.value !== "") {
        getModalData();
        modalControls().closeModal();
    } else {
        modalErrors.innerText = "Task must have a name and priority";
    }

    console.log(getModalData());
});

(() => {
    console.log("hello world");
    modalControls();
})();