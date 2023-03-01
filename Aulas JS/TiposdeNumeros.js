// Tipos de Numeros
    const meuNumero = 3;

    const primeiroNumero = 1;
    const segundoNumero = 2;

    const operacaoMatematica = primeiroNumero + segundoNumero;

    console.log(operacaoMatematica)

    var a = 10
    var b = 0
    console.log(a/b) // Infinity

    var a = 0
    var b = 0
    console.log(a/b) // NaN
// End

// Formartação de Numeros 
    ganhoPorHora1(3000,176); 

    function ganhoPorHora1(salario, horasTrabalhadasNoMes) {

        const salarioHora = (salario / horasTrabalhadasNoMes); 
    
        return console.log(Math.round(salarioHora));
    
    }

    ganhoPorHora2(3000,176); 

    function ganhoPorHora2(salario, horasTrabalhadasNoMes) {

        const salarioHora = (salario / horasTrabalhadasNoMes); 
    
        const total = salarioHora.toFixed(2);
    
        return console.log(total);
    
    };

    ganhoPorHora3(3000,176); 

    function ganhoPorHora3(salario, horasTrabalhadasNoMes) {

        const salarioHora = (salario / horasTrabalhadasNoMes); 
    
        const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
        return console.log(formatado);
    
    }
// End

// Ordenação de Numeros forma crescente
    var lista = [10,1, 5, 9, 8, 12, 15, -1, 34];

    function comparaNumeros(a,b) { 
        if (a == b) return 0; 
        if (a < b) return -1; 
        if (a > b) return 1; 
    }

    console.log(lista.sort(comparaNumeros));
// End