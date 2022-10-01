const decrem = document.getElementById('decrementa')
const reseta = document.getElementById('reseta')
const incrementa = document.getElementById('incrementa')
let contador = document.getElementById('contador')
let contInt = parseInt(contador.innerHTML)

decrem.addEventListener('click', () => {
  contInt--
  contador.innerHTML = contInt
  colorCounter()
  
})
reseta.addEventListener('click', () => {
  contInt = 0
  contador.innerHTML = 0
  contador.style.color = "#f5f5f5";
  colorCounter()  
})
incrementa.addEventListener('click', () => {
  contInt++
  contador.innerHTML = contInt
  contador.style.color = "#05c46b";
  colorCounter()
})

function colorCounter(){
  if(contInt < 0)
  contador.style.color = "red";
  else if(contInt == 0)
    contador.style.color = "#f5f5f5";
    else
      contador.style.color = "#3c40c6";
}