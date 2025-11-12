let userInput = prompt('keep inputting numbers and input "done" when done, its pretty simple i dont know why you need this');
let num = []
while (userInput != "done") 
{   num.push(parseInt(userInput));
    userInput = prompt('were not done yet according to you so keep going buddy'); 
    
}  
let soFar = num[0];
for (let i = 0; i < num.length; i++) {
    if (num[i] > soFar) {   
        soFar = num[i];
    }
}
alert("Congrads the biggest cock here is" + ' ' + soFar + ' ' + "inches long");
 