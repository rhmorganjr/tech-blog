async function loginFormHandler(event) {
  event.preventDefault();
console.log("## login.js");
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log("## "+response.json);
    // check the response status
    if (response.ok) {
      //req.session.loggedIn = true;
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);