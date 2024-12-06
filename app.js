// Paso 1: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            if (num2 === 0) {
                return "Error: No se puede dividir entre cero.";
            }
            return num1 / num2;
        default:
            return "Error: Operación no válida.";
    }
}

// Paso 2: Validar si la operación es válida
function validarOperacion(operacion) {
    const operacionesValidas = ["suma", "resta", "multiplicacion", "division"];
    return operacionesValidas.includes(operacion);
}

// Paso 3: Función para obtener un número válido del usuario
function obtenerNumero(mensaje) {
    let numero;
    do {
        const entrada = prompt(mensaje);
        numero = parseFloat(entrada);
        if (isNaN(numero)) {
            alert("Por favor, introduce un número válido.");
        }
    } while (isNaN(numero));
    return numero;
}

// Paso 4: Función principal que controla el flujo de la calculadora
function iniciarCalculadora() {
    while (true) {
        // Solicitar los números al usuario
        const num1 = obtenerNumero("Introduce el primer número:");
        const num2 = obtenerNumero("Introduce el segundo número:");

        // Solicitar la operación
        let operacion = prompt("Introduce la operación (suma, resta, multiplicacion, division):").toLowerCase();

        // Validar la operación
        if (!validarOperacion(operacion)) {
            alert("Operación no válida, por favor ingresa una operación válida.");
            continue; // Reiniciar el ciclo si la operación es inválida
        }

        // Realizar la operación
        const resultado = realizarOperacion(num1, num2, operacion);

        // Mostrar el resultado
        alert(`Resultado de la ${operacion}: ${resultado}`);

        // Preguntar si el usuario desea continuar
        const continuar = prompt("¿Deseas realizar otra operación? (sí/no):").toLowerCase();
        if (continuar !== "sí") {
            alert("Gracias por usar la calculadora. ¡Hasta luego!");
            break; // Salir del ciclo
        }
    }
}

// Iniciar la calculadora
iniciarCalculadora();
