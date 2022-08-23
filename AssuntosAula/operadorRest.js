/* function minhaList(...numeros){
    console.log(numeros);
}

minhaList(1, 2, 3, 4, 5, 6, 7); */

function cadastrar(usuarios, ...novosUsuarios){
    let totalusuarios = [
        ...usuarios,
        ...novosUsuarios,

    ];
    return console.log(totalusuarios);

}

let usuarios = ['Edmundo', 'Roberto'];

let novosUsuarios = cadastrar(usuarios, 'Lima', 'Araujo');