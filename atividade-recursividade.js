// PADRÃO 1: descobrir qual o n-ésimo elemento de uma sequência infinita:

//função para retornar qualquer termo de uma PA de razão 5 e A1=2
const pa = (n) => {
    if (n==1) {return 2}
    else {return pa(n-1) + 5}
}

//console.log(pa(5))


//função que retorne qualquer termo da sequência de fibonacci
const fibonacci = (n) => {
	if (n==1) {return 0}
    else if (n==2) {return 1}
    else {return fibonacci(n-1) + fibonacci(n-2)} 
}

//console.log(fibonacci(9))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PADRÃO 2: implementar uma operação que é formada por uma repetição de operações mais primitivas:

//função 