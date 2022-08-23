
//https://api.github.com/repos/

var div = document.querySelector('#repos');
var listElement = document.querySelector('#repos ul');

var repositorios = [];


 buscaRepos = async () => {
    const input = document.querySelector('#input');

    if (input.value === '') {
        alert('Digite alguma coisa');
        return;
    }


    const hasRepo = repositorios.find(repo => repo.full_name === input.value);
   
    if(hasRepo){
        alert('Repositorio já existe na lista');
        return
    }


    const response = await fetch(`https://api.github.com/repos/${input.value}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            repositorios.push(json);
            input.value = '';

            renderRepos();
        })
}

function renderRepos() {

    listElement.innerHTML = '';
    for (repo of repositorios) {
         
        let repoElement = document.createElement('li');
        repoElement.setAttribute("style", 
        "text-decoration: none; list-style: none;");

        let avatarElement = document.createElement('img');
        avatarElement.src = repo.owner.avatar_url;
        avatarElement.setAttribute("style",
                "width: 24px; height: 24px; border-radius: 12px;");

        
        let linkElement = document.createElement('button');
        linkElement.textContent = 'Excluir';

        let posicao = repositorios.indexOf(repo);
        
        linkElement.setAttribute('onclick', 'deletarRepo('+ posicao +')');

        let name = document.createTextNode(repo.full_name);

        repoElement.appendChild(avatarElement);
        repoElement.appendChild(name);
        repoElement.appendChild(linkElement);
        listElement.appendChild(repoElement);
    }
}


function deletarRepo(posicao){
    repositorios.splice(posicao, 1);
    renderRepos();
}
