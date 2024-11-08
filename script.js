// Hvordan hente inn ting vi skal gjøre noe med

/* .querySelection() */
// Legge det inn i variabler, bokser til å legge ting i

const button = document.querySelector(".showBtn")

button.addEventListener("click", function(){
    console.log("button clicked")
    
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
