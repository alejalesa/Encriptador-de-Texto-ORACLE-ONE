// Variables y elementos
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const entradaTexto = document.getElementById("entradaTexto");
const textoResultado = document.getElementById("textoResultado");
const mascota = document.getElementById("mascota");
const informacionResultado = document.getElementById("informacionResultado");

// Matriz de reemplazo
const reemplazos = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
];

// Función para encriptar el texto
function encriptarTexto(texto) {
    texto = texto.toLowerCase();
    for (let i = 0; i < reemplazos.length; i++) {
        if (texto.includes(reemplazos[i][0])) {
            texto = texto.replaceAll(reemplazos[i][0], reemplazos[i][1]);
        }
    }
    return texto;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    texto = texto.toLowerCase();
    for (let i = 0; i < reemplazos.length; i++) {
        if (texto.includes(reemplazos[i][1])) {
            texto = texto.replaceAll(reemplazos[i][1], reemplazos[i][0]);
        }
    }
    return texto;
}

// Función para manejar la encriptación
btnEncriptar.addEventListener("click", () => {
    const texto = entradaTexto.value;
    if (texto !== "") {
        textoResultado.value = encriptarTexto(texto);
        mostrarResultado();
    } else {
        alert("Por favor, ingrese un texto para encriptar.");
    }
});

// Función para manejar la desencriptación
btnDesencriptar.addEventListener("click", () => {
    const texto = entradaTexto.value;
    if (texto !== "") {
        textoResultado.value = desencriptarTexto(texto);
        mostrarResultado();
    } else {
        alert("Por favor, ingrese un texto para desencriptar.");
    }
});

// Función para copiar el texto encriptado/desencriptado
btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(textoResultado.value).then(() => {
        alert("Texto copiado al portapapeles.");
    });
});

// Función para mostrar el resultado en la sección de salida
function mostrarResultado() {
    mascota.classList.add("oculto");
    informacionResultado.classList.add("oculto");
    textoResultado.classList.remove("oculto");
    btnCopiar.classList.remove("oculto");
}

// Ajustar el tamaño del textarea automáticamente
entradaTexto.addEventListener("input", () => {
    entradaTexto.style.height = "auto";
    entradaTexto.style.height = `${entradaTexto.scrollHeight}px`;
});
