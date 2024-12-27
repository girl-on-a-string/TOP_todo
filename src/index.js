import "./styles.css";
import { modalControls, getModalData } from "./modal";

document.getElementById("add-task-btn").addEventListener("click", () => {
    modalControls().openModal();
});

(() => {
    console.log("hello world");
    modalControls();
})();