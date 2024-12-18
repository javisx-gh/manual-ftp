// Abre una página en el navegador y conserva el idioma seleccionado
function abrirPagina(url) {
    const idiomaActual = localStorage.getItem("selectedLanguage") || "es";
    localStorage.setItem("selectedLanguage", idiomaActual); // Asegúrate de guardar el idioma seleccionado
    window.location.href = url;
}

// Función para cargar las traducciones desde el archivo JSON
async function cargarTraducciones() {
    try {
        const response = await fetch("../traducciones.json");
        if (!response.ok) throw new Error("No se pudieron cargar las traducciones.");
        return await response.json();
    } catch (error) {
        console.error("Error al cargar las traducciones:", error);
        return null;
    }
}

// Función para traducir el contenido de la página
async function traducirPagina(lang, pagina) {
    const traducciones = await cargarTraducciones();
    if (!traducciones || !traducciones[pagina] || !traducciones[pagina][lang]) {
        console.error("No se encontraron las traducciones adecuadas.");
        return;
    }

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
        const tituloPagina = document.getElementById("titulo-pagina");
        if (tituloPagina) tituloPagina.textContent = traducir.tituloPagina;

        const descripcionGeneral = document.getElementById("descripcion-general");
        if (descripcionGeneral) descripcionGeneral.textContent = traducir.descripcionGeneral;

        const parrafoDescripcion = document.getElementById("parrafo-descripcion");
        if (parrafoDescripcion) parrafoDescripcion.textContent = traducir.parrafoDescripcion;

        const botonAnterior = document.getElementById("boton-anterior");
        if (botonAnterior) botonAnterior.value = traducir.botonAnterior;

        const botonSiguiente = document.getElementById("boton-siguiente");
        if (botonSiguiente) botonSiguiente.value = traducir.botonSiguiente;

        const paginacion = document.getElementById("paginacion");
        if (paginacion) paginacion.textContent = traducir.paginacion;
    }
}

// Sincronizar el selector de idioma con el idioma actual
const selectorIdioma = document.getElementById("language");
const guardarIdioma = localStorage.getItem("selectedLanguage") || "es";
if (selectorIdioma) {
    selectorIdioma.value = guardarIdioma;
    selectorIdioma.addEventListener("change", async (e) => {
        const elegirIdioma = e.target.value;
        localStorage.setItem("selectedLanguage", elegirIdioma);
        traducirPagina(elegirIdioma, paginaActual); // Traduce la página actual
    });
}

// Detectar la página actual (usando `data-page` en el <body>)
const paginaActual = document.body.dataset.page || "index";

// Traducir la página con el idioma guardado o por defecto
traducirPagina(guardarIdioma, paginaActual);