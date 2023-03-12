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
var indicePalabraIncognita = Math.floor(Math.random() * listaPalabras.length);
var palabraIncognita = listaPalabras[indicePalabraIncognita].toUpperCase();
var largoPalabraIncognita = palabraIncognita.length;
var letrasIncognitas = [];
var adivinaLetra = false;
var adivinaPalabra = false;
var numeroLetrasPendientes = 0;

// Configura el arreglo respuesta.
for (var îndiceArreglo = 0; îndiceArreglo < largoPalabraIncognita; îndiceArreglo++) {
    letrasIncognitas[îndiceArreglo] = "_";
}

// Mostrar la cantidad de letras de la respuesta.
alert("Palabra a adivinar:\n"
    + letrasIncognitas.join(" ") + "  \(" + largoPalabraIncognita
    + ((largoPalabraIncognita == 1)? " letra" : " letras") + "\)");

/* El ciclo del juego. */
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
    } else if (!/^[a-zA-Z]+$/.test(letraIngresada)) {
        alert("Por favor, ingresa sólo letras.");
    } else {
        // Actualizar el estado del juego con el ingreso de la letra del jugador.
        letraIngresada = letraIngresada.toUpperCase();
        adivinaLetra = false;
        for (var indicePalabra = 0; indicePalabra < largoPalabraIncognita; indicePalabra++) {
            if (palabraIncognita[indicePalabra] === letraIngresada) {
                letrasIncognitas[indicePalabra] = letraIngresada;
                numeroLetrasPendientes--;
                adivinaLetra = true;
                break;
            }
        }
        if (numeroLetrasPendientes === 0) {
            adivinaPalabra = true;
            break;
        }
        // Mostrar el progreso del juego.
        alert((adivinaLetra ? "OK!" : "NO!") + "\n"
            + letrasIncognitas.join(" ") + "  \(" + numeroLetrasPendientes
            + ((numeroLetrasPendientes == 1)? " letra pendiente" : " letras pendientes") + "\)");
    }
}

// Mostrar respuesta final al usuario, en caso de adivinar todas las letras.
if (adivinaPalabra) {
    alert("La respuesta fue: " + palabraIncognita + ". FELICITACIONES!!!");
}