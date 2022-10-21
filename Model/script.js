'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const showModal = document.querySelectorAll(".show-modal");
// console.log(modal);
// console.log(overlay);
// console.log(btnCloseModal);
// console.log(showModal);
for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener("click", () => {

        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");

        // document.querySelector("body").classList.add("overlay");


    });
}
const closePopUp = () => {
    modal.classList.toggle("hidden");
    document.querySelector("body").classList.remove("overlay");
    overlay.classList.add("hidden");
}
btnCloseModal.addEventListener('click', closePopUp);
overlay.addEventListener('click', closePopUp);

document.addEventListener('keydown', (e) => {
    if ((e.key === 'Escape') && (!modal.classList.contains('hidden'))) {
        closePopUp();
    }
})