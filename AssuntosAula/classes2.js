class Pessoa{
    constructor(){
        this.nome = '';
        this.sobrenome = '';
    }

    nomePessoa(primeironome){
        this.nome = primeironome;
        console.log('Primeiro nome e: ' + primeironome);

    }

    segundoNome(segundonome){
        this.sobrenome = segundonome;
        console.log('Sobrenome e : ' + segundonome);
    }

    nomeCompleto(){
        let nomeCompletoo = this.nome + ' ' + this.sobrenome;
        console.log(nomeCompletoo);
    }


    
};

let pessoa1 = new Pessoa();

pessoa1.nomePessoa('Edmundo');
pessoa1.segundoNome('Roberto');
pessoa1.nomeCompleto();
