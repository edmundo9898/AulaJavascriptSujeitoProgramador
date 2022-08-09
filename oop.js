// Criando objeto 

function Heroi(){

    // this faz referencia ao objeto
    this.nome = "Minos";
    this.funcao = "Tankar";
    this.tipo = "Ad";
    this.lane = "Rotação/side";
    this.upandoAtual = 0;

    this.aumentar = function(){
        console.log( this.nome + ' Força aumentada!!');
    }

    this.upar =  function(upando){
        console.log('Heroi upando....'); 
        this.upandoAtual = this.upandoAtual + upando;

    }

    this.finalizarUp = function(){
        console.log('Parei de upar');
        this.upandoAtual = 0;
    }

             
}

var heroi1 = new Heroi();
heroi1.nome = "Faramis";    

var heroi2 = new Heroi();
heroi2.nome = "Selena";
heroi2.funcao = 'Mago/Explosão';
heroi2.tipo = 'AP';
heroi2.lane = 'Mid';
