let login = document.getElementById('login')
let buscar = document.getElementById('buscar')
let nome = document.getElementById('nome')
let bio = document.getElementById('bio')
let seguidores = document.getElementById('seguidores')
let seguindo = document.getElementById('seguindo')

async function GetDados(){
  const response = await fetch(`https://api.github.com/users/${login.value}`)
  const perfil = response.json()
  return perfil
}

buscar.addEventListener('click', (e)=>{
    GetDados().then(perfil =>{
      nome.innerHTML = perfil.name
      bio.innerHTML = perfil.bio
      seguidores.innerHTML = perfil.followers
      seguindo.innerHTML = perfil.following      
    })    
})