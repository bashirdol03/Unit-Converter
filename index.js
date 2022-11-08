/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-unit")
const btnEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-p")
const volumeEl = document.getElementById("volume-p")
const massEl = document.getElementById("mass-p")



btnEl.addEventListener("click", function() {
    console.log(inputEl.value)
    convertUnits(inputEl.value)
})


function convertUnits(num){
    
        if (num >= 1){
            let meterToFeet = num * 3.281
            let litreToGallon = num * 0.264
            let kgToPound = num * 2.204
            
            let feetToMeter = num / 3.281 
            let gallonToLitre = num / 0.264
            let poundToKg = num / 2.204
            
            let lengthP = ` ${num} meters = ${meterToFeet.toFixed(3)} feet | ${num} feet = ${feetToMeter.toFixed(3)} meters `
            let volumeP = ` ${num} litres = ${litreToGallon.toFixed(3)} gallons | ${num} gallons = ${gallonToLitre.toFixed(3)} litres `
            let massP = ` ${num} kilos = ${kgToPound.toFixed(3)} pounds | ${num} pounds = ${poundToKg.toFixed(3)} kilos `
            
            lengthEl.innerHTML = lengthP
            volumeEl.innerHTML = volumeP
            massEl.innerHTML = massP
              
        }
        else{
            
            lengthEl.innerHTML = "input a value above 0"
            volumeEl.innerHTML = "input a value above 0"
            massEl.innerHTML = "input a value above 0"
        }
    
}

