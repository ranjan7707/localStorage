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

  // Store the user data directly in the local storage with a unique key
  localStorage.setItem('userDataName', userData.name);
  localStorage.setItem('userDataEmail', userData.email);
});