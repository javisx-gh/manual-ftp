function abrirPagina(url) {
    window.location.href = url;
}
document.addEventListener("DOMContentLoaded", () => {
// Textos en varios idiomas
const translations = {
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
const languageSelector = document.getElementById("language");
const tituloElement = document.getElementById("titulo");
const tituloManualElement = document.getElementById("titulo-manual");
const explicacionManualElement = document.getElementById("explicacion-manual");
const botonEmpezarElement = document.querySelector("#boton-empezar input");

// Función para cambiar el idioma
function changeLanguage(lang) {
    const translation = translations[lang];
    tituloElement.textContent = translation.titulo;
    tituloManualElement.textContent = translation.tituloManual;
    explicacionManualElement.textContent = translation.explicacionManual;
    botonEmpezarElement.value = translation.botonEmpezar;
}

// Cambiar idioma al seleccionar una opción
languageSelector.addEventListener("change", (e) => {
    const selectedLanguage = e.target.value;
    changeLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage); // Guardar idioma seleccionado
});

// Establecer idioma inicial desde localStorage o por defecto
const savedLanguage = localStorage.getItem("selectedLanguage") || "es";
languageSelector.value = savedLanguage;
changeLanguage(savedLanguage);
});

console.log(document.getElementById("language"));