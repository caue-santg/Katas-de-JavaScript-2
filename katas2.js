// comece a criar a sua função add na linha abaixo
function add(a, b){
    return  a + b
}

// descomente a linha seguinte para testar sua função
console.log(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(num1,num2){
   
    let resultado = 0

    for (let i = 0; i < num2; i = add(i, 1)) {
       resultado = add(num1, resultado)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.log(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (x,n){

    let resultado = 1

    for (let i = 0; i < n; i = add(i,1)) {
        resultado = multiply(x ,resultado)

    }
    return resultado
}


// descomente a linha seguinte para testar sua função
console.log(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (numero){

    let resultado = 1 

    for (let i = 1; i <= numero; i = add( i, 1)){
        resultado = multiply( i ,resultado)
    }
    return resultado

}

// descomente a linha seguinte para testar sua função
console.log(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(fiboNum){

    let fiboNum1 = 0 
    let fiboNum2 = 1
    let resultado = 0

    if( fiboNum === 1){
        return 0
    }

    for(let i = 2; fiboNum >= i; i = add(i, 1) ){

        resultado = add(fiboNum1, fiboNum2)
        fiboNum1 = fiboNum2
        fiboNum2 = resultado

    }

    return fiboNum2
}

// descomente a linha seguinte para testar sua função
console.log(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
