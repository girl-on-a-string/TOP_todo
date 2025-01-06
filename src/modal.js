// control open and close

const modalControls = () => {
    const modalShadow = document.getElementById("modal-shadow");
    modalShadow.style.display = "none";
    const modal = document.getElementById("modal");
    modal.style.display = "none";

    const openModal = () => {
        modal.style.display = "initial";
        modalShadow.style.display = "flex";
        modalShadow.addEventListener("click", () => {
            closeModal()
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

}

export {modalControls ,getModalData};