function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '241421'

    }
    return novosDados;


}

console.log(cadastroPessoa({nome: 'edmundo', sobrenome: 'roberto', anoInicio: 2045}));