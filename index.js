    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginMessage = document.getElementById("loginMessage");
    
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const logoutButton = document.getElementById("logoutButton");

    // const setAside = document.getElementById("setAside");
    // const list = documet.qearySelector("#taskList");
  
    
    // my user credentials for this webpage
    const validUsername = "user";
    const validPassword = "password";

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        login();
    });

// ---------------------------------------------------------------------------
    // setAside.addEventListener("drug", (event) => {
    //     event.preventDefault();
    //     setAside();
    // });


    // function setAside(){

    //     const li = document.document.querySelctor("#li");
    //     li.textContent = task;

    //     // Add event listener to remove task on click
    //     li.addEventListener("drug", () => {
    //         li.remove(); // Remove the task from the list
    //     });

    //     list.appendChild(li); // Append the new task to the list

    // }

// -----------------------------------------------------------------------------



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


    function addTask(task) {
        const li = document.createElement("li");
        li.textContent = task;

        // Add event listener to remove task on click
        li.addEventListener("click", () => {
            li.remove(); // Remove the task from the list
        });

        taskList.appendChild(li); // Append the new task to the list
    }

    logoutButton.addEventListener("click", () => {
        logout();
    });

    function logout() {
        document.getElementById("appDiv").style.display = "none";
        document.getElementById("loginDiv").style.display = "block";
        loginMessage.textContent = ""; // Clear login message
        usernameInput.value = ""; // Clear username
        passwordInput.value = ""; // Clear password
        taskList.innerHTML = ""; // Clear tasks
    };