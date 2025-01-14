import "./styles.css";
import { openModal } from "./modal";

// handle btns

document.getElementById("add-task-btn").addEventListener("click", () => {
    openModal();
});