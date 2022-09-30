let iname = document.getElementById('iname')
let ipeso = document.getElementById('ipeso')
let ialtura = document.getElementById('ialtura')
const insert = document.getElementById('insert')
const tbody = document.getElementById('rowpatient')

insert.addEventListener('click', () =>{
  if(iname.value != "" && ipeso.value != "" && ialtura.value != ""){
    const tr = document.createElement('tr')
    //Nome
    const tdnome = document.createElement('td')
    const txtnome = document.createTextNode(iname.value)
    tdnome.appendChild(txtnome)
    tr.appendChild(tdnome)
    //Peso
    const tdpeso = document.createElement('td')
    const txtpeso = document.createTextNode(ipeso.value)
    tdpeso.appendChild(txtpeso)
    tr.appendChild(tdpeso)
    //Altura
    const tdaltura = document.createElement('td')
    const txtaltura = document.createTextNode(ialtura.value)
    tdaltura.appendChild(txtaltura)
    tr.appendChild(tdaltura)

    //imc
    const tdimc = document.createElement('td')
    const txtimc = document.createTextNode(calculaIMC(ipeso.value, ialtura.value))
    tdimc.appendChild(txtimc)
    tr.appendChild(tdimc)

    tbody.appendChild(tr)
    iname.value = ipeso.value = ialtura.value = ""
  } 
  
})

function calculaIMC(peso, altura){
    return (parseFloat(peso)/Math.pow(2, parseFloat(altura))).toFixed(2)
}

// imc.textContent = (parseFloat(peso.textContent)/Math.pow(2, parseFloat(altura.textContent))).toFixed(3)




{/* <tr>
  <td id="nome">José Adamastor</th>
  <td id="peso">83</td>
  <td id="altura">1.65</td>
  <td id="imc">imc</td>
</tr> */}