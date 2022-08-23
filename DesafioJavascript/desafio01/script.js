

// 1 criando uma lista e exibindo os produtos do array.
const lista = ['Computador', 'Telefone', 'Mouse', 'Teclado'];

console.log('Produtos liberados: ' + lista);

// 2  mostrando a quantidade de produtos no array
console.log('Quantidade de protuos: ' + lista.length);

// 3 retirar um prouto e mostrar a nova lista com o produto removido
console.log('tirando Produto mouse: ' + lista.filter(p => p !== 'Mouse'));


// 4 verificando se existe o produto na lista
const findProdutos = lista.find(p => p === 'Computador')

if (findProdutos) {
    console.log(`o produto ${findProdutos} está na lista`)
} else {
    console.log('Não está na lista');
}

// 5 removendo o segundo produto da lista

 lista.splice(1, 2);
 console.log('Meus produtos ' + lista);


// -------------------------

// Desafio02

//Ordene essa lista do menor para o maior 

const listas = [1,3,5,7,0,9];

listas.sort();
console.log(listas);

// removendo primeiro item da lista
console.log('Removendo primeiro item da lista : ' + listas.shift());

// invertendo a ordem da lista
console.log('invertendo a ordem da lista : ' + listas.reverse());

// separa a data de hoje em variaveis
let hoje = '16/08/2022';
const [dia, mes, ano] = hoje.split('/');

console.log('dia ' + dia);
console.log('mes ' + mes);
console.log('ano ' + ano);
