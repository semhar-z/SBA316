    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginMessage = document.getElementById("loginMessage");
    
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const logoutButton = document.getElementById("logoutButton");

    
    // querySelector to use css selctor to select DOM elements I used this for h1 tags
    //  const headers = document.qearySelector("h1");
    //  console.log(headers);


    
    // my user credentials for this webpage
    const validUsername = "user";
    const validPassword = "password";

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        login();
    });

  
usernameInput.addEventListener('input', () => {
    if (usernameInput.value.trim() === '') {
        loginMessage.textContent = "Username cannot be empty.";
    } else {
        loginMessage.textContent = ""; // Clear the message
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.trim() === '') {
        loginMessage.textContent = "Password cannot be empty.";
    } else {
        loginMessage.textContent = ""; // Clear the message
    }
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


    function addTask(task) {
        const li = document.createElement("li");
        li.textContent = task;

        // Add event listener to remove task on click
        li.addEventListener("click", () => {
            li.parentNode.removeChild(li); // Remove the task from the list
            alert("Task removed: " + task);
            // li.remove(); // Remove the task from the list
        });

        taskList.appendChild(li); // Append the new task to the list
        alert("Task added: " + task); // Alert on adding a new task


        // Example of using nextElementSibling to show interaction
    if (li.nextElementSibling) {
        alert("The next task is: " + li.nextElementSibling.textContent);
    } else {
        alert("This is the last task.");
    }
    }

    logoutButton.addEventListener("click", () => {
        logout();
    });

    function logout() {
        alert("You have logged out."); 
        document.getElementById("appDiv").style.display = "none";
        document.getElementById("loginDiv").style.display = "block";
        loginMessage.textContent = ""; // Clear login message
        usernameInput.value = ""; // Clear username
        passwordInput.value = ""; // Clear password
        taskList.innerHTML = ""; // Clear tasks
    };

   // Creating Templated Content with DocumentFragment and cloneNode
    const content = document.getElementById('content');
    const template = document.getElementById('itemTemplate');
    const button = document.getElementById('addItem');

    console.log(button); // Should not be null
    console.log(content); // Should not be null
    
    button.addEventListener("click", function() {
      // Create a DocumentFragment to hold the cloned elements
      const fragment = document.createDocumentFragment();
      
      // Clone the template content
      const newItem = template.content.cloneNode(true);

      // Set values for the cloned item
      newItem.querySelector('.title').textContent = "New Item";
      newItem.querySelector('.description').textContent = "This is a description for the new item.";

      // Append the cloned item to the fragment
      fragment.appendChild(newItem);

      // Append the fragment to the main content
      content.appendChild(fragment);
    });


       // Get the logout and add item and login buttons
const buttons = document.querySelectorAll('#logoutButton, #addItem, #login, #addTask');

// Iterate over the buttons and add event listeners
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        e.target.style.backgroundColor = 'blue'; // Change color on click
    });
}

// Change background color of input fields on click by iteration
  const inputs = document.getElementsByClassName("input");
   for (let i = 0; i < inputs.length; i++) {
     inputs[i].onclick = function(e) {
            e.target.style.backgroundColor = 'lightblue';
          };
    }
        