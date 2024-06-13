function showSignupForm() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'block';
}

function showLoginForm() {
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return regex.test(password);
}

function signup() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  if (!validateEmail(email)) {
      
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have submitted invalid data!",
    });
    return false;
  }

  if (!validatePassword(password)) {
     Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Password must be 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter',
    });
      
      return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.find(user => user.email === email);

  if (userExists) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: 'User already exists',
  });
       
      return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  
  Swal.fire({
    icon: "success",
    text: 'User registered successfully',
});
     
  showLoginForm();
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);
 


  if (user) {
      localStorage.setItem('currentUser', user.name);
      window.location.href = 'welcome.html';
  } else {
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Invalid email or password',
    });
  }
}
