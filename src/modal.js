// import

import { newTask, taskList } from "./task";

// open + close modal

const form = document.getElementById("add-task-form");

let modalErrorDisplay = document.getElementById("modal-error-display");
modalErrorDisplay.innerText = "";

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
    modalErrorDisplay.innerText = "";
    form.reset();
}

// submit or cancel actions

const submitModal = () => {
    // submit, close, and clear all data
    // create new task object with data

    const nameInput = document.getElementById("task-name");
    const descInput = document.getElementById("task-desc");
    const priorityRadios = document.getElementsByName("priority");

    let radioValue = "";

    const checkRadios = () => {
        for (const radio of priorityRadios) {
            if (radio.checked) { 
                radioValue = radio.value;
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
            let task = newTask(nameInput.value, descInput.value, radioValue);
            taskList.push(task);
            closeModal();
            return true;
        } else {
            modalErrorDisplay.innerText = "Task must have a name and priority";
            return false;
        }
    }

    checkRequired();

    return {checkRequired}
}

// export

export {openModal, submitModal, closeModal}