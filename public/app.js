document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    //network detection

    // Existing code in app.js...

function updateNetworkStatus() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (connection) {
        console.log('Connection Type: ' + connection.effectiveType);

        connection.addEventListener('change', () => {
            console.log('Network connection type changed to: ' + connection.effectiveType);
            // You can add code here to adjust your website's behavior
        });
    } else {
        console.log('Network Information API not supported');
    }
}

function loadImages() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
        if (connection && connection.effectiveType.includes('2g')) {
            // Load low-resolution images for slow connections
            img.src = img.dataset.lowRes;
        } else {
            // Load high-resolution images for faster connections
            img.src = img.dataset.highRes;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateNetworkStatus();
    loadImages();
});

// Rest of your app.js code...

//end network detection
    
    // Retrieve input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Sample user data
    const users = [
        { username: 'student1', password: 'password123', name: 'John Doe', gender: 'Male' },
        { username: 'student2', password: 'password456', name: 'Jane Smith', gender: 'Female' },
        { username: 'victory', password: 'victory12345', name: 'Victory', gender: 'Male'}
    ];

    // Validate user credentials
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        // Store user data in session storage
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('name', user.name);
        sessionStorage.setItem('gender', user.gender);

        // Redirect to quiz page
        window.location.href = 'quiz.html';
    } else {
        // Show error message
        document.getElementById('login-error').textContent = 'Invalid username or password';
    }
});

//Update network//

function updateNetworkStatus() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (connection) {
        console.log('Effective connection type: ' + connection.effectiveType);

        connection.addEventListener('change', () => {
            console.log('Network connection type changed to: ' + connection.effectiveType);
            // You can add code here to adjust your website's behavior
        });
    } else {
        console.log('Network Information API not supported');
    }
}

updateNetworkStatus();


function loadImages() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
        if (connection && connection.effectiveType.includes('2g')) {
            // Load low-resolution images for slow connections
            img.src = img.dataset.lowRes;
        } else {
            // Load high-resolution images for faster connections
            img.src = img.dataset.highRes;
        }
    });
}

document.addEventListener('DOMContentLoaded', loadImages);
