let iconPlus = document.querySelector(".icon-plus-1")
let iconMinus = document.querySelector(".icon-minus-1")

let iconPlus2 = document.querySelector(".icon-plus-2")
let iconMinus2 = document.querySelector(".icon-minus-2")

let iconPlus3 = document.querySelector(".icon-plus-3")
let iconMinus3 = document.querySelector(".icon-minus-3")

let iconPlus4 = document.querySelector(".icon-plus-4")
let iconMinus4 = document.querySelector(".icon-minus-4")


let textShow4 = document.querySelector(".text-show-4")
let textShow3 = document.querySelector(".text-show-3")
let textShow2 = document.querySelector(".text-show-2")
let textShow1 = document.querySelector(".text-show-1")




iconPlus.addEventListener("click", function (){

    textShow1.style.display = "block"
    iconMinus.style.display = "block"
    iconPlus.style.display = "none"

})
iconMinus.addEventListener("click", function(){

    textShow1.style.display = "none"
    iconMinus.style.display = "none"
    iconPlus.style.display = "block"

})

// -----------------------------------------

iconPlus2.addEventListener("click", function (){

    textShow2.style.display = "block"
    iconMinus2.style.display = "block"
    iconPlus2.style.display = "none"

})
iconMinus2.addEventListener("click", function(){

    textShow2.style.display = "none"
    iconMinus2.style.display = "none"
    iconPlus2.style.display = "block"

})

// -------------------------------------------

iconPlus3.addEventListener("click", function (){

    textShow3.style.display = "block"
    iconMinus3.style.display = "block"
    iconPlus3.style.display = "none"

})
iconMinus3.addEventListener("click", function(){

    textShow3.style.display = "none"
    iconMinus3.style.display = "none"
    iconPlus3.style.display = "block"

})

// ------------------------------------------------

iconPlus4.addEventListener("click", function (){

    textShow4.style.display = "block"
    iconMinus4.style.display = "block"
    iconPlus4.style.display = "none"

})
iconMinus4.addEventListener("click", function(){

    textShow4.style.display = "none"
    iconMinus4.style.display = "none"
    iconPlus4.style.display = "block"

})
