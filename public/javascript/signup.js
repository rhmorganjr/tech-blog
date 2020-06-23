async function signupFormHandler(event) {
  event.preventDefault();
console.log("### signupFormHandler");
  const username = document.querySelector('#username-signup').value.trim();
  const email = username + "@gmail.com";
  const password = document.querySelector('#password-signup').value.trim();
  console.log(username+"; "+email+", "+password);
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    // check the response status
    if (response.ok) {
      console.log("success");
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);