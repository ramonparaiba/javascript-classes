const decrem = document.getElementById('decrementa')
const reseta = document.getElementById('reseta')
const incrementa = document.getElementById('incrementa')
let contador = document.getElementById('contador')
let contInt = parseInt(contador.innerHTML)

decrem.addEventListener('click', () => {
  contInt--
  contador.innerHTML = contInt
})
reseta.addEventListener('click', () => {
  contInt = 0
  contador.innerHTML = 0
})
incrementa.addEventListener('click', () => {
  contInt++
  contador.innerHTML = contInt
})