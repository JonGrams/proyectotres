for (let i = 0; i < 10; i++) {
    alert(i);
}

// Tabla de multiplicación

let ingresarNumero = Number(prompt("Ingrese un numero"));

for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i;
    alert(ingresarNumero+"x"+i+"="+resultado)
}