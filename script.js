
const form = document.getElementById('myForm');
const errorMessages = document.getElementById('errorMessages');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  errorMessages.innerHTML = '';

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;

  if (name === '') {
    errorMessages.innerHTML += '<p>Please enter your name</p>';
  }

  if (email === '') {
    errorMessages.innerHTML += '<p>Please enter your email</p>';
  } else if (!isValidEmail(email)) {
    errorMessages.innerHTML += '<p>Please enter a valid email</p>';
  }

  if (password === '') {
    errorMessages.innerHTML += '<p>Please enter a password</p>';
  } else if (password.length < 8) {
    errorMessages.innerHTML += '<p>Your password must be at least 8 characters long</p>';
  }

  if (errorMessages.innerHTML === '') {
    form.submit();
  }
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}