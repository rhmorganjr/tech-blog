async function createPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const text  = document.querySelector('#content').value.trim();

  if (title && text) {
    const response = await fetch('/api/posts/new-post', {
      method: 'post',
      body: JSON.stringify({
        title,
        text
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    // check the response status
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.post-form').addEventListener('submit', createPostHandler);
