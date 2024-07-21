// Define an asynchronous function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Select the data container element

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is okay
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user list
        const userList = document.createElement('ul');

        // Loop through the users array and create <li> elements for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors and display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error); // Log the error to the console
    }
}

// Add an event listener to invoke fetchUserData when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
