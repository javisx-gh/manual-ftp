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
            funcionCancelar: "<b>'Función:'</b> Al hacer clic en 'Cancelar', la aplicación se cierra.",
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
            tituloPagina: "Ventana de Selección de Funciones",
            tituloDescripcion: "Descripción General",
            parrafoDescripcion: "Esta ventana permite al usuario elegir la acción que desea realizar en el programa. Contiene cuatro opciones representadas por iconos, cada una con una función específica: FTP, correo electrónico, configuración y consulta de información de la empresa.",
            tituloComponentes: "Componentes de la Ventana",
            opcionFtp: "Opción: FTP",
            ubicacionFtp: "Ubicación: Parte superior izquierda.",
            descripcionFtp: "Descripcion: Representado por un icono con un reptil y una carpeta.",
            funcionFtp: "Función: Permite al usuario acceder al sistema FTP para gestionar archivos mediante transferencia de datos.",
            opcionCorreo: "Opción: Correo Electrónico",
            ubicacionCorreo: "Ubicación: Parte superior derecha.",
            descripcionCorreo: "Descripcion: Representado por un icono de una arroba (@).",
            funcionCorreo: "Función: Permite al usuario acceder al sistema de correos para enviar y recibir mensajes electrónicos.",
            opcionConfiguracion: "Opción: Configuración",
            ubicacionConfiguracion: "Ubicación: Parte inferior izquierda.",
            descripcionConfiguracion: "Descripcion: Representado por un engranaje con una figura de usuario en el centro.",
            funcionConfiguracion: "Función: Permite al usuario gestionar la configuración del programa, como ajustes de sistema y personalización.",
            opcionInformacion: "Opción: Información",
            ubicacionInformacion: "Ubicación: Parte inferior derecha.",
            descripcionInformacion: "Descripcion: Representado por un icono de una letra i (información).",
            funcionInformacion: "Función: Proporciona información sobre la empresa, como datos de contacto, detalles del software o manuales.",
            tituloNavegacion: "Navegación",
            navegacionSeleccion: "El usuario puede seleccionar cualquiera de las opciones haciendo clic en el icono correspondiente.",
            navegacionRedireccion: "Una vez seleccionada una opción, el programa redirigirá a la funcionalidad elegida.",

            //Footer
            botonAnterior: "Anterior",
            botonSiguiente: "Siguiente",
            paginacion: "Página 3",
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
            tituloPagina: "Function Selection Window",
            tituloDescripcion: "General Overview",
            parrafoDescripcion: "This window allows the user to choose the action they want to perform in the program. It contains four options represented by icons, each with a specific function: FTP, email, settings, and company information inquiry.",
            tituloComponentes: "Window Components",
            opcionFtp: "Option: FTP",
            ubicacionFtp: "Location: Top left.",
            descripcionFtp: "Description: Represented by an icon with a reptile and a folder.",
            funcionFtp: "Function: Allows the user to access the FTP system to manage files through data transfer.",
            opcionCorreo: "Option: Email",
            ubicacionCorreo: "Location: Top right.",
            descripcionCorreo: "Description: Represented by an at symbol (@) icon.",
            funcionCorreo: "Function: Allows the user to access the email system to send and receive electronic messages.",
            opcionConfiguracion: "Option: Settings",
            ubicacionConfiguracion: "Location: Bottom left.",
            descripcionConfiguracion: "Description: Represented by a gear with a user figure in the center.",
            funcionConfiguracion: "Function: Allows the user to manage the program settings, such as system adjustments and personalization.",
            opcionInformacion: "Option: Information",
            ubicacionInformacion: "Location: Bottom right.",
            descripcionInformacion: "Description: Represented by an icon with the letter 'i' (information).",
            funcionInformacion: "Function: Provides information about the company, such as contact details, software information, or manuals.",
            tituloNavegacion: "Navigation",
            navegacionSeleccion: "The user can select any of the options by clicking the corresponding icon.",
            navegacionRedireccion: "Once an option is selected, the program will redirect to the chosen functionality.",

            //Footer
            botonAnterior: "Previous",
            botonSiguiente: "Next",
            paginacion: "Page 3",
            footerAutor: "Designed and developed by DSC Multi S.L.",
            footerDerechos: "All rights reserved © 2024"
        },
    },
    page3: {
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
            tituloVentana: "Ventana del Sistema FTP",
            tituloDescripcion: "Descripción General",
            descripcionGeneral: "La ventana del sistema FTP permite al usuario realizar tareas de gestión de archivos y directorios. Estas acciones incluyen crear, eliminar, modificar y descargar archivos o carpetas. El árbol de archivos ubicado en la interfaz muestra la estructura actual del sistema, facilitando la navegación.",
            tituloComponentes: "Componentes de la ventana",
            componenteBarraSuperior: "Barra Superior",
            campoTexto: "Campo de texto: Ubicado en la parte superior central. Permite ingresar el nombre del archivo o carpeta que se desea renombrar.",
            botonRename: "Botón Rename:",
            ubicacionRename: "Ubicación: Parte superior derecha.",
            funcionRename: "Función: Actualiza y recarga el árbol de archivos para mostrar la estructura más reciente.",
            componenteBotonReload: "Botón Reload",
            ubicacionReload: "Ubicación: Parte superior izquierda.",
            funcionReload: "Función: Actualiza y recarga el árbol de archivos para mostrar la estructura más reciente.",
            componenteOpcionesGestion: "Opciones de Gestión de Archivos/Directorios",
            ubicacionOpciones: "Ubicadas en la sección izquierda de la ventana, estas opciones permiten interactuar con el sistema FTP:",
            opcionCreateDirectory: "Create Directory:",
            funcionCreateDirectory: "Crea un nuevo directorio dentro de la ubicación seleccionada.",
            opcionDeleteDirectory: "Delete Directory:",
            funcionDeleteDirectory: "Elimina el directorio seleccionado en el árbol de archivos.",
            opcionModifyDirectory: "Modify Directory:",
            funcionModifyDirectory: "Permite modificar las propiedades o el nombre de un directorio existente.",
            opcionDeleteFile: "Delete File:",
            funcionDeleteFile: "Elimina un archivo seleccionado en el árbol de archivos.",
            opcionDownloadFile: "Download File:",
            funcionDownloadFile: "Descarga un archivo específico a una ubicación local.",
            componenteArbolArchivos: "Árbol de Archivos (JTree)",
            ubicacionArbol: "Ubicación: Parte derecha de la ventana.",
            descripcionArbol: "Descripción: Muestra la estructura del sistema de archivos FTP. Los directorios y subdirectorios se representan de forma jerárquica para facilitar la navegación.",
            componenteBotonExit: "Botón Exit",
            ubicacionExit: "Ubicación: Parte inferior central.",
            funcionExit: "Función: Cierra la ventana FTP y finaliza la sesión actual.",
            tituloUsos: "Usos de la ventana FTP",
            usoNavegacion: "Navegación:",
            navegacionArbol: "Utilice el árbol de archivos para seleccionar el directorio o archivo con el que desea trabajar.",
            usoGestion: "Gestión de Archivos/Directorios:",
            menuGestion: "Haga clic en las opciones del menú izquierdo para realizar las siguientes acciones:",
            gestionCrear: "Crear, eliminar o modificar directorios.",
            gestionArchivos: "Eliminar o descargar archivos.",
            usoRename: "Renombrar Archivos/Directorios:",
            renameTexto: "Ingrese el nuevo nombre en el campo de texto superior.",
            renameSeleccionar: "Seleccione el elemento en el árbol de archivos.",
            renameBoton: "Haga clic en Rename.",
            usoActualizar: "Actualizar:",
            actualizarReload: "Haga clic en Reload para refrescar la vista y confirmar los cambios realizados.",
            usoSalir: "Salir:",
            salirExit: "Presione el botón Exit para cerrar la ventana.",
            tituloProposito: "Propósito de la Ventana",
            propositoVentana: "Facilitar al usuario la gestión remota de archivos y directorios en un sistema FTP mediante una interfaz gráfica intuitiva y funcional.",

            //Footer
            botonAnterior: "Anterior",
            botonSiguiente: "Siguiente",
            paginacion: "Página 4",
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

            //Contenido
            tituloVentana: "FTP System Window",
            tituloDescripcion: "General Overview",
            descripcionGeneral: "The FTP system window allows the user to perform file and directory management tasks. These actions include creating, deleting, modifying, and downloading files or folders. The file tree displayed in the interface shows the current system structure, making navigation easier.",
            tituloComponentes: "Window Components",
            componenteBarraSuperior: "Top Bar",
            campoTexto: "Text Field: Located at the top center. Allows entering the name of the file or folder to rename.",
            botonRename: "Rename Button:",
            ubicacionRename: "Location: Top right.",
            funcionRename: "Function: Updates and reloads the file tree to display the most recent structure.",
            componenteBotonReload: "Reload Button",
            ubicacionReload: "Location: Top left.",
            funcionReload: "Function: Updates and reloads the file tree to display the most recent structure.",
            componenteOpcionesGestion: "File/Directory Management Options",
            ubicacionOpciones: "Located in the left section of the window, these options allow interaction with the FTP system:",
            opcionCreateDirectory: "Create Directory:",
            funcionCreateDirectory: "Creates a new directory within the selected location.",
            opcionDeleteDirectory: "Delete Directory:",
            funcionDeleteDirectory: "Deletes the selected directory in the file tree.",
            opcionModifyDirectory: "Modify Directory:",
            funcionModifyDirectory: "Allows modifying the properties or name of an existing directory.",
            opcionDeleteFile: "Delete File:",
            funcionDeleteFile: "Deletes a selected file in the file tree.",
            opcionDownloadFile: "Download File:",
            funcionDownloadFile: "Downloads a specific file to a local location.",
            componenteArbolArchivos: "File Tree (JTree)",
            ubicacionArbol: "Location: Right side of the window.",
            descripcionArbol: "Description: Displays the structure of the FTP file system. Directories and subdirectories are represented hierarchically to facilitate navigation.",
            componenteBotonExit: "Exit Button",
            ubicacionExit: "Location: Bottom center.",
            funcionExit: "Function: Closes the FTP window and ends the current session.",
            tituloUsos: "FTP Window Uses",
            usoNavegacion: "Navigation:",
            navegacionArbol: "Use the file tree to select the directory or file you want to work with.",
            usoGestion: "File/Directory Management:",
            menuGestion: "Click on the menu options on the left to perform the following actions:",
            gestionCrear: "Create, delete, or modify directories.",
            gestionArchivos: "Delete or download files.",
            usoRename: "Rename Files/Directories:",
            renameTexto: "Enter the new name in the top text field.",
            renameSeleccionar: "Select the item in the file tree.",
            renameBoton: "Click on Rename.",
            usoActualizar: "Update:",
            actualizarReload: "Click Reload to refresh the view and confirm the changes made.",
            usoSalir: "Exit:",
            salirExit: "Press the Exit button to close the window.",
            tituloProposito: "Window Purpose",
            propositoVentana: "To facilitate remote file and directory management in an FTP system through an intuitive and functional graphical interface.",

            //Footer
            botonAnterior: "Previous",
            botonSiguiente: "Next",
            paginacion: "Page 4",
            footerAutor: "Designed and developed by DSC Multi S.L.",
            footerDerechos: "All rights reserved © 2024"
        }
    },
    page4: {
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
            ventanaEmailTitulo: "Ventana Email",
            gestionCorreosPrincipal: "1. Ventana Principal de Gestión de Correos",
            descripcionGeneralCorreos: "Descripción General",
            descripcionCorreos: "Esta ventana permite al usuario gestionar los correos electrónicos dentro de su sistema de mensajería. Se ofrecen funcionalidades comunes para la navegación y organización de mensajes.",
            componentesVentanaCorreos: "Componentes de la Ventana",
            botonCreateNew: "Botón \"Create New\"",
            botonCreateNewDescripcion: "Permite crear un nuevo correo electrónico. Al hacer clic, se abrirá la ventana de envío de correos.",
            botonCreateNewFuncion: "Función: Redirige a la ventana de \"Send Mail\" (Envío de Correos).",
            carpetasCorreo: "Carpetas de Correo",
            carpetasCorreoDescripcion: "Una lista de secciones de correos donde el usuario puede navegar entre los mensajes:",
            carpetaInbox: "Inbox: Muestra los correos recibidos.",
            carpetaUnread: "Unread: Filtra los mensajes no leídos.",
            carpetaSent: "Sent: Acceso a los correos enviados.",
            carpetaDraft: "Draft: Muestra los borradores guardados.",
            carpetaSpam: "Spam: Contiene los correos no deseados.",
            carpetaTrash: "Trash: Almacena los mensajes eliminados.",
            areaVisualizacion: "Área Principal de Visualización",
            areaVisualizacionDescripcion: "La sección grande de color gris permite mostrar la lista de correos electrónicos o los detalles del mensaje seleccionado.",
            botonesInferiores: "Botones Inferiores",
            botonRefresh: "Refresh: Actualiza la lista de correos electrónicos para mostrar los mensajes más recientes.",
            botonBack: "Back: Regresa a la ventana anterior o al menú principal.",
            gestionCorreosSecundaria: "2. Ventana Principal de Gestión de Correos",
            descripcionGeneralEnvio: "Descripción General",
            descripcionEnvio: "Esta ventana permite redactar y enviar correos electrónicos. Incluye la funcionalidad de adjuntar archivos.",
            componentesVentanaEnvio: "Componentes de la Ventana",
            camposEntrada: "Campos de Entrada",
            campoTo: "To: Campo donde el usuario debe introducir la dirección de correo del destinatario.",
            campoTopic: "Topic: Aquí se escribe el asunto del correo.",
            campoMessage: "Message: Un área de texto amplia donde el usuario redacta el cuerpo del correo.",
            botonesFuncionales: "Botones Funcionales",
            botonAddFile: "Add File: Permite adjuntar archivos al correo electrónico. Al hacer clic, se abrirá un cuadro de diálogo para seleccionar el archivo.",
            botonSend: "Send: Envía el correo con la información ingresada.",
            botonCancel: "Cancel: Cancela la operación y regresa a la ventana principal sin guardar cambios.",
            archivosAdjuntos: "Sección Inferior de Archivos Adjuntos",
            archivosAdjuntosDescripcion: "Un espacio donde se mostrarán los archivos añadidos al correo electrónico.",

            //Footer
            botonAnterior: "Anterior",
            botonSiguiente: "Siguiente",
            paginacion: "Página 5",
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

            //Contenido
            ventanaEmailTitulo: "Email Window",
            gestionCorreosPrincipal: "1. Main Mail Management Window",
            descripcionGeneralCorreos: "General Description",
            descripcionCorreos: "This window allows the user to manage emails within their messaging system. Common features for navigating and organizing messages are provided.",
            componentesVentanaCorreos: "Window Components",
            botonCreateNew: "\"Create New\" Button",
            botonCreateNewDescripcion: "Allows the creation of a new email. Clicking it will open the send mail window.",
            botonCreateNewFuncion: "Function: Redirects to the \"Send Mail\" window.",
            carpetasCorreo: "Mail Folders",
            carpetasCorreoDescripcion: "A list of mail sections where the user can navigate between messages:",
            carpetaInbox: "Inbox: Displays received emails.",
            carpetaUnread: "Unread: Filters unread messages.",
            carpetaSent: "Sent: Access to sent emails.",
            carpetaDraft: "Draft: Shows saved drafts.",
            carpetaSpam: "Spam: Contains unwanted emails.",
            carpetaTrash: "Trash: Stores deleted messages.",
            areaVisualizacion: "Main Viewing Area",
            areaVisualizacionDescripcion: "The large gray section displays the list of emails or details of the selected message.",
            botonesInferiores: "Bottom Buttons",
            botonRefresh: "Refresh: Updates the email list to display the most recent messages.",
            botonBack: "Back: Returns to the previous window or the main menu.",
            gestionCorreosSecundaria: "2. Secondary Mail Management Window",
            descripcionGeneralEnvio: "General Description",
            descripcionEnvio: "This window allows composing and sending emails. It includes the ability to attach files.",
            componentesVentanaEnvio: "Window Components",
            camposEntrada: "Input Fields",
            campoTo: "To: Field where the user must enter the recipient's email address.",
            campoTopic: "Topic: The subject of the email is written here.",
            campoMessage: "Message: A large text area where the user writes the body of the email.",
            botonesFuncionales: "Functional Buttons",
            botonAddFile: "Add File: Allows attaching files to the email. Clicking it will open a dialog to select the file.",
            botonSend: "Send: Sends the email with the entered information.",
            botonCancel: "Cancel: Cancels the operation and returns to the main window without saving changes.",
            archivosAdjuntos: "Lower Section for Attachments",
            archivosAdjuntosDescripcion: "An area where attached files to the email will be displayed.",

            //Footer
            botonAnterior: "Previous",
            botonSiguiente: "Next",
            paginacion: "Page 5",
            footerAutor: "Designed and developed by DSC Multi S.L.",
            footerDerechos: "All rights reserved © 2024"
        }
    },
    page5: {
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

            //Footer
            botonAnterior: "Anterior",
            botonSiguiente: "Siguiente",
            paginacion: "Página 6",
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

            //Contenido

            //Footer
            botonAnterior: "Previous",
            botonSiguiente: "Next",
            paginacion: "Page 6",
            footerAutor: "Designed and developed by DSC Multi S.L.",
            footerDerechos: "All rights reserved © 2024"
        }
    },
    page6: {
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

            //Footer
            botonAnterior: "Anterior",
            botonSalir: "Salir",
            paginacion: "Página 7",
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

            //Contenido

            //Footer
            botonAnterior: "Previous",
            botonSalir: "Exit",
            paginacion: "Page 7",
            footerAutor: "Designed and developed by DSC Multi S.L.",
            footerDerechos: "All rights reserved © 2024"
        }
    },
    page7: {
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

            //Footer
            botonAnterior: "Anterior",
            botonSiguiente: "Siguiente",
            paginacion: "Página 1",
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

            //Contenido

            //Footer
            botonAnterior: "Previous",
            botonSiguiente: "Next",
            paginacion: "Page 1",
            footerAutor: "Designed and developed by DSC Multi S.L.",
            footerDerechos: "All rights reserved © 2024"
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

    // Traducción específica para `page2.html`
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
        const tituloPagina = document.getElementById("titulo-pagina");
        if (tituloPagina) tituloPagina.textContent = traducir.tituloPagina;

        const tituloDescripcion = document.getElementById("titulo-descripcion");
        if (tituloDescripcion) tituloDescripcion.textContent = traducir.tituloDescripcion;

        const parrafoDescripcion = document.getElementById("parrafo-descripcion");
        if (parrafoDescripcion) parrafoDescripcion.textContent = traducir.parrafoDescripcion;

        const tituloComponentes = document.getElementById("titulo-componentes");
        if (tituloComponentes) tituloComponentes.textContent = traducir.tituloComponentes;

        const opcionFtp = document.getElementById("opcion-ftp");
        if (opcionFtp) opcionFtp.textContent = traducir.opcionFtp;

        const ubicacionFtp = document.getElementById("ubicacion-ftp");
        if (ubicacionFtp) ubicacionFtp.textContent = traducir.ubicacionFtp;

        const descripcionFtp = document.getElementById("descripcion-ftp");
        if (descripcionFtp) descripcionFtp.textContent = traducir.descripcionFtp;

        const funcionFtp = document.getElementById("funcion-ftp");
        if (funcionFtp) funcionFtp.textContent = traducir.funcionFtp;

        const opcionCorreo = document.getElementById("opcion-correo");
        if (opcionCorreo) opcionCorreo.textContent = traducir.opcionCorreo;

        const ubicacionCorreo = document.getElementById("ubicacion-correo");
        if (ubicacionCorreo) ubicacionCorreo.textContent = traducir.ubicacionCorreo;

        const descripcionCorreo = document.getElementById("descripcion-correo");
        if (descripcionCorreo) descripcionCorreo.textContent = traducir.descripcionCorreo;

        const funcionCorreo = document.getElementById("funcion-correo");
        if (funcionCorreo) funcionCorreo.textContent = traducir.funcionCorreo;

        const opcionConfiguracion = document.getElementById("opcion-configuracion");
        if (opcionConfiguracion) opcionConfiguracion.textContent = traducir.opcionConfiguracion;

        const ubicacionConfiguracion = document.getElementById("ubicacion-configuracion");
        if (ubicacionConfiguracion) ubicacionConfiguracion.textContent = traducir.ubicacionConfiguracion;

        const descripcionConfiguracion = document.getElementById("descripcion-configuracion");
        if (descripcionConfiguracion) descripcionConfiguracion.textContent = traducir.descripcionConfiguracion;

        const funcionConfiguracion = document.getElementById("funcion-configuracion");
        if (funcionConfiguracion) funcionConfiguracion.textContent = traducir.funcionConfiguracion;

        const opcionInformacion = document.getElementById("opcion-informacion");
        if (opcionInformacion) opcionInformacion.textContent = traducir.opcionInformacion;

        const ubicacionInformacion = document.getElementById("ubicacion-informacion");
        if (ubicacionInformacion) ubicacionInformacion.textContent = traducir.ubicacionInformacion;

        const descripcionInformacion = document.getElementById("descripcion-informacion");
        if (descripcionInformacion) descripcionInformacion.textContent = traducir.descripcionInformacion;

        const funcionInformacion = document.getElementById("funcion-informacion");
        if (funcionInformacion) funcionInformacion.textContent = traducir.funcionInformacion;

        const tituloNavegacion = document.getElementById("titulo-navegacion");
        if (tituloNavegacion) tituloNavegacion.textContent = traducir.tituloNavegacion;

        const navegacionSeleccion = document.getElementById("navegacion-seleccion");
        if (navegacionSeleccion) navegacionSeleccion.textContent = traducir.navegacionSeleccion;

        const navegacionRedireccion = document.getElementById("navegacion-redireccion");
        if (navegacionRedireccion) navegacionRedireccion.textContent = traducir.navegacionRedireccion;

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

    // Traducción específica para `page3.html`
    if (pagina === "page3") {
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
        const tituloVentana = document.getElementById("titulo-ventana");
        if (tituloVentana) tituloVentana.textContent = traducir.tituloVentana;

        const tituloDescripcion = document.getElementById("titulo-descripcion");
        if (tituloDescripcion) tituloDescripcion.textContent = traducir.tituloDescripcion;

        const descripcionGeneral = document.getElementById("descripcion-general");
        if (descripcionGeneral) descripcionGeneral.textContent = traducir.descripcionGeneral;

        const tituloComponentes = document.getElementById("titulo-componentes");
        if (tituloComponentes) tituloComponentes.textContent = traducir.tituloComponentes;

        const componenteBarraSuperior = document.getElementById("componente-barra-superior");
        if (componenteBarraSuperior) componenteBarraSuperior.textContent = traducir.componenteBarraSuperior;

        const campoTexto = document.getElementById("campo-texto");
        if (campoTexto) campoTexto.textContent = traducir.campoTexto;

        const botonRename = document.getElementById("boton-rename");
        if (botonRename) botonRename.textContent = traducir.botonRename;

        const ubicacionRename = document.getElementById("ubicacion-rename");
        if (ubicacionRename) ubicacionRename.textContent = traducir.ubicacionRename;

        const funcionRename = document.getElementById("funcion-rename");
        if (funcionRename) funcionRename.textContent = traducir.funcionRename;

        const componenteBotonReload = document.getElementById("componente-boton-reload");
        if (componenteBotonReload) componenteBotonReload.textContent = traducir.componenteBotonReload;

        const ubicacionReload = document.getElementById("ubicacion-reload");
        if (ubicacionReload) ubicacionReload.textContent = traducir.ubicacionReload;

        const funcionReload = document.getElementById("funcion-reload");
        if (funcionReload) funcionReload.textContent = traducir.funcionReload;

        const componenteOpcionesGestion = document.getElementById("componente-opciones-gestion");
        if (componenteOpcionesGestion) componenteOpcionesGestion.textContent = traducir.componenteOpcionesGestion;

        const ubicacionOpciones = document.getElementById("ubicacion-opciones");
        if (ubicacionOpciones) ubicacionOpciones.textContent = traducir.ubicacionOpciones;

        const opcionCreateDirectory = document.getElementById("opcion-create-directory");
        if (opcionCreateDirectory) opcionCreateDirectory.textContent = traducir.opcionCreateDirectory;

        const funcionCreateDirectory = document.getElementById("funcion-create-directory");
        if (funcionCreateDirectory) funcionCreateDirectory.textContent = traducir.funcionCreateDirectory;

        const opcionDeleteDirectory = document.getElementById("opcion-delete-directory");
        if (opcionDeleteDirectory) opcionDeleteDirectory.textContent = traducir.opcionDeleteDirectory;

        const funcionDeleteDirectory = document.getElementById("funcion-delete-directory");
        if (funcionDeleteDirectory) funcionDeleteDirectory.textContent = traducir.funcionDeleteDirectory;

        const opcionModifyDirectory = document.getElementById("opcion-modify-directory");
        if (opcionModifyDirectory) opcionModifyDirectory.textContent = traducir.opcionModifyDirectory;

        const funcionModifyDirectory = document.getElementById("funcion-modify-directory");
        if (funcionModifyDirectory) funcionModifyDirectory.textContent = traducir.funcionModifyDirectory;

        const opcionDeleteFile = document.getElementById("opcion-delete-file");
        if (opcionDeleteFile) opcionDeleteFile.textContent = traducir.opcionDeleteFile;

        const funcionDeleteFile = document.getElementById("funcion-delete-file");
        if (funcionDeleteFile) funcionDeleteFile.textContent = traducir.funcionDeleteFile;

        const opcionDownloadFile = document.getElementById("opcion-download-file");
        if (opcionDownloadFile) opcionDownloadFile.textContent = traducir.opcionDownloadFile;

        const funcionDownloadFile = document.getElementById("funcion-download-file");
        if (funcionDownloadFile) funcionDownloadFile.textContent = traducir.funcionDownloadFile;

        const componenteArbolArchivos = document.getElementById("componente-arbol-archivos");
        if (componenteArbolArchivos) componenteArbolArchivos.textContent = traducir.componenteArbolArchivos;

        const ubicacionArbol = document.getElementById("ubicacion-arbol");
        if (ubicacionArbol) ubicacionArbol.textContent = traducir.ubicacionArbol;

        const descripcionArbol = document.getElementById("descripcion-arbol");
        if (descripcionArbol) descripcionArbol.textContent = traducir.descripcionArbol;

        const componenteBotonExit = document.getElementById("componente-boton-exit");
        if (componenteBotonExit) componenteBotonExit.textContent = traducir.componenteBotonExit;

        const ubicacionExit = document.getElementById("ubicacion-exit");
        if (ubicacionExit) ubicacionExit.textContent = traducir.ubicacionExit;

        const funcionExit = document.getElementById("funcion-exit");
        if (funcionExit) funcionExit.textContent = traducir.funcionExit;

        const tituloUsos = document.getElementById("titulo-usos");
        if (tituloUsos) tituloUsos.textContent = traducir.tituloUsos;

        const usoNavegacion = document.getElementById("uso-navegacion");
        if (usoNavegacion) usoNavegacion.textContent = traducir.usoNavegacion;

        const navegacionArbol = document.getElementById("navegacion-arbol");
        if (navegacionArbol) navegacionArbol.textContent = traducir.navegacionArbol;

        const usoGestion = document.getElementById("uso-gestion");
        if (usoGestion) usoGestion.textContent = traducir.usoGestion;

        const menuGestion = document.getElementById("menu-gestion");
        if (menuGestion) menuGestion.textContent = traducir.menuGestion;

        const gestionCrear = document.getElementById("gestion-crear");
        if (gestionCrear) gestionCrear.textContent = traducir.gestionCrear;

        const gestionArchivos = document.getElementById("gestion-archivos");
        if (gestionArchivos) gestionArchivos.textContent = traducir.gestionArchivos;

        const usoRename = document.getElementById("uso-rename");
        if (usoRename) usoRename.textContent = traducir.usoRename;

        const renameTexto = document.getElementById("rename-texto");
        if (renameTexto) renameTexto.textContent = traducir.renameTexto;

        const renameSeleccionar = document.getElementById("rename-seleccionar");
        if (renameSeleccionar) renameSeleccionar.textContent = traducir.renameSeleccionar;

        const renameBoton = document.getElementById("rename-boton");
        if (renameBoton) renameBoton.textContent = traducir.renameBoton;

        const usoActualizar = document.getElementById("uso-actualizar");
        if (usoActualizar) usoActualizar.textContent = traducir.usoActualizar;

        const actualizarReload = document.getElementById("actualizar-reload");
        if (actualizarReload) actualizarReload.textContent = traducir.actualizarReload;

        const usoSalir = document.getElementById("uso-salir");
        if (usoSalir) usoSalir.textContent = traducir.usoSalir;

        const salirExit = document.getElementById("salir-exit");
        if (salirExit) salirExit.textContent = traducir.salirExit;

        const tituloProposito = document.getElementById("titulo-proposito");
        if (tituloProposito) tituloProposito.textContent = traducir.tituloProposito;

        const propositoVentana = document.getElementById("proposito-ventana");
        if (propositoVentana) propositoVentana.textContent = traducir.propositoVentana;

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

    // Traducción específica para `page4.html`
    if (pagina === "page4") {
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
        const ventanaEmailTitulo = document.getElementById("ventana-email-titulo");
        if (ventanaEmailTitulo) ventanaEmailTitulo.textContent = traducir.ventanaEmailTitulo;

        const gestionCorreosPrincipal = document.getElementById("gestion-correos-principal");
        if (gestionCorreosPrincipal) gestionCorreosPrincipal.textContent = traducir.gestionCorreosPrincipal;

        const descripcionGeneralCorreos = document.getElementById("descripcion-general-correos");
        if (descripcionGeneralCorreos) descripcionGeneralCorreos.textContent = traducir.descripcionGeneralCorreos;

        const descripcionCorreos = document.getElementById("descripcion-correos");
        if (descripcionCorreos) descripcionCorreos.textContent = traducir.descripcionCorreos;

        const componentesVentanaCorreos = document.getElementById("componentes-ventana-correos");
        if (componentesVentanaCorreos) componentesVentanaCorreos.textContent = traducir.componentesVentanaCorreos;

        const botonCreateNew = document.getElementById("boton-create-new");
        if (botonCreateNew) botonCreateNew.textContent = traducir.botonCreateNew;

        const botonCreateNewDescripcion = document.getElementById("boton-create-new-descripcion");
        if (botonCreateNewDescripcion) botonCreateNewDescripcion.textContent = traducir.botonCreateNewDescripcion;

        const botonCreateNewFuncion = document.getElementById("boton-create-new-funcion");
        if (botonCreateNewFuncion) botonCreateNewFuncion.textContent = traducir.botonCreateNewFuncion;

        const carpetasCorreo = document.getElementById("carpetas-correo");
        if (carpetasCorreo) carpetasCorreo.textContent = traducir.carpetasCorreo;

        const carpetasCorreoDescripcion = document.getElementById("carpetas-correo-descripcion");
        if (carpetasCorreoDescripcion) carpetasCorreoDescripcion.textContent = traducir.carpetasCorreoDescripcion;

        const carpetaInbox = document.getElementById("carpeta-inbox");
        if (carpetaInbox) carpetaInbox.textContent = traducir.carpetaInbox;

        const carpetaUnread = document.getElementById("carpeta-unread");
        if (carpetaUnread) carpetaUnread.textContent = traducir.carpetaUnread;

        const carpetaSent = document.getElementById("carpeta-sent");
        if (carpetaSent) carpetaSent.textContent = traducir.carpetaSent;

        const carpetaDraft = document.getElementById("carpeta-draft");
        if (carpetaDraft) carpetaDraft.textContent = traducir.carpetaDraft;

        const carpetaSpam = document.getElementById("carpeta-spam");
        if (carpetaSpam) carpetaSpam.textContent = traducir.carpetaSpam;

        const carpetaTrash = document.getElementById("carpeta-trash");
        if (carpetaTrash) carpetaTrash.textContent = traducir.carpetaTrash;

        const areaVisualizacion = document.getElementById("area-visualizacion");
        if (areaVisualizacion) areaVisualizacion.textContent = traducir.areaVisualizacion;

        const areaVisualizacionDescripcion = document.getElementById("area-visualizacion-descripcion");
        if (areaVisualizacionDescripcion) areaVisualizacionDescripcion.textContent = traducir.areaVisualizacionDescripcion;

        const botonesInferiores = document.getElementById("botones-inferiores");
        if (botonesInferiores) botonesInferiores.textContent = traducir.botonesInferiores;

        const botonRefresh = document.getElementById("boton-refresh");
        if (botonRefresh) botonRefresh.textContent = traducir.botonRefresh;

        const botonBack = document.getElementById("boton-back");
        if (botonBack) botonBack.textContent = traducir.botonBack;

        const gestionCorreosSecundaria = document.getElementById("gestion-correos-secundaria");
        if (gestionCorreosSecundaria) gestionCorreosSecundaria.textContent = traducir.gestionCorreosSecundaria;

        const descripcionGeneralEnvio = document.getElementById("descripcion-general-envio");
        if (descripcionGeneralEnvio) descripcionGeneralEnvio.textContent = traducir.descripcionGeneralEnvio;

        const descripcionEnvio = document.getElementById("descripcion-envio");
        if (descripcionEnvio) descripcionEnvio.textContent = traducir.descripcionEnvio;

        const componentesVentanaEnvio = document.getElementById("componentes-ventana-envio");
        if (componentesVentanaEnvio) componentesVentanaEnvio.textContent = traducir.componentesVentanaEnvio;

        const camposEntrada = document.getElementById("campos-entrada");
        if (camposEntrada) camposEntrada.textContent = traducir.camposEntrada;

        const campoTo = document.getElementById("campo-to");
        if (campoTo) campoTo.textContent = traducir.campoTo;

        const campoTopic = document.getElementById("campo-topic");
        if (campoTopic) campoTopic.textContent = traducir.campoTopic;

        const campoMessage = document.getElementById("campo-message");
        if (campoMessage) campoMessage.textContent = traducir.campoMessage;

        const botonesFuncionales = document.getElementById("botones-funcionales");
        if (botonesFuncionales) botonesFuncionales.textContent = traducir.botonesFuncionales;

        const botonAddFile = document.getElementById("boton-add-file");
        if (botonAddFile) botonAddFile.textContent = traducir.botonAddFile;

        const botonSend = document.getElementById("boton-send");
        if (botonSend) botonSend.textContent = traducir.botonSend;

        const botonCancel = document.getElementById("boton-cancel");
        if (botonCancel) botonCancel.textContent = traducir.botonCancel;

        const archivosAdjuntos = document.getElementById("archivos-adjuntos");
        if (archivosAdjuntos) archivosAdjuntos.textContent = traducir.archivosAdjuntos;

        const archivosAdjuntosDescripcion = document.getElementById("archivos-adjuntos-descripcion");
        if (archivosAdjuntosDescripcion) archivosAdjuntosDescripcion.textContent = traducir.archivosAdjuntosDescripcion;

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

    // Traducción específica para `page5.html`
    if (pagina === "page5") {
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

    // Traducción específica para `page6.html`
    if (pagina === "page6") {
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

        //Footer
        const botonAnterior = document.getElementById("boton-anterior");
        if (botonAnterior) botonAnterior.value = traducir.botonAnterior;

        const botonSalir = document.getElementById("boton-salir");
        if (botonSalir) botonSalir.value = traducir.botonSalir;

        const paginacion = document.getElementById("paginacion");
        if (paginacion) paginacion.textContent = traducir.paginacion;

        const footerAutor = document.getElementById("footer-autor");
        if (footerAutor) footerAutor.textContent = traducir.footerAutor;

        const footerDerechos = document.getElementById("footer-derechos");
        if (footerDerechos) footerDerechos.textContent = traducir.footerDerechos;
    }

    // Traducción específica para `page7.html`
    if (pagina === "page7") {
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