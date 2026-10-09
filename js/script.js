document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeButton = document.getElementById("btnTema");
  const savedTheme = localStorage.getItem("thermoglow-theme");

  function applyTheme(theme) {
    root.setAttribute("data-bs-theme", theme);
    if (themeButton) {
      const icon = themeButton.querySelector("i");
      if (icon) icon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
      themeButton.setAttribute("aria-label", theme === "dark" ? "Activar tema claro" : "Activar tema oscuro");
      themeButton.title = theme === "dark" ? "Activar tema claro" : "Activar tema oscuro";
    }
  }
  applyTheme(savedTheme === "dark" ? "dark" : "light");
  themeButton?.addEventListener("click", () => {
    const next = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("thermoglow-theme", next);
  });
  const year = document.getElementById("anio");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".btn-interes").forEach(button => {
    button.addEventListener("click", () => {
      const product = button.dataset.producto || "el producto";
      const text = document.getElementById("interesTexto");
      if (text) text.textContent = `Has seleccionado ${product}. En una tienda real, aquí se podría continuar con la consulta o compra.`;
      const modalElement = document.getElementById("interesModal");
      if (modalElement && window.bootstrap) bootstrap.Modal.getOrCreateInstance(modalElement).show();
    });
  });

  const demoButton = document.getElementById("btnDemo");
  demoButton?.addEventListener("click", () => {
    const message = document.getElementById("mensajeDemo");
    if (message) message.textContent = "¡El botón funciona! JavaScript cambió este mensaje.";
  });

  const jsonButton = document.getElementById("btnLeerJson");
  jsonButton?.addEventListener("click", () => {
    const textJSON = '{"producto":"ThermoGlow Classic","capacidadMl":500,"cambiaColor":true,"colores":["azul","violeta"]}';
    const product = JSON.parse(textJSON);
    const result = document.getElementById("resultadoJson");
    if (result) result.innerHTML = `<strong>${product.producto}</strong><span class="text-secondary mt-2">Capacidad: ${product.capacidadMl} ml</span><span class="text-secondary">Cambia de color: ${product.cambiaColor ? "Sí" : "No"}</span><span class="text-secondary">Colores: ${product.colores.join(", ")}</span>`;
  });

  const quiz = document.getElementById("formCuestionario");
  quiz?.addEventListener("submit", event => {
    event.preventDefault();
    if (!quiz.reportValidity()) return;
    const answers = {p1:"b", p2:"a", p3:"b", p4:"a", p5:"b", p6:"a"};
    let score = 0;
    Object.entries(answers).forEach(([question, answer]) => {
      if (quiz.querySelector(`input[name="${question}"]:checked`)?.value === answer) score++;
    });
    const result = document.getElementById("resultadoQuiz");
    if (result) {
      result.className = `alert mt-4 ${score >= 4 ? "alert-success" : "alert-warning"}`;
      result.textContent = `Tu resultado es ${score} de ${Object.keys(answers).length}. ${score === 6 ? "¡Excelente, contestaste todo correctamente!" : score >= 4 ? "¡Vas bien! Revisa las preguntas que te faltaron." : "Puedes repasar los temas y volver a intentarlo."}`;
    }
  });
  document.getElementById("btnLimpiar")?.addEventListener("click", () => {
    const result = document.getElementById("resultadoQuiz");
    if (result) { result.className = "alert mt-4 d-none"; result.textContent = ""; }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (!window.jQuery) return;
  const panel = $("#panelEfecto");
  $("#btnFade").on("click", () => { panel.stop(true, true).hide().fadeIn(500); });
  $("#btnSlide").on("click", () => { panel.stop(true, true).slideToggle(350); });
});

// Formulario de contacto: demostración local para el proyecto escolar.
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("formContacto");
  const result = document.getElementById("contactoResultado");
  contactForm?.addEventListener("submit", event => {
    event.preventDefault();
    contactForm.classList.add("was-validated");
    if (!contactForm.checkValidity()) {
      result?.classList.add("d-none");
      contactForm.querySelector(":invalid")?.focus();
      return;
    }
    const formData = new FormData(contactForm);
    const entry = {
      nombre: String(formData.get("nombre")).trim(),
      correo: String(formData.get("correo")).trim(),
      asunto: String(formData.get("asunto")),
      mensaje: String(formData.get("mensaje")).trim(),
      fecha: new Date().toISOString()
    };
    try {
      const previous = JSON.parse(localStorage.getItem("thermoglow-contactos") || "[]");
      const messages = Array.isArray(previous) ? previous : [];
      messages.push(entry);
      localStorage.setItem("thermoglow-contactos", JSON.stringify(messages.slice(-20)));
      if (result) {
        result.className = "alert alert-success mt-4";
        result.textContent = `¡Gracias, ${entry.nombre}! El mensaje quedó guardado en este navegador como demostración. Para recibir mensajes reales, el sitio debe conectarse a un servicio o servidor.`;
      }
      contactForm.reset();
      contactForm.classList.remove("was-validated");
    } catch (error) {
      if (result) {
        result.className = "alert alert-warning mt-4";
        result.textContent = "El navegador no permitió guardar el mensaje. Puedes revisar los permisos de almacenamiento e intentarlo de nuevo.";
      }
    }
  });
});
