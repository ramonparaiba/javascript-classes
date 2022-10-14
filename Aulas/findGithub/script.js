let ul = document.querySelector('ul')
let buscar = document.querySelector('#buscar')
let login = document.querySelector('#login')
let nome = document.getElementById('nome')
let empresa = document.getElementById('empresa')

async function getDados(){
  const response = await fetch(`https://api.github.com/users/${login.value}`)
  const profile = await response.json()
  return profile
}

buscar.addEventListener('click', (e)=>{
  getDados().then(profile=>{
    nome.innerHTML = profile.name
    empresa.innerHTML = profile.company
  })
} )