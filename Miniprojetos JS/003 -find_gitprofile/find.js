const ul = document.querySelector('ul');
let login = document.getElementById('login');
let buscar = document.getElementById('buscar');
let nome = document.getElementById('nome');
let fotografia = document.getElementById('fotografia');
let bio = document.getElementById('bio');
let seguidores = document.getElementById('seguidores');

async function getApiGitHub(){
  const response = await fetch(`https://api.github.com/users/${login.value}`);
  const profile = await response.json();
  return profile;
}


buscar.addEventListener('click', (e) => {
  console.log(login.value)
  getApiGitHub().then(profile => {
      nome.innerHTML = profile.name
      fotografia.src = profile.avatar_url
      bio.innerHTML = profile.bio
      seguidores.innerHTML = profile.followers
  })
})

// fetch(`https://api.github.com/users/${login.value}`)
//   .then(async (response) =>{
//     if(!response.ok){
//       throw new Error(response.status)
//     }
//     var data = await response.json()
//     data.map( item => { 
//       console.log(`${item.id}`);       
//     })
//   }).catch(e => console.log(e))