// Abre una página en el navegador
function abrirPagina(url) {
    window.location.href = url;
}

// Textos en varios idiomas
const traducciones = {
    es: {
        titulo: "Manual de gestión de archivos por FTP",
        tituloManual: "MANUAL",
        explicacionManual:
            "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno.",
        botonEmpezar: "Empezar"
    },
    en: {
        titulo: "File Management Manual via FTP",
        tituloManual: "MANUAL",
        explicacionManual:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        botonEmpezar: "Start"
    }
};

// Referencias a los elementos
const selectorIdioma = document.getElementById("language");
const elementoTitulo = document.getElementById("titulo");
const elementoTituloManual = document.getElementById("titulo-manual");
const elementoExplicacionManual = document.getElementById("explicacion-manual");
const elementoBotonEmpezar = document.querySelector("#boton-empezar input");

// Función para cambiar el idioma
function cambiarIdioma(lang) {
    const traducir = traducciones[lang];
    elementoTitulo.textContent = traducir.titulo;
    elementoTituloManual.textContent = traducir.tituloManual;
    elementoExplicacionManual.textContent = traducir.explicacionManual;
    elementoBotonEmpezar.value = traducir.botonEmpezar;
}

// Cambiar idioma al seleccionar una opción
selectorIdioma.addEventListener("change", (e) => {
    const elegirIdioma = e.target.value;
    cambiarIdioma(elegirIdioma);
    localStorage.setItem("selectedLanguage", elegirIdioma); // Guardar idioma seleccionado
});

// Establecer idioma inicial desde localStorage o por defecto
const guardarIdioma = localStorage.getItem("selectedLanguage") || "es";
selectorIdioma.value = guardarIdioma;
cambiarIdioma(guardarIdioma);