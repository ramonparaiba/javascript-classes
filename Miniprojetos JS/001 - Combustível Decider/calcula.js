let gasolina = document.getElementById('gasolina')
    let etanol = document.getElementById("etanol")
    let resultado = document.getElementById("Resultado")
    let botao = document.getElementById("botao")
    let alerta = document.getElementById("alerta")
    
    function calcular(){      
        let gas = parseFloat(gasolina.value)
        let etan = parseFloat(etanol.value)
        let calc = etan/gas
        if(isNaN(gas) || isNaN(etan))
          alerta.textContent = "Você deve inserir os dois valores!"
        else{
          alerta.textContent = ""
          if (calc >= 0.7)
            resultado.textContent = 'Abasteça com Gasolina'
          else  resultado.textContent = 'Abasteça com Etanol'  
        }   
      
    }
    
    botao.addEventListener('click', calcular)