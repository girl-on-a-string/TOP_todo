// control open and close

const modalControls = () => {
    const modalShadow = document.getElementById("modal-shadow");
    modalShadow.style.display = "none";
    const modal = document.getElementById("modal");
    modal.style.display = "none";

    const openModal = () => {
        modal.style.display = "initial";
        modalShadow.style.display = "initial";
        modalShadow.addEventListener("click", () => {
            closeModal();
        });
    }

    const closeModal = () => {
        modal.style.display = "none";
        modalShadow.style.display = "none";
    }

    return {
        openModal, closeModal
    }
}

// retreive data from inputs

const getModalData = () => {
    let newTaskName = document.getElementById("task-name").value;
    let newTaskDesc = document.getElementById("task-desc").value;

    let radios = document.getElementsByName("priority");
    let newTaskPriority = Array.from(radios).find(radios => radios);

    return {
        newTaskName, newTaskDesc, newTaskPriority
    }
}

export {modalControls, getModalData};