// Get the modal, button, and close elements
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// When the user clicks the button, open the modal
openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// When the user clicks the "x", close the modal
closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Close the modal if the user clicks anywhere outside of the modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
