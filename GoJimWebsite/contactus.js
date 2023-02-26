// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Send an AJAX request to the backend script
  fetch('send_message.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the backend script
    if (data.success) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('There was an error sending your message. Please try again later.');
    }
  })
  .catch(error => {
    alert('There was an error sending your message. Please try again later.');
    console.error(error);
  });
});
