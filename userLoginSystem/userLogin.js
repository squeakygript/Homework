const username = "admin";
const password = "SecretPassword";


while (true) {

    let userInput = prompt("Enter your username:");
    let userPass = prompt("Enter your password:");  

        if (userInput === username && userPass === password) {
        alert("Login successful!");
            break; 

    } else {
        alert("Invalid username or password. Please try again.");
    }
}
