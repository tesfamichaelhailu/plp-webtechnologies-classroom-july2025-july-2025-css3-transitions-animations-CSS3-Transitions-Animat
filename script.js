// Get Elements
const bookNowBtn = document.getElementById('bookNowBtn');
const bookingModal = document.getElementById('bookingModal');
const closeModal = document.getElementById('closeModal');
const bookingForm = document.getElementById('bookingForm');

// Function to show modal
function showModal(modal) {
    modal.classList.add('show');
}

// Function to hide modal
function hideModal(modal) {
    modal.classList.remove('show');
}

// Function to handle booking form submission
function handleBooking(form) {
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    alert(`Thank you, ${name}! Your booking request has been received. We will contact you at ${email}.`);
    form.reset();
    hideModal(bookingModal);
}

// Event Listeners
bookNowBtn.addEventListener('click', () => showModal(bookingModal));
closeModal.addEventListener('click', () => hideModal(bookingModal));
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    handleBooking(bookingForm);
});

// Add event listeners to all room "Book" buttons dynamically
document.querySelectorAll('.book-btn').forEach(btn => {
    btn.addEventListener('click', () => showModal(bookingModal));
});
