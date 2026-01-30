"use strict";

let input = prompt("Enter your name: ");

const heading = document.createElement("h1");
heading.setAttribute("class", "heading");


while (input === "" || !isNaN(input)) {

    if (input === null) {
        alert("You have clicked cancel button!");
        heading.innerText = "Update the page to enter Your name again!";

        document.body.append(heading);
        break;
    }

    alert("Enter your name: ");

    input = prompt("Enter your name: ");


}

console.log(input)

heading.innerText = `Happy Birthday: ${input.charAt(0).toUpperCase() + input.slice(1)} !!!`;

document.body.append(heading);