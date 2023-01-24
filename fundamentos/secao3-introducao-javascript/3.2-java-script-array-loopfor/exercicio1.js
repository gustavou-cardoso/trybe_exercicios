
// Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
console.log(numbers)

// Exercício 2
let result = 0 
    for (let index = 0; index < numbers.length; index++) {
    result += numbers[index];
    }
console.log(result)

//Exercício 3
let soma = 0;
for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
}
let divisao = soma / numbers.length;

console.log(divisao);

// Exercicio 4
if (divisao > 20) {
console.log("valor maior que 20");
}
else  {
    console.log("valor menor que 20");
}

// Exercicio 5
let maior = 0;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > maior) {
        maior = numbers[index];
    }
}
console.log(maior);