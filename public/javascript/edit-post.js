async function editFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    //title is the value in the input box with id title-name
    const title = document.getElementById('title-name').value;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.href = '/dashboard';
    } 
    else {
        alert(response.statusText);
    }
}
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);