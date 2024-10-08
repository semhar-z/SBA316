    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginMessage = document.getElementById("loginMessage");
    
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const logoutButton = document.getElementById("logoutButton");
    
    // Sample user credentials (in a real app, you would check against a database)
    const validUsername = "user";
    const validPassword = "password";

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        login();
    });

    function login() {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Simple validation of credentials
        if (username === validUsername && password === validPassword) {
            loginMessage.textContent = "Login successful!";
            document.getElementById("loginDiv").style.display = "none";
            document.getElementById("appDiv").style.display = "block";
        } else {
            loginMessage.textContent = "Invalid username or password.";
        }
    }

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission
        addTask(taskInput.value);
        taskInput.value = ""; // Clear input field
    });