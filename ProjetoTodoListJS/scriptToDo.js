// Buscando dentro da div App a UL
var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector('#app input');

var buttonElement = document.querySelector('#app button');
         
//json.parse voltando para string
var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];

function renderTodos() {

    // for of irá pecorrer todos e armarzenar na variavel TODO

    listElement.innerHTML = '';

    for (todo of todos) {
        console.log(todo);
        
        //createelement está criando o elemento li dentro da ul
        var todoElement = document.createElement('li');
        //createTextNode cria um novo texto nó
        var todoText = document.createTextNode(todo);
         
        // <a href="#">Excluir</a>
        var linkElement = document.createElement('a');
        // setAttribute está adicionando href do A 
        linkElement.setAttribute('href', '#');


        // indexof retorna a posicão do  indice escolhido
        var posicao = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deletarTodo('+ posicao +')')
        

        var linkText = document.createTextNode('Excluir');
        
        linkElement.appendChild(linkText);


       // appendChild vai movê-lo de sua posição atual para a nova posição (i.e, não é necessário remover o nó de seu pai atual antes de adicioná-lo a outro nó).
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function adicionarTodo() {
    if (inputElement.value == '') {
        alert('Digite uma tarefa');
        return false;

    } else {
        var todoText = inputElement.value;
        // push está adicionando uma tarefa/item da lista
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
        salvarDados();

    }


}

buttonElement.onclick = adicionarTodo;

function deletarTodo(posicao){
    // Splice remove algo da lista passando a posicao e o item do array.
    todos.splice(posicao, 1);
    renderTodos();
    salvarDados();
}

// irá manter armazenado localmente. mesmo atualizando, irá mostrar na tela

function salvarDados(){
    // JSON so grava chave e valor, salvar em estrutura  stringfy(converter).
    localStorage.setItem('lista_todos', JSON.stringify(todos));
}