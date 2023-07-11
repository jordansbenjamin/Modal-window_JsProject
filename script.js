'use strict';

// Note:
// Queryselector only selects the first instance of an html element in a page
// Unless you use: querySelectorAll

// Organising elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// If its only one line, technically you don't need curly braces for a block under a for loop
for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);
