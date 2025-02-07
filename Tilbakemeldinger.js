// Toggle Dark Mode
if (sessionStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('.input').checked = true;
    document.querySelector('.Toggle p').textContent = 'Light Mode:-'; // Set the text to 'Light Mode' when dark mode is enabled
} else {
    document.querySelector('.Toggle p').textContent = 'Dark Mode:-'; // Set the default text to 'Dark Mode'
}

document.querySelector('.input').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        sessionStorage.setItem('darkMode', 'enabled');
        document.querySelector('.Toggle p').textContent = 'Light Mode:-'; // Update text to 'Light Mode'
    } else {
        document.body.classList.remove('dark-mode');
        sessionStorage.setItem('darkMode', 'disabled');
        document.querySelector('.Toggle p').textContent = 'Dark Mode:-'; // Update text to 'Dark Mode'
    }
});

document.addEventListener("DOMContentLoaded", loadComments);
document.addEventListener("DOMContentLoaded", loadComments);

//OM NETTSIDEN ENDRES MÅ DEN KODEN ENDRES OGSÅ FRA LOCAL STORAGE!!!
function addComment(event) {
    event.preventDefault(); // Prevent form from refreshing

    const nameInput = document.getElementById("nameInput");
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("comment-list");

    if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
        // Create comment object
        const comment = {
            id: Date.now(), // Unique ID
            name: nameInput.value,
            text: commentInput.value,
        };

        // Save to localStorage
        saveComment(comment);

        // Display the comment
        displayComment(comment);

        // Clear input fields
        nameInput.value = "";
        commentInput.value = "";
    }
}

function displayComment(comment) {
    const commentList = document.getElementById("comment-list");

    // Create comment container
    const commentItem = document.createElement("div");
    commentItem.classList.add("comment-item");
    commentItem.setAttribute("data-id", comment.id);

    // Create name element
    const nameElement = document.createElement("strong");
    nameElement.textContent = comment.name + ": ";

    // Create text element
    const commentText = document.createElement("span");
    commentText.textContent = comment.text;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        deleteComment(comment.id);
    };

    // Append elements
    commentItem.appendChild(nameElement);
    commentItem.appendChild(commentText);
    commentItem.appendChild(deleteButton);
    commentList.appendChild(commentItem);
}

function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(displayComment);
}

function deleteComment(id) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments = comments.filter(comment => comment.id !== id);
    localStorage.setItem("comments", JSON.stringify(comments));

    // Remove from UI
    const commentItem = document.querySelector(`.comment-item[data-id="${id}"]`);
    if (commentItem) {
        commentItem.remove();
    }
}
