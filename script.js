// Abre una página en el navegador y conserva el idioma seleccionado
function abrirPagina(url) {
    const idiomaActual = localStorage.getItem("selectedLanguage") || "es";
    localStorage.setItem("selectedLanguage", idiomaActual); // Asegúrate de guardar el idioma seleccionado
    window.location.href = url;
}

// Textos en varios idiomas
const traducciones = {
    index: {
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
    },
    page1: {
        es: {
            tituloPagina: "Login",
            descripcionGeneral: "Descripción General",
            parrafoDescripcion:
                "La ventana de inicio de sesión permite al usuario acceder a una aplicación proporcionando sus credenciales. Consta de campos para introducir un nombre de usuario y una contraseña, así como botones para confirmar o cancelar la acción.",
            botonAnterior: "Anterior",
            botonSiguiente: "Siguiente",
            paginacion: "Página 1"
        },
        en: {
            tituloPagina: "Login",
            descripcionGeneral: "General Description",
            parrafoDescripcion:
                "The login window allows the user to access an application by providing their credentials. It consists of fields for entering a username and a password, as well as buttons to confirm or cancel the action.",
            botonAnterior: "Previous",
            botonSiguiente: "Next",
            paginacion: "Page 1"
        }
    }
};

// Función para traducir el contenido de la página
function traducirPagina(lang, pagina) {
    const traducir = traducciones[pagina][lang];

    // Traducción específica para `index.html`
    if (pagina === "index") {
        const elementoTitulo = document.getElementById("titulo");
        if (elementoTitulo) elementoTitulo.textContent = traducir.titulo;

        const elementoTituloManual = document.getElementById("titulo-manual");
        if (elementoTituloManual) elementoTituloManual.textContent = traducir.tituloManual;

        const elementoExplicacionManual = document.getElementById("explicacion-manual");
        if (elementoExplicacionManual) elementoExplicacionManual.textContent = traducir.explicacionManual;

        const botonEmpezar = document.querySelector("#boton-empezar input");
        if (botonEmpezar) botonEmpezar.value = traducir.botonEmpezar;
    }

    // Traducción específica para `page1.html`
    if (pagina === "page1") {
        const tituloPagina = document.querySelector("h2");
        if (tituloPagina) tituloPagina.textContent = traducir.tituloPagina;

        const descripcionGeneral = document.querySelector(".parrafo h3");
        if (descripcionGeneral) descripcionGeneral.textContent = traducir.descripcionGeneral;

        const parrafoDescripcion = document.querySelector(".parrafo p");
        if (parrafoDescripcion) parrafoDescripcion.textContent = traducir.parrafoDescripcion;

        const botonAnterior = document.querySelector(".botones input:nth-child(1)");
        if (botonAnterior) botonAnterior.value = traducir.botonAnterior;

        const botonSiguiente = document.querySelector(".botones input:nth-child(2)");
        if (botonSiguiente) botonSiguiente.value = traducir.botonSiguiente;

        const paginacion = document.querySelector(".paginacion");
        if (paginacion) paginacion.textContent = traducir.paginacion;
    }
}

// Sincronizar el selector de idioma con el idioma actual
const selectorIdioma = document.getElementById("language");
const guardarIdioma = localStorage.getItem("selectedLanguage") || "es";
if (selectorIdioma) {
    selectorIdioma.value = guardarIdioma;
    selectorIdioma.addEventListener("change", (e) => {
        const elegirIdioma = e.target.value;
        localStorage.setItem("selectedLanguage", elegirIdioma);
        traducirPagina(elegirIdioma, paginaActual); // Traduce la página actual
    });
}

// Detectar la página actual (usando `data-page` en el <body>)
const paginaActual = document.body.dataset.page || "index";

// Traducir la página con el idioma guardado o por defecto
traducirPagina(guardarIdioma, paginaActual);