// import

import { newTask } from "./task";

// open + close modal

const form = document.getElementById("add-task-form");

const modal = document.getElementById("modal");
const modalShadow = document.getElementById("modal-shadow");

modal.style.display = "none";
modalShadow.style.display = "none";

const openModal = () => {
    modal.style.display = "initial";
    modalShadow.style.display = "initial";
    modalShadow.addEventListener("click", () => {
        closeModal();
    });
}

const closeModal = () => {
    modalShadow.style.display = "none";
    modal.style.display = "none";
    form.reset();
}

// submit or cancel actions

const submitModal = () => {
    // submit, close, and clear all data
    // create new task object with data

    const nameInput = document.getElementById("task-name");
    const descInput = document.getElementById("task-desc");
    const priorityRadios = document.getElementsByName("priority");

    const checkInputs = () => {
        let modalErrorDisplay = document.getElementById("modal-error-display");
        modalErrorDisplay.innerText = "";

        const checkRadios = () => {
            for (const radio of priorityRadios) {
                if (radio.checked) { 
                    return true;
                }
            }
        }
    
        const checkName = () => {
            if (nameInput.value !== "") {
                return true;
            }
        }

        const checkRequired = () => {
            if (checkRadios() && checkName()) {
                return true;
            } else {
                modalErrorDisplay.innerText = "Task must have a name and priority";
                return false;
            }
        }

        if (checkRequired()) {

        }

        // if checkrewuired true then check desc as well
    }

    checkInputs();
}

// export

export {openModal, submitModal, closeModal}