let addBtn = document.getElementById("add")
let subBtn = document.getElementById("sub")
let mulBtn = document.getElementById("multiply")
let divBtn = document.getElementById("divide")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let result = document.getElementById("result")

addBtn.addEventListener("click", function(){
    let inOne = parseInt(input1.value)
    let inTwo = parseInt(input2.value)
    result.innerText = `${inOne + inTwo}`
})

subBtn.addEventListener("click", function(){
    let inOne = parseInt(input1.value)
    let inTwo = parseInt(input2.value)
    result.innerText = `${inOne - inTwo}`
})

mulBtn.addEventListener("click", function(){
    let inOne = parseInt(input1.value)
    let inTwo = parseInt(input2.value)
    result.innerText = `${inOne * inTwo}`
})

divBtn.addEventListener("click", function(){
    let inOne = parseFloat(input1.value)
    let inTwo = parseFloat(input2.value)
    result.innerText = `${inOne / inTwo}`
})