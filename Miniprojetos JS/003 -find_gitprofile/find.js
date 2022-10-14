const ul = document.querySelector('ul');
let login = document.getElementById('login');
let buscar = document.getElementById('buscar');
let nome = document.getElementById('nome');
let fotografia = document.getElementById('fotografia');
let bio = document.getElementById('bio');
let seguidores = document.getElementById('seguidores');
let reposlist = document.getElementById('reposlist');
let qtdrepos = document.getElementById('qtdrepos');

async function getMetaData(){
  const response = await fetch(`https://api.github.com/users/${login.value}`);
  const profile = await response.json();

  return profile
}
async function getRepositories(){
  const response = await fetch(`https://api.github.com/users/${login.value}/repos`)
  const repositories = await response.json();
  return repositories
}


buscar.addEventListener('click', (e) => {
  getMetaData().then(profile => {
      nome.innerHTML = profile.name
      fotografia.src = profile.avatar_url
      bio.innerHTML = profile.bio
      seguidores.innerHTML = profile.followers
      qtdrepos.innerHTML = profile.public_repos     
  })
  getRepositories().then(repositories => {
    reposlist.innerHTML = repositories.map((item)=>{
      console.log(item.name)
      return `<li>`+item.name+`</li>`+'<hr>'
    }).join("")
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