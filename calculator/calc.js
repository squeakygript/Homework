while (true) {
        let num1 = prompt("Enter the first number:");

        let operation = prompt("Enter the operation (+, -, *, /):");  

        let num2 = prompt("Enter the second number:");

        let result;

            if (operation === "+") {
                result= parseFloat(num1) + parseFloat(num2);
                }
            
                    else if (operation === "-") {
                    result = parseFloat(num1) - parseFloat(num2);      
                    }

                    else if (operation === "*") {
                    result = parseFloat(num1) * parseFloat(num2);    
                    } 

                    else if (operation === "/") {
                    result = parseFloat(num1) / parseFloat(num2);
                    } 
                    
                    else if (isNaN(result)) {
                    alert("Invalid input");
                    
                    }

                    else {
                    alert("Invalid operation");
                    
                    }
                        
    alert("The result is: " + result);
        let continueCalc = confirm("Do you want to perform another calculation? (yes/no):");
                if (!continueCalc) {
                    break;
                }
    }

