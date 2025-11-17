let digitz = prompt("run dem digits fool");
let unitz = prompt("and are you a C word or a F word?");

while (true){
    if (unitz === "C" || unitz === "c") {
        let fehrYo = (digitz * 9/5) + 32 ;
        alert("Yo so dem digitz U gave me " + digitz +  " is bout "+ fehrYo + " in F wordz");
        break;
    }   
        else if (unitz === "F" || unitz === "f") {
            let celzius = (digitz- 32 ) * 5/9 ;
            alert("Yo so dem digitz U gave me " + digitz + " is bout " + celzius + " in C wordz");
            break;
    }
        else {
            unitz = prompt("Bruh U messed up, one moe time hoe, U a C or a F?");
    }
}