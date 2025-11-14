// console.log("I am running...")

// getting an element from HTML
// getElementById, getElementByClassName, getElementByTagName
// querySelector, querySelectorAll

// let h1Element = document.getElementsByTagName("h1")
// let h2Element = document.getElementById("heading")
// let classElement = document.getElementsByClassName("grouping")
// let qSelector = document.querySelector("h1")
// let qSelectorAll = document.querySelectorAll("h1")
// console.log(qSelectorAll)

// getting the value of an element
// let firstH1 = document.querySelector("h1")
// innerText
// console.log(firstH1.innerText)

// let gettingH1 = document.getElementById("get")
// console.log(gettingH1)

// innerHTML
// console.log(gettingH1.innerText)



// setting the value of an element
// let h1 = document.getElementById("h1")
// h1.innerText = "Understading DOM"
// h1.innerText = "Hello from Shoolini"
// h1Text = "Understanding DOM"

let h1 = document.getElementById("h1")
let button = document.getElementById("btn")

button.addEventListener("click", function(){
    h1.innerText = "Button is clicked, welcome to shoolini"
})