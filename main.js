async function fetchComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=20');
        const comments = await response.json();
        displayComments(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

function displayComments(comments) {
    const commentsContainer = document.getElementById('comments-container');
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <h2>${comment.name}</h2>
            <p><strong>Email:</strong> ${comment.email}</p>
            <p>${comment.body}</p>
        `;
        commentsContainer.appendChild(commentElement);
    });
}

fetchComments();