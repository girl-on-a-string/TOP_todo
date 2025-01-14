// open + close modal

const modal = document.getElementById("modal");
const modalShadow = document.getElementById("modal-shadow");

modal.style.display = "none";
modalShadow.style.display = "none";

const openModal = () => {
    modal.style.display = "initial";
    modalShadow.style.display = "initial";
    modalShadow.addEventListener("click", () => {
        modalShadow.style.display = "none";
        modal.style.display = "none";
    });
}

const closeModal = () => {

}

// submit or cancel actions

const submitModal = () => {
    // submit, close, and clear all data
}

const cancelModal = () => {
    // close and clear all data
}

// export

export {openModal}