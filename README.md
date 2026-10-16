# Portafolio de Proyecto Web: ThermoGlow

**Estudiante:** saira lsbeth cortez aviles  
**Fecha:** 16 de octubre del 2026
**Enlace al Sitio Web (Vercel):** https://tu-proyecto.vercel.app  
**Repositorio GitHub:** https://github.com/usuario/thermoglow

---

## 1. Identidad de Marca y Producto

### 📋 Ficha del Producto
* **Nombre Comercial:** ThermoGlow  
* **Descripción:** Vasos inteligentes que cambian de color según la temperatura de la bebida. Tecnología termocrómica aplicada a productos cotidianos para crear una experiencia única y personalizada.  
* **Público Objetivo:** Jóvenes y adultos de 18-35 años que buscan productos innovadores, tecnológicos y personalizables para su día a día.

### 🎨 Diseño Visual

**Logotipo:**  
![Logotipo ThermoGlow](assets/logo.png)

**Paleta de Colores:**

| Color | Código HEX | Uso en el Sitio |
| :--- | :--- | :--- |
| Dominante | `#161827` | Header y Navegación |
| Secundario | `#2F5BD6` | Tarjetas y Botones |
| Acento | `#2B579A` | Highlights y Hovers |
| Texto Principal | `#F5F5FA` | Contenido principal |
| Texto Secundario | `#A7AEC4` | Textos complementarios |

**Demostración del Carrusel (Bootstrap):**  
![Carrusel de Productos](assets/carousel-demo.png)

---

## 2. Investigación Técnica

Resumen informativo de las subpáginas creadas:

1. **JavaScript (Vanilla):** Implementación de interactividad dinámica: cambio de tema claro/oscuro, validación de formularios en tiempo real, filtrado de productos y manipulación del DOM para actualizar el carrito de compras sin recargar la página.

2. **jQuery:** Ventajas sobre JavaScript vanilla: sintaxis simplificada para selección de elementos, efectos visuales predefinidos (fadeIn, slideToggle) y manejo eficiente de eventos. Se utilizó para animaciones suaves en la galería de productos.

3. **JSON:** Estructura clave-valor para almacenar datos de productos (nombre, precio, categoría, disponibilidad). Permite intercambiar información entre el frontend y backend de manera estandarizada y fácil de parsear.

4. **Web Hosting y Dominios:** Explicación de Vercel como plataforma de hosting estático gratuito, configuración de DNS para dominios personalizados, y diferencias entre dominios .com, .app y subdominios gratuitos. Implementación de HTTPS automático.

---

## 3. Integraciones Especiales

### 📬 Formulario de Contacto + Webhook de Discord

Explicación técnica del funcionamiento:

1. El usuario completa el formulario en la web (nombre, email, mensaje).
2. JavaScript captura los datos y ejecuta una petición POST asíncrona (fetch) hacia la URL del Webhook de Discord configurado.
3. Los datos se envían en formato JSON con embeds personalizados usando los colores de marca ThermoGlow.
4. La notificación se despliega inmediatamente en el canal de Discord del servidor, mostrando: nombre del cliente, email de contacto, mensaje completo y timestamp.

**Código de ejemplo:**
```javascript
const webhookURL = 'https://discord.com/api/webhooks/...';
const data = {
  embeds: [{
    title: 'Nuevo mensaje de ThermoGlow',
    color: 0x2F5BD6,
    fields: [
      { name: 'Nombre', value: nombre },
      { name: 'Email', value: email },
      { name: 'Mensaje', value: mensaje }
    ]
  }]
};
fetch(webhookURL, { method: 'POST', body: JSON.stringify(data) });