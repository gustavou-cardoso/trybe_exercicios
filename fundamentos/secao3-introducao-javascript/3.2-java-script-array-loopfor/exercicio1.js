
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

// Exercicio 6
let resulta = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        resulta += 1;
        }
    }
    if (resulta === 0) {
        console.log("nenhum valor ímpar encontrado")
    }
    else {
        console.log(resulta);
    }

    // Exercicio 7
let menor = numbers [0];
for (let index = 1; index < numbers.length; index++) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}
console.log(menor);

// Exercício 8
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
console.log(numeros);

// Exercicio 9
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index] / 2)
}
