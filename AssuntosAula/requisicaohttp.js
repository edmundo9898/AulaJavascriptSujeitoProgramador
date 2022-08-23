// https://sujeitoprogramador.com/rn-api/?api=posts

var listElement = document.querySelector('#app');

var posts = [];

function nutriApp(){
    
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then(response => response.json())
    .then(json => {
        posts = json; 
        console.log(posts)

        for(post of posts){
            var titleElement = document.createElement('li');
            var title = document.createTextNode(post.titulo);

            var imgElement = document.createElement('img');
            imgElement.src = post.capa;
            imgElement.style = 'width: 50px; height: 50px';

            var subTitulo = document.createTextNode(post.subtitulo);

            var categoria = document.createTextNode(post.categoria);

            titleElement.appendChild(title);
            listElement.appendChild(imgElement);
            listElement.appendChild(titleElement);
            listElement.appendChild(subTitulo);
            listElement.appendChild(categoria);
            
        }
    })

}

nutriApp();