/* Variables */
var listaPalabras = [ // Lista de palabras
    "PERCHA",
    "RUIDO",
    "ROMA",
    "DINAMITA",
    "SABOR",
    "PROBLEMA",
    "SAUNA",
    "GUSANO",
    "ZORRO",
    "ZORRA",
    "AFLIGIRSE",
    "NATURALEZA",
    "BOSQUE",
    "CANTO",
    "INTERNET",
    "SILLA",
    "PROFESOR",
    "PROFESORA"
];
var indicePalabraIncognita = 0;
var palabraIncognita = "";
var largoPalabraIncognita = 0;
var arregloPalabraIncognita = [];
var letrasIncognitas = [];
var adivinaLetra = false;
var letraYaIngresada = false;
var adivinaPalabra = false;
var numeroLetrasPendientes = 0;

// Generar palabra aleatoria.
indicePalabraIncognita = Math.floor(Math.random() * listaPalabras.length);
palabraIncognita = listaPalabras[indicePalabraIncognita].toUpperCase();
largoPalabraIncognita = palabraIncognita.length;

// Configura el arreglo respuesta.
for (let indiceArreglo = 0; indiceArreglo < largoPalabraIncognita; indiceArreglo++) {
    let letra = {
        caracter: palabraIncognita.charAt(indiceArreglo),
        posicion: indiceArreglo,
        encontrado: false
    };
    arregloPalabraIncognita.push(letra);
    letrasIncognitas.push("_");
}

// Mostrar la cantidad de letras de la respuesta.
alert("Palabra a adivinar:\n" + letrasIncognitas.join(" ") + "  \("
    + largoPalabraIncognita + ((largoPalabraIncognita == 1)? " letra" : " letras") + "\)");

/* Ciclo del juego. */
numeroLetrasPendientes = largoPalabraIncognita;
while (numeroLetrasPendientes > 0) {
    // EL jugador ingresa una letra para adivinar.
    var letraIngresada = prompt("Ingresa una letra o presiona Cancelar para salir del juego.");

    if (letraIngresada === null) { // Botón Cancelar
        break; // Sale del ciclo y del juego.
    } else if (letraIngresada.length === 0) { // Texto vacío
        alert("Por favor, ingresa algún caracter.");
    } else if (letraIngresada.length > 1) { // Más de 1 caracter
        alert("Por favor, ingresa 1 sólo caracter.");
    } else if (!/^[a-zA-Z\u00f1\u00d1]+$/.test(letraIngresada)) {
        alert("Por favor, ingresa sólo letras.");
    } else {
        // Actualizar el estado del juego con el ingreso de la letra del jugador.
        letraIngresada = letraIngresada.toUpperCase();
        adivinaLetra = false;
        letraYaIngresada = false;
        for (var indicePalabra = 0; indicePalabra < largoPalabraIncognita; indicePalabra++) {
            if (arregloPalabraIncognita[indicePalabra].caracter === letraIngresada) {
                if (arregloPalabraIncognita[indicePalabra].encontrado) {
                    letraYaIngresada = true;
                    break;
                } else {
                    arregloPalabraIncognita[indicePalabra].encontrado = true;
                    letrasIncognitas[indicePalabra] = letraIngresada;
                    numeroLetrasPendientes--;
                    adivinaLetra = true;
                }
            }
        }
        if (numeroLetrasPendientes === 0) {
            adivinaPalabra = true;
            break;
        }
        // Mostrar el progreso del juego.
        alert((letraYaIngresada ? "Esta letra ya se ingresó anteriormente" : (adivinaLetra ? "OK!" : "NO!")) + "\n"
            + letrasIncognitas.join(" ") + "  \(" + numeroLetrasPendientes
            + ((numeroLetrasPendientes == 1)? " letra pendiente" : " letras pendientes") + "\)");
    }
}

// Mostrar respuesta final al usuario, en caso de adivinar todas las letras.
if (adivinaPalabra) {
    alert("La respuesta es: " + palabraIncognita + ". FELICITACIONES!!!");
}