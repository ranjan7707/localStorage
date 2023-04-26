// Select the HTML form element and the submit button
const form = document.querySelector('#my-form');
const submitBtn = document.querySelector('.btn');

// Attach an event listener to the submit button
submitBtn.addEventListener('click', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get all the user-entered data from the form fields
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;

  // Create an object to store the user-entered data
  const userData = {
    name,
    email
  };

  // Generate a unique key based on the current timestamp
  const key = Date.now().toString();

  // Store the user data in localStorage with the unique key
  localStorage.setItem(`userData_${key}_name`, userData.name);
  localStorage.setItem(`userData_${key}_email`, userData.email);
});