let inserir = document.getElementById("inserir")
const tarefa = document.getElementById("tarefa")
const alerta = document.getElementById("alerta")
const ul = document.getElementById("ul")


inserir.addEventListener("click", ()=>{
  if(tarefa.value ==""){
    alerta.innerHTML = "A tarefa não pode ser vazia"
  }else{
    const li = document.createElement("li")
    const textLi = document.createTextNode(tarefa.value)
    li.appendChild(textLi)
    ul.appendChild(li)
    tarefa.value =""
    alerta.innerHTML = ""
  }
  
})
