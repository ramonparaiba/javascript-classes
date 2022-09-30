let nome = document.getElementById('nome')
let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let imc = document.getElementById('imc')

imc.textContent = (parseFloat(peso.textContent)/Math.pow(2, parseFloat(altura.textContent))).toFixed(3)