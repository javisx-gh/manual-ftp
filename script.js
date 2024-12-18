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
                "El manual explica las distintas ventanas del sistema, cada una con funcionalidades específicas, como la gestión de correos, configuración de usuarios, administración de archivos FTP y autenticación de inicio de sesión. Está diseñado para guiar al usuario en el uso eficiente de la aplicación y facilitar la comprensión de sus funciones principales.",
            botonEmpezar: "Empezar"
        },
        en: {
            titulo: "File Management Manual via FTP",
            tituloManual: "MANUAL",
            explicacionManual:
                "The manual explains the different windows of the system, each with specific functionalities, such as email management, user configuration, FTP file administration, and login authentication. It is designed to guide the user in the efficient use of the application and to facilitate understanding of its main features.",
            botonEmpezar: "Start"
        }
    },
    page1: {
        es: {
            //Navbar
            linkVentanaRegistro: "Ventana Registro",
            linkMenuSeleccion: "Menú selección",
            linkMenuMas: "Más",
            linkVentanaFtp: "Ventana FTP",
            linkVentanaEmail: "Ventana Email",
            linkVentanaConfiguracion: "Ventana Configuracion",
            linkVentanaInformacion: "Ventana Información",

            //Contenido
            // tituloPagina: "Login",
            tituloDescripcion: "Descripción General",
            parrafoDescripcion: "La ventana de inicio de sesión permite al usuario acceder a una aplicación proporcionando sus credenciales. Consta de campos para introducir un nombre de usuario y una contraseña, así como botones para confirmar o cancelar la acción.",
            tituloComponentes: "Componentes de la Ventana",
            areaBienvenida: "Área de bienvenida",
            ubicacionArea: "Ubicación: A la izquierda de la pantalla.",
            descripcionArea: "Descripción: Mensaje de bienvenida que indica la función del formulario (\"Welcome to the Login form\").",
            campoNombreUsuario: "Campo de entrada: Nombre de Usuario (Username)",
            ubicacionNombreUsuario: "Ubicación: Parte central de la ventana, debajo de la imagen de usuario.",
            funcionNombreUsuario: "Función: El usuario debe introducir su nickname o nombre de usuario.",
            campoContrasena: "Campo de entrada: Contraseña (Password)",
            ubicacionContrasena: "Ubicación: Debajo del campo de nombre de usuario.",
            funcionContrasena: "Función: El usuario debe introducir su contraseña.",
            botonOk: "Botón 'Ok'",
            ubicacionOk: "Ubicación: Debajo de los campos de entrada.",
            funcionOk: "Función: Al hacer clic en 'Ok', el sistema procesa las credenciales y permite continuar a la siguiente pantalla si los datos son correctos.",
            botonCancelar: "Botón 'Cancelar'",
            ubicacionCancelar: "Ubicación: Debajo del botón 'Ok'.",
            funcionCancelar: "Función: Al hacer clic en 'Cancelar', la aplicación se cierra.",
            imagenIcono: "Imagen de Icono",
            ubicacionIcono: "Ubicación: Parte superior central.",
            descripcionIcono: "Descripción: Representa un usuario con una llave, indicando la necesidad de autenticación.",
            flujoUso: "Flujo de Uso",
            inicio: "Inicio",
            descripcionInicio: "El usuario visualiza la ventana con el mensaje de bienvenida y los campos vacíos.",
            accionUsuarioUsername: "El usuario escribe su nombre de usuario en el campo Username.",
            accionUsuarioPassword: "Luego, introduce su contraseña en el campo Password.",
            introduccionCredenciales: "Introducción de Credenciales",
            accionUsuario: "Acción del Usuario",
            aceptarOk: "Aceptar (Ok): Si el usuario hace clic en este botón, la aplicación validará las credenciales.",
            aceptarCorrectas: "Si las credenciales son correctas: El sistema procederá a la siguiente etapa.",
            aceptarIncorrectas: "Si son incorrectas: Aparecerá un mensaje de error solicitando verificar los datos.",
            cancelar: "Cancelar (Cancel): Si el usuario hace clic aquí, la aplicación se cerrará.",

            //Footer
            botonAnterior: "Anterior",
            botonSiguiente: "Siguiente",
            paginacion: "Página 2",
            footerAutor: "Diseñado y desarrollado por DSC Multi S.L.",
            footerDerechos: "Todos los derechos reservados © 2024"
        },
        en: {
            //Navbar
            linkVentanaRegistro: "Registration Window",
            linkMenuSeleccion: "Selection Menu",
            linkMenuMas: "More",
            linkVentanaFtp: "FTP Window",
            linkVentanaEmail: "Email Window",
            linkVentanaConfiguracion: "Settings Window",
            linkVentanaInformacion: "Information Window",
        
            //Content
            // tituloPagina: "Login",
            tituloDescripcion: "General Overview",
            parrafoDescripcion: "The login window allows the user to access an application by providing their credentials. It consists of fields to input a username and a password, as well as buttons to confirm or cancel the action.",
            tituloComponentes: "Window Components",
            areaBienvenida: "Welcome Area",
            ubicacionArea: "Location: Left side of the screen.",
            descripcionArea: "Description: Welcome message indicating the form's function (\"Welcome to the Login form\").",
            campoNombreUsuario: "Input Field: Username",
            ubicacionNombreUsuario: "Location: Center of the window, below the user image.",
            funcionNombreUsuario: "Function: The user must enter their nickname or username.",
            campoContrasena: "Input Field: Password",
            ubicacionContrasena: "Location: Below the username field.",
            funcionContrasena: "Function: The user must enter their password.",
            botonOk: "'Ok' Button",
            ubicacionOk: "Location: Below the input fields.",
            funcionOk: "Function: Clicking 'Ok' processes the credentials and allows proceeding to the next screen if the data is correct.",
            botonCancelar: "'Cancel' Button",
            ubicacionCancelar: "Location: Below the 'Ok' button.",
            funcionCancelar: "Function: Clicking 'Cancel' closes the application.",
            imagenIcono: "Icon Image",
            ubicacionIcono: "Location: Top center.",
            descripcionIcono: "Description: Represents a user with a key, indicating the need for authentication.",
            flujoUso: "Usage Flow",
            inicio: "Start",
            descripcionInicio: "The user views the window with the welcome message and empty fields.",
            accionUsuarioUsername: "The user types their username in the Username field.",
            accionUsuarioPassword: "Then, enters their password in the Password field.",
            introduccionCredenciales: "Credential Introduction",
            accionUsuario: "User Action",
            aceptarOk: "Accept (Ok): If the user clicks this button, the application will validate the credentials.",
            aceptarCorrectas: "If the credentials are correct: The system proceeds to the next stage.",
            aceptarIncorrectas: "If they are incorrect: An error message will appear, prompting the user to verify the data.",
            cancelar: "Cancel: If the user clicks here, the application will close.",
        
            //Footer
            botonAnterior: "Previous",
            botonSiguiente: "Next",
            paginacion: "Page 2",
            footerAutor: "Designed and developed by DSC Multi S.L.",
            footerDerechos: "All rights reserved © 2024"
        },
    },
    page2: {
        es: {
            //Navbar
            linkVentanaRegistro: "Ventana Registro",
            linkMenuSeleccion: "Menú selección",
            linkMenuMas: "Más",
            linkVentanaFtp: "Ventana FTP",
            linkVentanaEmail: "Ventana Email",
            linkVentanaConfiguracion: "Ventana Configuracion",
            linkVentanaInformacion: "Ventana Información",

            //Contenido
        },
        en: {
            //Navbar
            linkVentanaRegistro: "Registration Window",
            linkMenuSeleccion: "Selection Menu",
            linkMenuMas: "More",
            linkVentanaFtp: "FTP Window",
            linkVentanaEmail: "Email Window",
            linkVentanaConfiguracion: "Settings Window",
            linkVentanaInformacion: "Information Window",
        
            //Content
        },
    },
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
        //Navbar
        const linkVentanaRegistro = document.getElementById("link-ventana-registro");
        if (linkVentanaRegistro) linkVentanaRegistro.textContent = traducir.linkVentanaRegistro;

        const linkMenuSeleccion = document.getElementById("link-menu-seleccion");
        if (linkMenuSeleccion) linkMenuSeleccion.textContent = traducir.linkMenuSeleccion;

        const linkMenuMas = document.getElementById("link-menu-mas");
        if (linkMenuMas) {
            linkMenuMas.innerHTML = `<img src="../Imagenes/caret-down-fill.svg" alt=""> ${traducir.linkMenuMas}`;
        }

        const linkVentanaFtp = document.getElementById("link-ventana-ftp");
        if (linkVentanaFtp) linkVentanaFtp.textContent = traducir.linkVentanaFtp;

        const linkVentanaEmail = document.getElementById("link-ventana-email");
        if (linkVentanaEmail) linkVentanaEmail.textContent = traducir.linkVentanaEmail;

        const linkVentanaConfiguracion = document.getElementById('link-ventana-configuracion');
        if (linkVentanaConfiguracion) linkVentanaConfiguracion.textContent = traducir.linkVentanaConfiguracion;

        const linkVentanaInformacion = document.getElementById("link-ventana-informacion");
        if (linkVentanaInformacion) linkVentanaInformacion.textContent = traducir.linkVentanaInformacion;

        //Contenido
        // const tituloPagina = document.getElementById("titulo-pagina");
        // if (tituloPagina) tituloPagina.textContent = traducir.tituloPagina;

        const tituloDescripcion = document.getElementById("titulo-descripcion");
        if (tituloDescripcion) tituloDescripcion.textContent = traducir.tituloDescripcion;

        const parrafoDescripcion = document.getElementById("parrafo-descripcion");
        if (parrafoDescripcion) parrafoDescripcion.textContent = traducir.parrafoDescripcion;

        const tituloComponentes = document.getElementById("titulo-componentes");
        if (tituloComponentes) tituloComponentes.textContent = traducir.tituloComponentes;

        const areaBienvenida = document.getElementById("area-bienvenida");
        if (areaBienvenida) areaBienvenida.textContent = traducir.areaBienvenida;

        const ubicacionArea = document.getElementById("ubicacion-area");
        if (ubicacionArea) ubicacionArea.textContent = traducir.ubicacionArea;

        const descripcionArea = document.getElementById("descripcion-area");
        if (descripcionArea) descripcionArea.textContent = traducir.descripcionArea;

        const campoNombreUsuario = document.getElementById("campo-nombre-usuario");
        if (campoNombreUsuario) campoNombreUsuario.textContent = traducir.campoNombreUsuario;

        const ubicacionNombreUsuario = document.getElementById("ubicacion-nombre-usuario");
        if (ubicacionNombreUsuario) ubicacionNombreUsuario.textContent = traducir.ubicacionNombreUsuario;

        const funcionNombreUsuario = document.getElementById("funcion-nombre-usuario");
        if (funcionNombreUsuario) funcionNombreUsuario.textContent = traducir.funcionNombreUsuario;

        const campoContrasena = document.getElementById("campo-contrasena");
        if (campoContrasena) campoContrasena.textContent = traducir.campoContrasena;

        const ubicacionContrasena = document.getElementById("ubicacion-contrasena");
        if (ubicacionContrasena) ubicacionContrasena.textContent = traducir.ubicacionContrasena;

        const funcionContrasena = document.getElementById("funcion-contrasena");
        if (funcionContrasena) funcionContrasena.textContent = traducir.funcionContrasena;

        const botonOk = document.getElementById("boton-ok");
        if (botonOk) botonOk.textContent = traducir.botonOk;

        const ubicacionOk = document.getElementById("ubicacion-ok");
        if (ubicacionOk) ubicacionOk.textContent = traducir.ubicacionOk;

        const funcionOk = document.getElementById("funcion-ok");
        if (funcionOk) funcionOk.textContent = traducir.funcionOk;

        const botonCancelar = document.getElementById("boton-cancelar");
        if (botonCancelar) botonCancelar.textContent = traducir.botonCancelar;

        const ubicacionCancelar = document.getElementById("ubicacion-cancelar");
        if (ubicacionCancelar) ubicacionCancelar.textContent = traducir.ubicacionCancelar;

        const funcionCancelar = document.getElementById("funcion-cancelar");
        if (funcionCancelar) funcionCancelar.textContent = traducir.funcionCancelar;

        const imagenIcono = document.getElementById("imagen-icono");
        if (imagenIcono) imagenIcono.textContent = traducir.imagenIcono;

        const ubicacionIcono = document.getElementById("ubicacion-icono");
        if (ubicacionIcono) ubicacionIcono.textContent = traducir.ubicacionIcono;

        const descripcionIcono = document.getElementById("descripcion-icono");
        if (descripcionIcono) descripcionIcono.textContent = traducir.descripcionIcono;

        const flujoUso = document.getElementById("flujo-uso");
        if (flujoUso) flujoUso.textContent = traducir.flujoUso;

        const inicio = document.getElementById("inicio");
        if (inicio) inicio.textContent = traducir.inicio;

        const descripcionInicio = document.getElementById("descripcion-inicio");
        if (descripcionInicio) descripcionInicio.textContent = traducir.descripcionInicio;

        const accionUsuarioUsername = document.getElementById("accion-usuario-username");
        if (accionUsuarioUsername) accionUsuarioUsername.textContent = traducir.accionUsuarioUsername;

        const accionUsuarioPassword = document.getElementById("accion-usuario-password");
        if (accionUsuarioPassword) accionUsuarioPassword.textContent = traducir.accionUsuarioPassword;

        const introduccionCredenciales = document.getElementById("introduccion-credenciales");
        if (introduccionCredenciales) introduccionCredenciales.textContent = traducir.introduccionCredenciales;

        const accionUsuario = document.getElementById("accion-usuario");
        if (accionUsuario) accionUsuario.textContent = traducir.accionUsuario;

        const aceptarOk = document.getElementById("aceptar-ok");
        if (aceptarOk) aceptarOk.textContent = traducir.aceptarOk;

        const aceptarCorrectas = document.getElementById("aceptar-correctas");
        if (aceptarCorrectas) aceptarCorrectas.textContent = traducir.aceptarCorrectas;

        const aceptarIncorrectas = document.getElementById("aceptar-incorrectas");
        if (aceptarIncorrectas) aceptarIncorrectas.textContent = traducir.aceptarIncorrectas;

        const cancelar = document.getElementById("cancelar");
        if (cancelar) cancelar.textContent = traducir.cancelar;

        //Footer
        const botonAnterior = document.getElementById("boton-anterior");
        if (botonAnterior) botonAnterior.value = traducir.botonAnterior;

        const botonSiguiente = document.getElementById("boton-siguiente");
        if (botonSiguiente) botonSiguiente.value = traducir.botonSiguiente;

        const paginacion = document.getElementById("paginacion");
        if (paginacion) paginacion.textContent = traducir.paginacion;

        const footerAutor = document.getElementById("footer-autor");
        if (footerAutor) footerAutor.textContent = traducir.footerAutor;

        const footerDerechos = document.getElementById("footer-derechos");
        if (footerDerechos) footerDerechos.textContent = traducir.footerDerechos;
    }

    // Traducción específica para `page1.html`
    if (pagina === "page2") {
        //Navbar
        const linkVentanaRegistro = document.getElementById("link-ventana-registro");
        if (linkVentanaRegistro) linkVentanaRegistro.textContent = traducir.linkVentanaRegistro;

        const linkMenuSeleccion = document.getElementById("link-menu-seleccion");
        if (linkMenuSeleccion) linkMenuSeleccion.textContent = traducir.linkMenuSeleccion;

        const linkMenuMas = document.getElementById("link-menu-mas");
        if (linkMenuMas) {
            linkMenuMas.innerHTML = `<img src="../Imagenes/caret-down-fill.svg" alt=""> ${traducir.linkMenuMas}`;
        }

        const linkVentanaFtp = document.getElementById("link-ventana-ftp");
        if (linkVentanaFtp) linkVentanaFtp.textContent = traducir.linkVentanaFtp;

        const linkVentanaEmail = document.getElementById("link-ventana-email");
        if (linkVentanaEmail) linkVentanaEmail.textContent = traducir.linkVentanaEmail;

        const linkVentanaConfiguracion = document.getElementById('link-ventana-configuracion');
        if (linkVentanaConfiguracion) linkVentanaConfiguracion.textContent = traducir.linkVentanaConfiguracion;

        const linkVentanaInformacion = document.getElementById("link-ventana-informacion");
        if (linkVentanaInformacion) linkVentanaInformacion.textContent = traducir.linkVentanaInformacion;

        //Contenido
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