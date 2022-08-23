const lista = [1, 2, 3, 4, 5, 6];

// mape percorrer todos os items e retornar alguma coisa
// index é a posição em que esse cara está passando
const novaLista = lista.map(function(item, index){
    return item + index; 
});

console.log(novaLista);

// reduce consegue somar todos os itens da lista mais facil
const soma = lista.reduce(function(total, proximo) {
    return total + proximo;
});
// total vai ser somando com o proximo indice
console.log(soma)


// find vai achar o item que vc escolheu 

const find = lista.find(function(item) {
   return item === 6;
});
console.log(find);


