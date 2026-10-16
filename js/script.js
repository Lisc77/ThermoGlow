document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            page_title: "Inicio | ThermoGlow", quiz_page_title: "Cuestionario | ThermoGlow", js_page_title: "JavaScript | ThermoGlow", jquery_page_title: "jQuery | ThermoGlow", json_page_title: "JSON | ThermoGlow", hosting_page_title: "Hosting y dominios | ThermoGlow", google_page_title: "15 herramientas gratuitas de Google | ThermoGlow",
            nav_inicio: "Inicio", nav_js: "JavaScript", nav_jquery: "jQuery", nav_json: "JSON", nav_hosting: "Hosting y dominios", nav_cuestionario: "Cuestionario", nav_contacto: "Contacto", nav_productos: "Productos", nav_google: "Google", theme_toggle: "Cambiar tema",
            hero_badge: "Una colección diferente", hero_title_1: "Tu bebida.", hero_title_2: "Tu temperatura.", hero_title_3: "Tu color.", hero_desc: "Vasos que cambian de apariencia cuando cambia la temperatura. Conoce la colección ThermoGlow y descubre también cómo se construye una página web.",
            btn_ver_productos: "Ver productos", btn_aprender: "Aprender desarrollo web", feature_1: "Diseños coloridos", feature_2: "Para tu día a día", hero_copy_label: "El color cambia contigo", hero_caption: "Frío o calor: cada sorbo tiene su estilo.",
            carousel_kicker: "MIRA LOS DETALLES", carousel_title: "Un vistazo a la colección", carousel_hint: "Desliza para ver más", carousel_1_badge: "01 · Colección", carousel_1_title: "Detalles para todos los días", carousel_2_badge: "02 · Color", carousel_2_title: "Dale otro tono a tu bebida", carousel_3_badge: "03 · Tu rutina", carousel_3_title: "Un diseño que acompaña tu día", carousel_prev: "Anterior", carousel_next: "Siguiente",
            info_1_title: "Con bebidas frías", info_1_desc: "La superficie puede mostrar tonos distintos al enfriarse.", info_2_title: "Con bebidas calientes", info_2_desc: "Los materiales termocrómicos responden a los cambios de temperatura.", info_3_title: "A tu manera", info_3_desc: "Una propuesta para estudiantes y jóvenes que disfrutan los diseños originales.",
            prod_kicker: "ELIGE EL TUYO", prod_title: "La colección ThermoGlow", prod_desc: "Modelos de ejemplo para presentar la idea del producto.", prod_classic_badge: "Esencial", prod_classic_desc: "Un vaso de 500 ml para acompañar tus clases, paseos o tiempo libre.", prod_pro_badge: "Mayor capacidad", prod_pro_desc: "Modelo de 750 ml pensado para jornadas largas y bebidas favoritas.", prod_mini_badge: "Colorido", prod_mini_desc: "Un formato compacto de 350 ml para llevar a donde quieras.", btn_interes: "Me interesa", prod_disclaimer: "Los modelos, precios y características son demostrativos para la actividad escolar.",
            contact_kicker: "HABLEMOS", contact_title: "¿Tienes alguna consulta?", contact_desc: "Escríbenos si quieres saber más sobre los modelos, sus capacidades o la idea de ThermoGlow.", contact_item_1_title: "Atención a tus preguntas", contact_item_1_desc: "Completa el formulario y verás la confirmación de tu mensaje.", contact_item_2_title: "Formulario de demostración", contact_item_2_desc: "En esta versión escolar, los mensajes se guardan solamente en este navegador; todavía no se envían a un servidor.",
            form_title: "Envíanos un mensaje", form_desc: "Los campos marcados con * son obligatorios.", label_nombre: "Nombre *", label_correo: "Correo electrónico *", label_asunto: "Motivo de contacto *", label_mensaje: "Mensaje *", placeholder_mensaje: "Escribe aquí tu consulta...", btn_enviar: "Enviar mensaje", form_disclaimer: "No ingreses contraseñas ni datos sensibles.", error_nombre: "Escribe tu nombre.", error_correo: "Escribe un correo válido.", error_asunto: "Selecciona el motivo de tu consulta.", error_mensaje: "Escribe un mensaje de al menos 10 caracteres.", opt_selecciona: "Selecciona una opción", opt_info: "Información de productos", opt_personalizacion: "Personalización de vasos", opt_precios: "Precios y capacidades", opt_comentario: "Comentario sobre la página", opt_otro: "Otro",
            edu_kicker: "TAMBIÉN HAY QUE APRENDER", edu_title: "¿Qué tecnologías hacen funcionar una web?", edu_desc: "Este sitio incluye explicaciones sencillas y ejemplos de JavaScript, jQuery, JSON, alojamiento web y dominios. Puedes abrir cada tema desde el menú superior.", btn_repasar: "Repasar ahora",
            modal_title: "Gracias por tu interés", modal_body: "Has seleccionado un producto.", modal_btn: "Entendido", footer_slogan: "Tu bebida, tu color.", footer_text: "Proyecto educativo de desarrollo web",
            quiz_badge: "Repaso final", quiz_title: "Cuestionario de desarrollo web", quiz_desc: "Responde las preguntas y revisa tu resultado al terminar.",
            quiz_q1: "1. ¿Qué tecnología organiza el contenido de una página?", quiz_q1_a: "CSS", quiz_q1_b: "HTML", quiz_q1_c: "JSON",
            quiz_q2: "2. ¿Para qué se usa principalmente JavaScript en una página?", quiz_q2_a: "Para añadir interactividad y comportamiento", quiz_q2_b: "Para registrar un dominio", quiz_q2_c: "Para alojar archivos en un servidor",
            quiz_q3: "3. ¿Qué es jQuery?", quiz_q3_a: "Un sistema de dominios", quiz_q3_b: "Una biblioteca de JavaScript", quiz_q3_c: "Un formato de imagen",
            quiz_q4: "4. ¿Cuál afirmación sobre JSON es correcta?", quiz_q4_a: "Es un formato de texto para intercambiar datos", quiz_q4_b: "Es un tipo de hosting", quiz_q4_c: "Es una extensión de CSS",
            quiz_q5: "5. ¿Qué función cumple el hosting?", quiz_q5_a: "Da estilo a los botones", quiz_q5_b: "Guarda los archivos del sitio en un servidor", quiz_q5_c: "Crea automáticamente todas las páginas",
            quiz_q6: "6. ¿Qué es un dominio?", quiz_q6_a: "El nombre o dirección que se utiliza para encontrar un sitio", quiz_q6_b: "Un lenguaje de programación", quiz_q6_c: "Una etiqueta HTML",
            quiz_btn_submit: "Calificar respuestas", quiz_btn_reset: "Volver a empezar", quiz_link_js: "Repasar JavaScript", quiz_link_jquery: "Repasar jQuery", quiz_link_json: "Repasar JSON", quiz_link_hosting: "Repasar hosting",
            js_badge: "Tema 01 · Interactividad", js_title: "JavaScript", js_desc: "El lenguaje que permite que una página web responda a lo que hace la persona que la visita.", js_what: "¿Qué es JavaScript?", js_what_desc: "JavaScript es un lenguaje de programación usado principalmente para agregar comportamiento a las páginas web. Con él se pueden validar formularios, abrir ventanas, cambiar textos, actualizar datos y responder a clics.", js_roles: "HTML, CSS y JavaScript no hacen lo mismo", js_tech: "Tecnología", js_func: "Función", js_ex: "Ejemplo", js_html_func: "Organiza el contenido.", js_html_ex: "Título, imagen o formulario.", js_css_func: "Define la presentación.", js_css_ex: "Colores, tamaño y distribución.", js_js_func: "Añade comportamiento.", js_js_ex: "Un botón que cambia un mensaje.", js_vfe: "Variables, funciones y eventos", js_var: "Variable:", js_var_desc: "guarda un dato, por ejemplo el nombre de un producto.", js_fun: "Función:", js_fun_desc: "reúne instrucciones que se pueden ejecutar cuando hacen falta.", js_evt: "Evento:", js_evt_desc: "algo que ocurre, como pulsar un botón o mover el puntero.", js_demo: "Prueba un ejemplo", js_demo_desc: "Pulsa el botón y JavaScript cambiará el texto.", js_demo_msg: "Hola, bienvenido a ThermoGlow.", js_demo_btn: "Cambiar mensaje", js_demo_success: "¡El botón funciona!", js_adv: "Ventajas y usos comunes", js_adv_int: "Interactividad", js_adv_int_desc: "Hace que los controles respondan sin recargar toda la página.", js_adv_val: "Validación", js_adv_val_desc: "Ayuda a revisar datos de formularios antes de enviarlos.", js_adv_dyn: "Contenido dinámico", js_adv_dyn_desc: "Permite actualizar textos, listas y elementos de la interfaz.", js_prev: "Inicio", js_next: "Siguiente: jQuery",
            jq_badge: "Tema 02 · Biblioteca", jq_title: "jQuery", jq_desc: "Una biblioteca de JavaScript que simplifica tareas frecuentes, como seleccionar elementos y crear efectos.", jq_what: "¿Qué es y para qué sirve?", jq_what_desc1: "jQuery es una biblioteca creada para facilitar el trabajo con JavaScript. Se hizo popular porque ofrecía una sintaxis más corta para recorrer el documento HTML, manejar eventos, modificar elementos y realizar peticiones a servidores.", jq_what_desc2: "Su forma más conocida de seleccionar elementos comienza con el signo $. Por ejemplo, $(\"#aviso\") selecciona el elemento que tiene el identificador aviso.", jq_pros_cons: "Ventajas y desventajas", jq_pros: "Ventajas", jq_pros_1: "Sintaxis compacta.", jq_pros_2: "Facilita algunos efectos visuales.", jq_pros_3: "Fue útil para compatibilidad entre navegadores antiguos.", jq_cons: "Desventajas", jq_cons_1: "Necesita cargar una biblioteca adicional.", jq_cons_2: "Para tareas sencillas, JavaScript moderno puede bastar.", jq_cons_3: "Hay que conocer las dependencias del proyecto.", jq_vs: "jQuery frente a JavaScript moderno", jq_vs_desc: "Hoy, muchas funciones de selección de elementos, eventos y animaciones se pueden realizar directamente con JavaScript. jQuery sigue presente en sitios y sistemas que ya lo utilizan.", jq_demo: "Prueba los efectos", jq_demo_desc: "Estos botones usan jQuery para mostrar y ocultar un mensaje.", jq_demo_msg: "¡Hola!", jq_demo_msg2: "Este mensaje se puede mostrar u ocultar.", jq_btn_fade: "Probar fadeIn", jq_btn_slide: "Probar slideToggle", jq_demo_note: "El ejemplo requiere conexión a internet para cargar jQuery desde su CDN.", jq_prev: "JavaScript", jq_next: "Siguiente: JSON",
            json_badge: "Tema 03 · Datos", json_title: "JSON", json_desc: "Un formato de texto sencillo para representar e intercambiar información entre aplicaciones.", json_what: "¿Qué significa JSON?", json_what_desc: "JSON viene de JavaScript Object Notation. Aunque su nombre hace referencia a JavaScript, puede utilizarse con muchos lenguajes de programación. Su estructura se basa en pares de clave y valor, objetos y listas.", json_rules: "Reglas básicas", json_rules_1: "Las claves se escriben entre comillas dobles.", json_rules_2: "Los textos también llevan comillas dobles.", json_rules_3: "Los pares clave-valor se separan con comas.", json_rules_4: "Se pueden usar números, cadenas, valores booleanos, null, objetos y arreglos.", json_ex: "Ejemplo de un producto", json_ex_desc: "Este ejemplo describe un vaso con nombre, capacidad, una característica y una lista de colores.", json_explore: "Explora el ejemplo", json_explore_desc: "El botón lee los datos JSON y los muestra en pantalla.", json_btn: "Mostrar datos del producto", json_placeholder: "Los datos aparecerán aquí.", json_note: "JSON es un formato de datos; no es un lenguaje de programación.", json_prev: "jQuery", json_next: "Siguiente: Hosting",
            host_badge: "Tema 04 · Publicación", host_title: "Web Hosting y dominios", host_desc: "Para que una página se pueda visitar por internet, sus archivos necesitan estar alojados y tener una dirección.", host_what: "¿Qué es el hosting?", host_what_desc: "El hosting o alojamiento web es un servicio que guarda los archivos de un sitio en un servidor conectado a internet. Cuando una persona visita la página, el servidor entrega esos archivos al navegador.", host_types: "Tipos comunes", host_t1: "Compartido: varios sitios utilizan recursos de un mismo servidor.", host_t2: "VPS: ofrece recursos virtuales más aislados y configurables.", host_t3: "Dedicado: un servidor se destina a un solo cliente.", host_t4: "Nube: utiliza infraestructura distribuida para alojar servicios.", host_domain: "¿Qué es un dominio?", host_domain_desc: "El dominio es el nombre que las personas escriben para encontrar un sitio, como ejemplo.com. El sistema DNS ayuda a localizar el servidor asociado con ese nombre.", host_parts: "Partes de un dominio", host_p1: "tienda: subdominio.", host_p2: "ejemplo: nombre elegido.", host_p3: ".com: extensión o dominio de nivel superior.", host_pub: "¿Cómo se publica una página?", host_s1: "1. Preparar", host_s1_desc: "Revisar HTML, CSS, JavaScript e imágenes.", host_s2: "2. Elegir hosting", host_s2_desc: "Seleccionar el servicio adecuado al proyecto.", host_s3: "3. Subir archivos", host_s3_desc: "Publicar la carpeta del sitio en el servidor.", host_s4: "4. Conectar dominio", host_s4_desc: "Configurar el DNS si se utiliza un dominio propio.", host_prev: "JSON", host_next: "Ir al cuestionario",
            google_eyebrow: "INVESTIGACIÓN DIGITAL", google_title: "15 herramientas gratuitas de Google", google_desc: "Conoce herramientas para estudiar, crear documentos, comunicarte, organizar tareas y buscar información.", google_note: "La disponibilidad depende de la cuenta, el país y la edición. Algunas funciones educativas avanzadas pueden requerir una licencia de pago.", google_search: "Buscar una herramienta", google_search_ph: "Ej. documentos, videollamadas, mapas...", google_filter: "Filtrar por categoría", google_f_all: "Todas", google_f_study: "Estudio", google_f_prod: "Productividad", google_f_comm: "Comunicación", google_f_res: "Investigación", google_count: "Herramientas encontradas:", google_of: "de", google_clear: "Limpiar búsqueda",
            google_t1: "1. Google Classroom", google_t1_desc: "Permite que docentes organicen clases, publiquen tareas, compartan materiales y den retroalimentación a sus estudiantes.", google_t1_acc: "Acceso: sin costo para funciones principales con una cuenta o institución compatible. Algunas funciones avanzadas dependen de la edición educativa.", google_t1_link: "Abrir Classroom",
            google_t2: "2. Google Drive", google_t2_desc: "Guarda archivos en la nube y permite organizarlos, compartirlos y abrirlos desde diferentes dispositivos.", google_t2_acc: "Acceso: incluye almacenamiento gratuito limitado; el espacio adicional es de pago. En instituciones educativas, el almacenamiento depende de la política escolar.", google_t2_link: "Abrir Drive",
            google_t3: "3. Documentos de Google", google_t3_desc: "Crea y edita textos, informes y trabajos en línea. Varias personas pueden colaborar en el mismo documento.", google_t3_acc: "Acceso: funciones básicas gratuitas con una cuenta Google; algunas herramientas de IA o funciones de organización pueden requerir un plan compatible.", google_t3_link: "Abrir Documentos",
            google_t4: "4. Hojas de cálculo de Google", google_t4_desc: "Organiza datos en tablas, usa fórmulas, crea gráficos y realiza cálculos para tareas o proyectos.", google_t4_acc: "Acceso: edición básica gratuita; ciertas funciones de IA y herramientas avanzadas dependen del plan.", google_t4_link: "Abrir Hojas de cálculo",
            google_t5: "5. Presentaciones de Google", google_t5_desc: "Diseña diapositivas con texto, imágenes, gráficos y animaciones para exposiciones escolares o reuniones.", google_t5_acc: "Acceso: creación y edición básica gratuitas; algunos recursos o funciones avanzadas pueden variar según la cuenta.", google_t5_link: "Abrir Presentaciones",
            google_t6: "6. Formularios de Google", google_t6_desc: "Crea encuestas, registros y cuestionarios; las respuestas pueden organizarse para revisar resultados.", google_t6_acc: "Acceso: las funciones principales están disponibles sin costo; las opciones administrativas o educativas dependen de la edición.", google_t6_link: "Abrir Formularios",
            google_t7: "7. Gmail", google_t7_desc: "Envía y recibe correos electrónicos, adjunta archivos y organiza mensajes con etiquetas y filtros.", google_t7_acc: "Acceso: gratuito para uso personal con límites de almacenamiento compartidos; las cuentas institucionales tienen funciones administradas.", google_t7_link: "Abrir Gmail",
            google_t8: "8. Google Meet", google_t8_desc: "Realiza videollamadas para clases, reuniones y conversaciones a distancia, con opciones de cámara, micrófono y compartir pantalla.", google_t8_acc: "Acceso: tiene uso gratuito con límites; grabaciones y controles avanzados pueden requerir un plan educativo o de Workspace compatible.", google_t8_link: "Abrir Meet",
            google_t9: "9. Google Calendar", google_t9_desc: "Organiza horarios, fechas de entrega, reuniones y recordatorios para administrar mejor el tiempo.", google_t9_acc: "Acceso: calendario básico gratuito; funciones organizativas avanzadas pueden depender del tipo de cuenta.", google_t9_link: "Abrir Calendar",
            google_t10: "10. Google Sites", google_t10_desc: "Construye sitios web sencillos para proyectos, portafolios o información de una clase sin tener que programar.", google_t10_acc: "Acceso: herramienta disponible sin costo con una cuenta compatible; las restricciones de publicación pueden depender del administrador escolar.", google_t10_link: "Abrir Sites",
            google_t11: "11. Google Keep", google_t11_desc: "Guarda notas rápidas, listas y recordatorios; también permite usar colores y compartir notas.", google_t11_acc: "Acceso: funciones principales gratuitas con una cuenta Google.", google_t11_link: "Abrir Keep",
            google_t12: "12. Google Chat", google_t12_desc: "Permite intercambiar mensajes y colaborar en espacios de equipo para organizar conversaciones y proyectos.", google_t12_acc: "Acceso: disponibilidad según la cuenta; algunas opciones de administración pertenecen a Google Workspace.", google_t12_link: "Abrir Chat",
            google_t13: "13. Google Académico", google_t13_desc: "Busca artículos científicos, tesis, libros y citas para apoyar trabajos de investigación.", google_t13_acc: "Acceso: buscador gratuito; algunos documentos encontrados pueden estar detrás de suscripciones editoriales.", google_t13_link: "Abrir Google Académico",
            google_t14: "14. Google Maps", google_t14_desc: "Consulta mapas, ubicaciones, rutas y datos de lugares; es útil para estudiar geografía y planificar desplazamientos.", google_t14_acc: "Acceso: uso básico gratuito; ciertas funciones y servicios pueden variar por región o uso.", google_t14_link: "Abrir Maps",
            google_t15: "15. Google Traductor", google_t15_desc: "Traduce palabras, frases y textos entre diferentes idiomas; puede ayudar a comprender materiales de estudio.", google_t15_acc: "Acceso: herramienta gratuita; la calidad puede variar y conviene revisar las traducciones importantes.", google_t15_link: "Abrir Traductor",
            google_empty_title: "No encontramos herramientas", google_empty_desc: "Prueba con otra palabra o cambia la categoría.", google_premium_title: "¿Qué significa que una función sea prémium?", google_premium_desc: "Las herramientas básicas no son todas de pago. Google ofrece Workspace for Education Fundamentals sin costo para instituciones educativas que cumplen los requisitos. Sin embargo, funciones avanzadas de Classroom, Meet, almacenamiento o inteligencia artificial pueden requerir Education Plus, un complemento o una configuración institucional específica.", google_premium_note: "Antes de afirmar que una aplicación completa es prémium, hay que revisar qué función y qué edición se están comparando.", google_premium_link: "Consultar las ediciones oficiales de Google for Education", google_footer: "Sección educativa: 15 herramientas de Google"
        },
        en: {
            page_title: "Home | ThermoGlow", quiz_page_title: "Quiz | ThermoGlow", js_page_title: "JavaScript | ThermoGlow", jquery_page_title: "jQuery | ThermoGlow", json_page_title: "JSON | ThermoGlow", hosting_page_title: "Hosting & Domains | ThermoGlow", google_page_title: "15 free Google tools | ThermoGlow",
            nav_inicio: "Home", nav_js: "JavaScript", nav_jquery: "jQuery", nav_json: "JSON", nav_hosting: "Hosting & Domains", nav_cuestionario: "Quiz", nav_contacto: "Contact", nav_productos: "Products", nav_google: "Google", theme_toggle: "Change theme",
            hero_badge: "A different collection", hero_title_1: "Your drink.", hero_title_2: "Your temperature.", hero_title_3: "Your color.", hero_desc: "Cups that change appearance when the temperature changes. Discover the ThermoGlow collection and also learn how a webpage is built.",
            btn_ver_productos: "View products", btn_aprender: "Learn web development", feature_1: "Colorful designs", feature_2: "For your daily life", hero_copy_label: "The color changes with you", hero_caption: "Cold or hot: every sip has its style.",
            carousel_kicker: "LOOK AT THE DETAILS", carousel_title: "A glimpse of the collection", carousel_hint: "Swipe to see more", carousel_1_badge: "01 · Collection", carousel_1_title: "Details for every day", carousel_2_badge: "02 · Color", carousel_2_title: "Give your drink a new tone", carousel_3_badge: "03 · Your routine", carousel_3_title: "A design that accompanies your day", carousel_prev: "Previous", carousel_next: "Next",
            info_1_title: "With cold drinks", info_1_desc: "The surface can show different tones when cooling down.", info_2_title: "With hot drinks", info_2_desc: "Thermochromic materials respond to temperature changes.", info_3_title: "Your way", info_3_desc: "A proposal for students and young people who enjoy original designs.",
            prod_kicker: "CHOOSE YOURS", prod_title: "The ThermoGlow Collection", prod_desc: "Example models to present the product idea.", prod_classic_badge: "Essential", prod_classic_desc: "A 500 ml cup to accompany your classes, walks, or free time.", prod_pro_badge: "Larger capacity", prod_pro_desc: "750 ml model designed for long days and favorite drinks.", prod_mini_badge: "Colorful", prod_mini_desc: "A compact 350 ml format to take anywhere you want.", btn_interes: "I'm interested", prod_disclaimer: "Models, prices, and features are demonstrative for school activity.",
            contact_kicker: "LET'S TALK", contact_title: "Do you have any questions?", contact_desc: "Write to us if you want to know more about the models, their capacities, or the ThermoGlow idea.", contact_item_1_title: "Answering your questions", contact_item_1_desc: "Fill out the form and you will see the confirmation of your message.", contact_item_2_title: "Demo form", contact_item_2_desc: "In this school version, messages are saved only in this browser; they are not yet sent to a server.",
            form_title: "Send us a message", form_desc: "Fields marked with * are required.", label_nombre: "Name *", label_correo: "Email *", label_asunto: "Reason for contact *", label_mensaje: "Message *", placeholder_mensaje: "Write your inquiry here...", btn_enviar: "Send message", form_disclaimer: "Do not enter passwords or sensitive data.", error_nombre: "Please enter your name.", error_correo: "Please enter a valid email.", error_asunto: "Please select the reason for your inquiry.", error_mensaje: "Please write a message of at least 10 characters.", opt_selecciona: "Select an option", opt_info: "Product information", opt_personalizacion: "Cup customization", opt_precios: "Prices and capacities", opt_comentario: "Comment about the page", opt_otro: "Other",
            edu_kicker: "WE ALSO NEED TO LEARN", edu_title: "What technologies make a web work?", edu_desc: "This site includes simple explanations and examples of JavaScript, jQuery, JSON, web hosting, and domains. You can open each topic from the top menu.", btn_repasar: "Review now",
            modal_title: "Thank you for your interest", modal_body: "You have selected a product.", modal_btn: "Understood", footer_slogan: "Your drink, your color.", footer_text: "Educational web development project",
            quiz_badge: "Final Review", quiz_title: "Web Development Quiz", quiz_desc: "Answer the questions and check your result at the end.",
            quiz_q1: "1. Which technology organizes the content of a page?", quiz_q1_a: "CSS", quiz_q1_b: "HTML", quiz_q1_c: "JSON",
            quiz_q2: "2. What is JavaScript mainly used for on a webpage?", quiz_q2_a: "To add interactivity and behavior", quiz_q2_b: "To register a domain", quiz_q2_c: "To host files on a server",
            quiz_q3: "3. What is jQuery?", quiz_q3_a: "A domain system", quiz_q3_b: "A JavaScript library", quiz_q3_c: "An image format",
            quiz_q4: "4. Which statement about JSON is correct?", quiz_q4_a: "It is a text format for exchanging data", quiz_q4_b: "It is a type of hosting", quiz_q4_c: "It is a CSS extension",
            quiz_q5: "5. What is the function of hosting?", quiz_q5_a: "It styles the buttons", quiz_q5_b: "It stores the site's files on a server", quiz_q5_c: "It automatically creates all pages",
            quiz_q6: "6. What is a domain?", quiz_q6_a: "The name or address used to find a site", quiz_q6_b: "A programming language", quiz_q6_c: "An HTML tag",
            quiz_btn_submit: "Grade answers", quiz_btn_reset: "Start over", quiz_link_js: "Review JavaScript", quiz_link_jquery: "Review jQuery", quiz_link_json: "Review JSON", quiz_link_hosting: "Review hosting",
            js_badge: "Topic 01 · Interactivity", js_title: "JavaScript", js_desc: "The language that allows a web page to respond to user actions.", js_what: "What is JavaScript?", js_what_desc: "JavaScript is a programming language mainly used to add behavior to web pages. It can validate forms, open windows, change text, update data, and respond to clicks.", js_roles: "HTML, CSS, and JavaScript have different roles", js_tech: "Technology", js_func: "Function", js_ex: "Example", js_html_func: "Organizes content.", js_html_ex: "Title, image, or form.", js_css_func: "Defines the presentation.", js_css_ex: "Colors, size, and layout.", js_js_func: "Adds behavior.", js_js_ex: "A button that changes a message.", js_vfe: "Variables, functions, and events", js_var: "Variable:", js_var_desc: "stores data, such as a product name.", js_fun: "Function:", js_fun_desc: "groups instructions that can be executed when needed.", js_evt: "Event:", js_evt_desc: "something that happens, such as clicking a button or moving the pointer.", js_demo: "Try an example", js_demo_desc: "Click the button and JavaScript will change the text.", js_demo_msg: "Hello, welcome to ThermoGlow.", js_demo_btn: "Change message", js_demo_success: "The button works!", js_adv: "Advantages and common uses", js_adv_int: "Interactivity", js_adv_int_desc: "Makes controls respond without reloading the entire page.", js_adv_val: "Validation", js_adv_val_desc: "Helps validate form data before submitting it.", js_adv_dyn: "Dynamic content", js_adv_dyn_desc: "Allows text, lists, and interface elements to be updated.", js_prev: "Home", js_next: "Next: jQuery",
            jq_badge: "Topic 02 · Library", jq_title: "jQuery", jq_desc: "A JavaScript library that simplifies frequent tasks, such as selecting elements and creating effects.", jq_what: "What is it and what is it for?", jq_what_desc1: "jQuery is a library created to make working with JavaScript easier. It became popular because it offered a shorter syntax for traversing the HTML document, handling events, modifying elements, and making server requests.", jq_what_desc2: "Its most well-known way of selecting elements starts with the $ sign. For example, $(\"#aviso\") selects the element with the identifier \"aviso\".", jq_pros_cons: "Advantages and disadvantages", jq_pros: "Advantages", jq_pros_1: "Compact syntax.", jq_pros_2: "Makes some visual effects easier.", jq_pros_3: "It was useful for compatibility between older browsers.", jq_cons: "Disadvantages", jq_cons_1: "It needs to load an additional library.", jq_cons_2: "For simple tasks, modern JavaScript may be enough.", jq_cons_3: "You need to know the project's dependencies.", jq_vs: "jQuery vs modern JavaScript", jq_vs_desc: "Today, many element selection, event, and animation functions can be performed directly with JavaScript. jQuery is still present in sites and systems that already use it.", jq_demo: "Try the effects", jq_demo_desc: "These buttons use jQuery to show and hide a message.", jq_demo_msg: "Hello!", jq_demo_msg2: "This message can be shown or hidden.", jq_btn_fade: "Try fadeIn", jq_btn_slide: "Try slideToggle", jq_demo_note: "The example requires an internet connection to load jQuery from its CDN.", jq_prev: "JavaScript", jq_next: "Next: JSON",
            json_badge: "Topic 03 · Data", json_title: "JSON", json_desc: "A simple text format to represent and exchange information between applications.", json_what: "What does JSON mean?", json_what_desc: "JSON stands for JavaScript Object Notation. Although its name refers to JavaScript, it can be used with many programming languages. Its structure is based on key-value pairs, objects, and lists.", json_rules: "Basic rules", json_rules_1: "Keys are written in double quotes.", json_rules_2: "Texts also use double quotes.", json_rules_3: "Key-value pairs are separated by commas.", json_rules_4: "Numbers, strings, booleans, null, objects, and arrays can be used.", json_ex: "Product example", json_ex_desc: "This example describes a tumbler with a name, capacity, a feature, and a list of colors.", json_explore: "Explore the example", json_explore_desc: "The button reads the JSON data and displays it on the screen.", json_btn: "Show product data", json_placeholder: "The data will appear here.", json_note: "JSON is a data format; it is not a programming language.", json_prev: "jQuery", json_next: "Next: Hosting",
            host_badge: "Topic 04 · Publishing", host_title: "Web Hosting and Domains", host_desc: "For a page to be visited on the internet, its files need to be hosted and have an address.", host_what: "What is hosting?", host_what_desc: "Hosting or web hosting is a service that stores a site's files on a server connected to the internet. When a person visits the page, the server delivers those files to the browser.", host_types: "Common types", host_t1: "Shared: multiple sites use resources from the same server.", host_t2: "VPS: offers more isolated and configurable virtual resources.", host_t3: "Dedicated: a server is dedicated to a single client.", host_t4: "Cloud: uses distributed infrastructure to host services.", host_domain: "What is a domain?", host_domain_desc: "The domain is the name people type to find a site, like example.com. The DNS system helps locate the server associated with that name.", host_parts: "Parts of a domain", host_p1: "store: subdomain.", host_p2: "example: chosen name.", host_p3: ".com: extension or top-level domain.", host_pub: "How is a page published?", host_s1: "1. Prepare", host_s1_desc: "Review HTML, CSS, JavaScript, and images.", host_s2: "2. Choose hosting", host_s2_desc: "Select the service suitable for the project.", host_s3: "3. Upload files", host_s3_desc: "Publish the site folder on the server.", host_s4: "4. Connect domain", host_s4_desc: "Configure DNS if using a custom domain.", host_prev: "JSON", host_next: "Go to quiz",
            google_eyebrow: "DIGITAL RESEARCH", google_title: "15 free Google tools", google_desc: "Discover tools to study, create documents, communicate, organize tasks, and search for information.", google_note: "Availability depends on the account, country, and edition. Some advanced educational features may require a paid license.", google_search: "Search for a tool", google_search_ph: "e.g., documents, video calls, maps...", google_filter: "Filter by category", google_f_all: "All", google_f_study: "Study", google_f_prod: "Productivity", google_f_comm: "Communication", google_f_res: "Research", google_count: "Tools found:", google_of: "of", google_clear: "Clear search",
            google_t1: "1. Google Classroom", google_t1_desc: "Allows teachers to organize classes, publish assignments, share materials, and give feedback to their students.", google_t1_acc: "Access: free for main features with a compatible account or institution. Some advanced features depend on the educational edition.", google_t1_link: "Open Classroom",
            google_t2: "2. Google Drive", google_t2_desc: "Stores files in the cloud and allows organizing, sharing, and opening them from different devices.", google_t2_acc: "Access: includes limited free storage; additional space is paid. In educational institutions, storage depends on school policy.", google_t2_link: "Open Drive",
            google_t3: "3. Google Docs", google_t3_desc: "Creates and edits texts, reports, and papers online. Multiple people can collaborate on the same document.", google_t3_acc: "Access: basic features free with a Google account; some AI tools or organizational features may require a compatible plan.", google_t3_link: "Open Docs",
            google_t4: "4. Google Sheets", google_t4_desc: "Organizes data in tables, uses formulas, creates charts, and performs calculations for tasks or projects.", google_t4_acc: "Access: free basic editing; certain AI features and advanced tools depend on the plan.", google_t4_link: "Open Sheets",
            google_t5: "5. Google Slides", google_t5_desc: "Designs slides with text, images, charts, and animations for school presentations or meetings.", google_t5_acc: "Access: free basic creation and editing; some resources or advanced features may vary by account.", google_t5_link: "Open Slides",
            google_t6: "6. Google Forms", google_t6_desc: "Creates surveys, registrations, and quizzes; responses can be organized to review results.", google_t6_acc: "Access: main features are available at no cost; administrative or educational options depend on the edition.", google_t6_link: "Open Forms",
            google_t7: "7. Gmail", google_t7_desc: "Sends and receives emails, attaches files, and organizes messages with labels and filters.", google_t7_acc: "Access: free for personal use with shared storage limits; institutional accounts have managed features.", google_t7_link: "Open Gmail",
            google_t8: "8. Google Meet", google_t8_desc: "Makes video calls for classes, meetings, and remote conversations, with camera, microphone, and screen sharing options.", google_t8_acc: "Access: has free usage with limits; recordings and advanced controls may require an educational or compatible Workspace plan.", google_t8_link: "Open Meet",
            google_t9: "9. Google Calendar", google_t9_desc: "Organizes schedules, due dates, meetings, and reminders to better manage time.", google_t9_acc: "Access: free basic calendar; advanced organizational features may depend on account type.", google_t9_link: "Open Calendar",
            google_t10: "10. Google Sites", google_t10_desc: "Builds simple websites for projects, portfolios, or class information without having to code.", google_t10_acc: "Access: tool available at no cost with a compatible account; publishing restrictions may depend on the school administrator.", google_t10_link: "Open Sites",
            google_t11: "11. Google Keep", google_t11_desc: "Saves quick notes, lists, and reminders; also allows using colors and sharing notes.", google_t11_acc: "Access: main features free with a Google account.", google_t11_link: "Open Keep",
            google_t12: "12. Google Chat", google_t12_desc: "Allows exchanging messages and collaborating in team spaces to organize conversations and projects.", google_t12_acc: "Access: availability depends on the account; some administration options belong to Google Workspace.", google_t12_link: "Open Chat",
            google_t13: "13. Google Scholar", google_t13_desc: "Searches scientific articles, theses, books, and citations to support research papers.", google_t13_acc: "Access: free search engine; some found documents may be behind editorial subscriptions.", google_t13_link: "Open Google Scholar",
            google_t14: "14. Google Maps", google_t14_desc: "Consults maps, locations, routes, and place data; useful for studying geography and planning trips.", google_t14_acc: "Access: free basic use; certain features and services may vary by region or use.", google_t14_link: "Open Maps",
            google_t15: "15. Google Translate", google_t15_desc: "Translates words, phrases, and texts between different languages; can help understand study materials.", google_t15_acc: "Access: free tool; quality may vary and it is advisable to review important translations.", google_t15_link: "Open Translate",
            google_empty_title: "No tools found", google_empty_desc: "Try another word or change the category.", google_premium_title: "What does it mean for a feature to be premium?", google_premium_desc: "Basic tools are not all paid. Google offers Workspace for Education Fundamentals at no cost for educational institutions that meet the requirements. However, advanced features of Classroom, Meet, storage, or artificial intelligence may require Education Plus, an add-on, or a specific institutional configuration.", google_premium_note: "Before claiming that a complete application is premium, one must check which feature and which edition are being compared.", google_premium_link: "Check the official Google for Education editions", google_footer: "Educational section: 15 Google tools"
        }
    };

    function applyLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('thermoglow_lang', lang);
        
        const specificTitle = translations[lang].quiz_page_title; // Fallback logic handled per page
        if (document.querySelector('[data-i18n="quiz_page_title"]')) document.title = translations[lang].quiz_page_title;
        else if (document.querySelector('[data-i18n="js_page_title"]')) document.title = translations[lang].js_page_title;
        else if (document.querySelector('[data-i18n="jquery_page_title"]')) document.title = translations[lang].jquery_page_title;
        else if (document.querySelector('[data-i18n="json_page_title"]')) document.title = translations[lang].json_page_title;
        else if (document.querySelector('[data-i18n="hosting_page_title"]')) document.title = translations[lang].hosting_page_title;
        else if (document.querySelector('[data-i18n="google_page_title"]')) document.title = translations[lang].google_page_title;
        else document.title = translations[lang].page_title;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key].includes('<') ? translations[lang][key] : translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) element.placeholder = translations[lang][key];
        });

        const textoIdioma = document.getElementById('textoIdioma');
        if (textoIdioma) textoIdioma.textContent = lang === 'es' ? 'ES | EN' : 'EN | ES';
    }

    const savedLang = localStorage.getItem('thermoglow_lang') || 'es';
    applyLanguage(savedLang);

    const btnIdioma = document.getElementById('btnIdioma');
    if (btnIdioma) {
        btnIdioma.addEventListener('click', () => {
            const currentLang = document.documentElement.lang;
            applyLanguage(currentLang === 'es' ? 'en' : 'es');
        });
    }

    // TEMA OSCURO/CLARO
    const btnTema = document.getElementById('btnTema');
    const iconoTema = document.getElementById('iconoTema');
    const htmlElement = document.documentElement;
    const temaGuardado = localStorage.getItem('thermoglow_theme') || 'light';
    htmlElement.setAttribute('data-bs-theme', temaGuardado);
    if(iconoTema) iconoTema.className = temaGuardado === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            const nuevoTema = htmlElement.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-bs-theme', nuevoTema);
            localStorage.setItem('thermoglow_theme', nuevoTema);
            if(iconoTema) iconoTema.className = nuevoTema === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
        });
    }

    // MODAL PRODUCTOS
    const botonesInteres = document.querySelectorAll('.btn-interes');
    const interesModalEl = document.getElementById('interesModal');
    if (botonesInteres.length > 0 && interesModalEl) {
        const interesModal = new bootstrap.Modal(interesModalEl);
        const interesTexto = document.getElementById('interesTexto');
        const interesTitulo = document.getElementById('interesTitulo');
        const modalTranslations = { es: { titulo: "Interés en: ", cuerpo: "Has seleccionado el producto " }, en: { titulo: "Interest in: ", cuerpo: "You have selected the product " } };
        botonesInteres.forEach(boton => {
            boton.addEventListener('click', () => {
                const producto = boton.getAttribute('data-producto');
                const lang = document.documentElement.lang;
                interesTitulo.textContent = modalTranslations[lang].titulo + producto;
                interesTexto.textContent = modalTranslations[lang].cuerpo + producto + ".";
                interesModal.show();
            });
        });
    }

        // ==========================================
    // FORMULARIO CONTACTO - CLOUDFLARE + DISCORD
    // ==========================================

    const formContacto = document.getElementById('formContacto');
    const contactoResultado = document.getElementById('contactoResultado');

    if (formContacto) {

        formContacto.addEventListener('submit', async (e) => {

            e.preventDefault();

            // Validar formulario
            if (!formContacto.checkValidity()) {
                e.stopPropagation();
                formContacto.classList.add('was-validated');
                return;
            }

            const lang = document.documentElement.lang;

            const botonEnviar =
                formContacto.querySelector('button[type="submit"]');

            // Obtener información del formulario
            const datos = {
                nombre: document
                    .getElementById('contactoNombre')
                    .value
                    .trim(),

                correo: document
                    .getElementById('contactoCorreo')
                    .value
                    .trim(),

                asunto: document
                    .getElementById('contactoAsunto')
                    .value,

                mensaje: document
                    .getElementById('contactoMensaje')
                    .value
                    .trim()
            };

            try {

                // Desactivar botón mientras se envía
                if (botonEnviar) {
                    botonEnviar.disabled = true;

                    botonEnviar.textContent =
                        lang === 'es'
                            ? 'Enviando...'
                            : 'Sending...';
                }

                // Mostrar mensaje mientras se envía
                contactoResultado.className =
                    'alert alert-info mt-4';

                contactoResultado.textContent =
                    lang === 'es'
                        ? 'Enviando mensaje...'
                        : 'Sending message...';

                contactoResultado.classList.remove('d-none');


                // ==========================================
                // ENVIAR DATOS AL CLOUDFLARE WORKER
                // ==========================================

                const respuesta = await fetch(
                    'https://thermoglow-contacto.3166980.workers.dev/',
                    {
                        method: 'POST',

                        headers: {
                            'Content-Type': 'application/json'
                        },

                        body: JSON.stringify(datos)
                    }
                );


                // Si Cloudflare devuelve error
                if (!respuesta.ok) {

                    throw new Error(
                        `Error HTTP: ${respuesta.status}`
                    );

                }


                // ==========================================
                // MENSAJE ENVIADO CORRECTAMENTE
                // ==========================================

                contactoResultado.className =
                    'alert alert-success mt-4';

                contactoResultado.textContent =
                    lang === 'es'
                        ? '¡Mensaje enviado con éxito!'
                        : 'Message sent successfully!';


                // Limpiar formulario
                formContacto.reset();

                formContacto.classList.remove(
                    'was-validated'
                );


            } catch (error) {

                // ==========================================
                // ERROR AL ENVIAR
                // ==========================================

                console.error(
                    'Error al enviar el formulario:',
                    error
                );

                contactoResultado.className =
                    'alert alert-danger mt-4';

                contactoResultado.textContent =
                    lang === 'es'
                        ? 'No se pudo enviar el mensaje. Inténtalo nuevamente.'
                        : 'The message could not be sent. Please try again.';


            } finally {

                // Volver a activar botón
                if (botonEnviar) {

                    botonEnviar.disabled = false;

                    botonEnviar.textContent =
                        document.documentElement.lang === 'es'
                            ? 'Enviar mensaje'
                            : 'Send message';

                }


                // Ocultar alerta después de 5 segundos
                setTimeout(() => {

                    contactoResultado.classList.add(
                        'd-none'
                    );

                }, 5000);

            }

        });

    }

    // CUESTIONARIO
    const formCuestionario = document.getElementById('formCuestionario');
    const resultadoQuiz = document.getElementById('resultadoQuiz');
    const btnLimpiar = document.getElementById('btnLimpiar');
    if (formCuestionario) {
        formCuestionario.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!formCuestionario.checkValidity()) { formCuestionario.classList.add('was-validated'); return; }
            const answers = { p1: "b", p2: "a", p3: "b", p4: "a", p5: "b", p6: "a" };
            let score = 0;
            Object.entries(answers).forEach(([question, answer]) => {
                const selected = formCuestionario.querySelector(`input[name="${question}"]:checked`);
                if (selected?.value === answer) score++;
            });
            const lang = document.documentElement.lang;
            resultadoQuiz.classList.remove('d-none', 'alert-success', 'alert-warning');
            if (score === 6) {
                resultadoQuiz.classList.add('alert-success');
                resultadoQuiz.textContent = lang === 'es' ? `Tu resultado es ${score} de 6. ¡Excelente, contestaste todo correctamente!` : `Your score is ${score} out of 6. Excellent, all your answers are correct!`;
            } else if (score >= 4) {
                resultadoQuiz.classList.add('alert-success');
                resultadoQuiz.textContent = lang === 'es' ? `Tu resultado es ${score} de 6. ¡Vas bien! Revisa las preguntas que te faltaron.` : `Your score is ${score} out of 6. Good job! Review the questions you missed.`;
            } else {
                resultadoQuiz.classList.add('alert-warning');
                resultadoQuiz.textContent = lang === 'es' ? `Tu resultado es ${score} de 6. Puedes repasar los temas y volver a intentarlo.` : `Your score is ${score} out of 6. Review the topics and try again.`;
            }
        });
        if (btnLimpiar) {
            btnLimpiar.addEventListener('click', () => {
                formCuestionario.classList.remove('was-validated');
                resultadoQuiz.classList.add('d-none');
                resultadoQuiz.textContent = '';
            });
        }
    }

    // DEMO JS
    const btnDemo = document.getElementById('btnDemo');
    const mensajeDemo = document.getElementById('mensajeDemo');
    if (btnDemo && mensajeDemo) {
        btnDemo.addEventListener('click', () => {
            const lang = document.documentElement.lang;
            mensajeDemo.textContent = lang === 'es' ? '¡El botón funciona!' : 'The button works!';
        });
    }

    // DEMO JSON
    const btnLeerJson = document.getElementById('btnLeerJson');
    const resultadoJson = document.getElementById('resultadoJson');
    if (btnLeerJson && resultadoJson) {
        btnLeerJson.addEventListener('click', () => {
            const lang = document.documentElement.lang;
            const product = { producto: "ThermoGlow Classic", capacidadMl: 500, cambiaColor: true, colores: ["azul", "violeta"] };
            const colorsInEnglish = { azul: "blue", violeta: "purple" };
            const colors = product.colores.map(c => lang === 'en' ? (colorsInEnglish[c] || c) : c).join(", ");
            
            resultadoJson.innerHTML = `
                <strong>${product.producto}</strong>
                <span class="text-secondary mt-2 d-block">${lang === 'es' ? 'Capacidad' : 'Capacity'}: ${product.capacidadMl} ml</span>
                <span class="text-secondary d-block">${lang === 'es' ? 'Cambia de color' : 'Changes color'}: ${product.cambiaColor ? (lang === 'es' ? 'Sí' : 'Yes') : (lang === 'es' ? 'No' : 'No')}</span>
                <span class="text-secondary d-block">${lang === 'es' ? 'Colores' : 'Colors'}: ${colors}</span>
            `;
        });
    }

    // AÑO FOOTER
    const anioSpan = document.getElementById('anio');
    if (anioSpan) anioSpan.textContent = new Date().getFullYear();
});
// ==========================================
// MÚSICA DE FONDO
// ==========================================
const musica = document.getElementById('musicaFondo');
const btnMusica = document.getElementById('btnMusica');
const iconoMusica = document.getElementById('iconoMusica');

if (musica && btnMusica) {
    // Volumen bajo para que no moleste
    musica.volume = 0.3;
    
    // Cargar preferencia guardada
    const musicaActivada = localStorage.getItem('pv-musica') === 'true';
    
    if (musicaActivada) {
        musica.play().then(() => {
            btnMusica.classList.add('activa');
            iconoMusica.className = 'bi bi-volume-up-fill';
        }).catch(err => {
            console.log('Autoplay bloqueado, esperando interacción');
        });
    }
    
    // Botón para activar/desactivar
    btnMusica.addEventListener('click', function() {
        if (musica.paused) {
            musica.play().then(() => {
                btnMusica.classList.add('activa');
                iconoMusica.className = 'bi bi-volume-up-fill';
                localStorage.setItem('pv-musica', 'true');
            }).catch(err => {
                console.error('Error al reproducir:', err);
            });
        } else {
            musica.pause();
            btnMusica.classList.remove('activa');
            iconoMusica.className = 'bi bi-volume-mute-fill';
            localStorage.setItem('pv-musica', 'false');
        }
    });
}
