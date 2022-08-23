
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);

    }
}

// listatarefa está herdando de list

class ListaTarefas extends List{
    constructor(){
        super();
        this.nome = 'Edmundo';
    }

    mostrarNome(){
        console.log(this.nome);
    }
   
};

const minhasTarefas = new ListaTarefas();


document.getElementById('novo').onclick = function(){
     minhasTarefas.add('Oi manoooooo');
}

minhasTarefas.mostrarNome();