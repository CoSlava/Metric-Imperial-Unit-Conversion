let input = document.getElementById("input")
input.value = 0

let btn = document.getElementById("btn")

let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

btn.addEventListener("click", function() {
    feet = input.value * 3.281
    meters = input.value * 0.305
    length.textContent = `${input.value} meters ≈ ${feet.toFixed(2)} feet | ${input.value} feet ≈ ${meters.toFixed(2)} meters`
})

btn.addEventListener("click", function() {
    gallons = input.value * 0.264
    liters = input.value * 3.785
    volume.textContent = `${input.value} liters ≈ ${gallons.toFixed(2)} gallons | ${input.value} gallons ≈ ${liters.toFixed(2)} liters`
})

btn.addEventListener("click", function() {
    pounds = input.value * 2.205
    kilograms = input.value * 0.454
    mass.textContent = `${input.value} kilograms ≈ ${pounds.toFixed(2)} pounds | ${input.value} pounds ≈ ${kilograms.toFixed(2)} kilograms`
})