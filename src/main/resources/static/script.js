const apiUrl = 'http://localhost:8080/users';

// Function to add a new user (POST)
function addUser() {
    const name = document.getElementById('postUserName').value;
    const email = document.getElementById('postUserEmail').value;

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to add user: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('output').innerHTML = `<p>User added successfully: ID ${data.id}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('output').innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

// Function to fetch all users (GET ALL)
function getAllUsers() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch users: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const output = document.getElementById('output');

            if (!Array.isArray(data) || data.length === 0) {
                output.innerHTML = "<p>No users found.</p>";
                return;
            }

            let html = `<h2>All Users:</h2>
                        <table border="1" cellspacing="0" cellpadding="10">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>`;

            data.forEach(user => {
                html += `<tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                         </tr>`;
            });

            html += `</tbody></table>`;
            output.innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('output').innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

// Function to fetch a user by ID (GET by ID)
function getUser() {
    const userId = document.getElementById('userId').value;

    fetch(`${apiUrl}/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`User not found: ${response.status}`);
            }
            return response.json();
        })
        .then(user => {
            document.getElementById('output').innerHTML = `
                <h2>User Details:</h2>
                <p>ID: ${user.id}</p>
                <p>Name: ${user.name}</p>
                <p>Email: ${user.email}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('output').innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

// Function to update a user (PUT)
function updateUser() {
    const id = document.getElementById('putUserId').value;
    const name = document.getElementById('putUserName').value;
    const email = document.getElementById('putUserEmail').value;

    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to update user: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('output').innerHTML = `<p>User updated successfully: ID ${data.id}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('output').innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

// Function to delete a user (DELETE)
function deleteUser() {
    const userId = document.getElementById('deleteUserId').value;

    fetch(`${apiUrl}/${userId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('output').innerHTML = `<p>User deleted successfully.</p>`;
        } else {
            throw new Error(`Failed to delete user: ${response.status}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('output').innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
