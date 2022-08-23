
var peso;
var altura;
var imc;
var resultado;

function calcular(){
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso/(altura*altura);
   
    if(imc < 17) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + ' <h3><br/> Cuidado voce está muito abaixo do peso. </h3> <br/>' ;
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
        
    }else if( imc > 17 && imc < 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + ' <h3><br/>  voce está abaixo do peso. </h3> <br/>' ;
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
       


    }else if (imc > 18 && imc < 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + ' <h3><br/> Otimo!!, voce está no peso certo. </h3> <br/>' ;
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = ''; 
        return false;
       
    }else if (imc > 25 && imc < 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + ' <h3><br/> Cuidado voce está acima do peso. </h3> <br/>' ;
        document.getElementById('peso').value = '';
        document.getElementById('altura').value = '';
        return false;
    }else{
        return false;
    }
    
}