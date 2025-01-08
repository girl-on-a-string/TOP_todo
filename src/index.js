import "./styles.css";
import { modalControls, getModalData } from "./modal";

document.getElementById("add-task-btn").addEventListener("click", () => {
    modalControls().openModal();
});

document.getElementById("submit-data").addEventListener("click", () => {
    getModalData();

    console.log(getModalData());
});

(() => {
    console.log("hello world");
    modalControls();
})();