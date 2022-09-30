let inserir = document.getElementById("inserir")
const tarefa = document.getElementById("tarefa")
const ul = document.getElementById("ul")


inserir.addEventListener("click", ()=>{
  const li = document.createElement("li")
  const textLi = document.createTextNode(tarefa.value)
  li.appendChild(textLi)
  ul.appendChild(li)
  tarefa.value =""
  
})
