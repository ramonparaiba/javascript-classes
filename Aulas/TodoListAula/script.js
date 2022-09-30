let newtarefa = document.getElementById('newtarefa');
let botao = document.getElementById('botao');
let ul = document.getElementById('lista');
let mensagem = document.getElementById('mensagem');


botao.addEventListener('click', () => {
    if(isNaN(newtarefa.value)){
      let li = document.createElement('li');
      let liText = document.createTextNode(newtarefa.value)
      li.appendChild(liText);
      ul.appendChild(li) 
      mensagem.innerHTML = ""
    }else(
      mensagem.innerHTML = "  Tarefa em branco, não poooode  "
    )
    newtarefa.value = ""
})