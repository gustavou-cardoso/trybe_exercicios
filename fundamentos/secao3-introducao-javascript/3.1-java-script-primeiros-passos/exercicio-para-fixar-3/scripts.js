const nota = 91;

if (nota >= 80) {
    console.log("Parabéns, você está no grupo das pessoas aprovadas!");
}
else if (nota < 80 && nota >= 60) {
    console.log("Você está no grupo de espera.");
}
else if (nota < 60) {
    console.log("Inferlizmente, você reprovou.");
}

