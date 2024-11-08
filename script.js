// Hvordan hente inn ting vi skal gjøre noe med

/* .querySelection() */
// Legge det inn i variabler, bokser til å legge ting i

const button = document.querySelector(".showBtn")
let text = document.getElementById("text")
let toggle = document.querySelector('.toggleCont')
let toggleCircle = document.querySelector('.toggleCircle')


toggle.addEventListener("click", function(){
   toggleCircle.classList.toggle('move')
   toggleCircle.classList.toggle('moveBack')
})

button.addEventListener("click", function(){
    
    /*
    console.log("button clicked")
    if(!text.classList.contains("showTextBox")){
    text.classList.remove('hiddenBox')
    text.classList.add('showTextBox')}
    else {
        text.classList.remove('showTextBox')
        text.classList.add('hiddenBox') } */

    text.classList.toggle('showTextBox')
    text.classList.toggle('hiddenBox')
    
    
})



//Datatyper

//Number, String, Boloeon

let age = 21

const name = "Anders"

let isPresent = true

//Arrays, objects

let passengers = ["Ania Kubow", "Kevin Powell", "Simo Edwin", "Thomas Cargill"]

let flightInfo = {
    isDelayed: true,
    departure:{
     time: "09.15",
     airport: "Flesland ",
     city: "Bergen" },

     arrival:{
        time: "06.30",
        airport: "JFK",
        city: "New York"
     }

}

//Console.log

//Hvordan skrive en funksjon

// Argumenter vs parametre

/*
function add(a, b) { return a + b; } */

//Scope

//Legge innhold til en text

//Simple calculator

// classList.add

//classList.toggle

//eventListener
