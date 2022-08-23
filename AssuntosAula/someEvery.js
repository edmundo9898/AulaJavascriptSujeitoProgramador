
// some EVERY 

// some vai ver se tem algum nome igual ao informado irá devolver true, senão false

let nomes = [
   {nome: 'Edmundo', idade: 18},
   {nome: 'Maria', idade: 25},
   {nome: 'Lima', idade: 19},
];

/* console.log(nomes.some(nome => nome === 'Lima')); */


// every devolve tb um callback, porém satisfaz todos. 

console.log();
if(nomes.every(nome => nome.idade >= 28)){
    console.log('Todos sao maior');
}else{
    console.log('Tem alguem de menor man');
}