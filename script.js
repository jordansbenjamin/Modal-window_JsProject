'use strict';

// Note:
// Queryselector only selects the first instance of an html element in a page
// Unless you use: querySelectorAll

// Organising elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // console.log('Button clicked');
  // To remove the class (dont need the dot)
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// If its only one line, technically you don't need curly braces for a block under a for loop
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Closing the modal with the x (close) btn
btnCloseModal.addEventListener('click', closeModal);
// Closing the modal outside on the overlay
overlay.addEventListener('click', closeModal);

// Listening for events globally, usually used for keyboard presses
document.addEventListener('keydown', function (event) {
  // if (event.key === 'Escape') {
  //   if (!modal.classList.contains('hidden')) {
  //     closeModal();
  //   }
  // }
  // Using && to shorten the above
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
