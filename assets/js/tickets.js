require('bootstrap');
<<<<<<< HEAD

if (window.location.href.indexOf("tickets") > -1) {

=======
const createEl = require('./domMethods');

$(document).ready(function() {
>>>>>>> feature/offline-functionality
  const purchaseBtn = document.getElementById("purchaseBtn");
  const purchaseEmail = document.getElementById("purchaseEmail");
  const modalEl = document.querySelector(".modal-content");
  const modalBodyEl = document.querySelector(".modal-body");
  const modalFooterEl = document.querySelector(".modal-footer");

<<<<<<< HEAD

  function purchaseTicket () {

    modalEl.removeChild(modalBodyEl)
    modalEl.removeChild(modalFooterEl)

=======
  function purchaseTicket () {
    modalEl.removeChild(modalBodyEl)
    modalEl.removeChild(modalFooterEl)
>>>>>>> feature/offline-functionality
    modalEl.append(createEl("div", {class: "modal-body"},
      createEl("h5", {class: "modal-title"}, 
      `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`
      ),
    ))
<<<<<<< HEAD
    
  }
  purchaseBtn.addEventListener("click", purchaseTicket);
}
=======
  }
  purchaseBtn.addEventListener("click", purchaseTicket);
});
>>>>>>> feature/offline-functionality
