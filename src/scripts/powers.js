console.log("hey little buddy! you're kicking ass!")

// activate flight button 
flightEl = document.getElementById("flight")
// console.log(flightEl.classList);

const flightHandlerFunction = (class0, class1) => {
    flightEl.classList.toggle(class0);
    flightEl.classList.toggle(class1);
}

// event listener that changes class for flight section from "power disabled" to "power enabled" on click
document.querySelector("#activate-flight").addEventListener("click", function() {
    flightHandlerFunction("disabled", "enabled")
})


// activate mind reading button
const mindReadingEl = document.getElementById("mindreading")

const mindReadingFunction = (class0, class1) => {
    mindReadingEl.classList.toggle(class0);
    mindReadingEl.classList.toggle(class1);
}

document.querySelector("#activate-mindreading").addEventListener("click", function() {
    mindReadingFunction("disabled", "enabled")
})


// activate xray vision button 
const xrayVisionEl = document.getElementById("xray")

const xrayVisionFunction = (class0, class1) => {
    xrayVisionEl.classList.toggle(class0);
    xrayVisionEl.classList.toggle(class1);
}

document.querySelector("#activate-xray").addEventListener("click", function () {
    xrayVisionFunction("disabled", "enabled")
})

// activate all powers button
const activatePowersButton = document.querySelector("#activate-all")

const allPowers = document.querySelectorAll(".power")
// console.log(allPowers) returns a node list
// must iterate through all sections with loop

const allPowersFunction = (class0, class1) => {
    allPowers.classList.toggle(class0);
    allPowers.classList.toggle(class1);
} 

// for (let i=0; i < allPowers.length; i++) {
//     allPowers[i].addEventListener("click", function() {
//         allPowersFunction("diabled", "enabled")
//     })
// }

let i = 0

allPowers.forEach((power) => {
    allPowers[i].addEventListener("click", () => {
        allPowersFunction("disabled", "enabled");
    })
})