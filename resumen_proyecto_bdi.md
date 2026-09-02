# Resumen del proyecto: Cuestionario digital BDI-II

## Contexto
Psicóloga clínica (correo `ps.lizbanyarango@gmail.com`) necesitaba digitalizar el **Inventario de Depresión de Beck (BDI-II)** — un instrumento clínico con licencia de uso ya obtenida por la usuaria — para enviarlo a sus pacientes por link, que lo diligencien desde cualquier dispositivo, y que las respuestas le lleguen directo a su correo con un solo clic.

## Identidad de marca (extraída de "INFORMACIÓN DE MARCA.docx")
- **Paciente ideal:** público objetivo de 20 a 40 años.
- **Enfoque:** cognitivo-conductual basado en evidencia, complementado con terapias contextuales. Áreas: ansiedad, autoexigencia, relaciones interpersonales, procesos de adaptación a cambios.
- **Política del consultorio:** citas virtuales de 60 minutos.
- **Costo:** 100 mil COP por sesión, o paquete de 4 sesiones por 350 mil COP.
- **Colores de marca:** `#D9DD92` (verde salvia claro), `#776472` (ciruela/mauve), `#DB9065` (terracota), `#646F4B` (oliva), `#71816D` (musgo).
- **Tipografías indicadas:** títulos "Guía" (no se encontró en Google Fonts — se sustituyó por **Fraunces**, pendiente confirmar si existe el archivo real), subtítulos **Arsenal**, texto **Lustria** (ambas sí están en Google Fonts).

## Qué se construyó
Una página web (HTML/CSS/JS autocontenido, sin frameworks) con:
- Diseño responsive (probado en escritorio y móvil, modo claro y oscuro) usando la paleta y tipografías de marca.
- Encabezado de datos del paciente (nombre, edad, sexo, estado civil, ocupación, educación, fecha).
- Los 21 ítems oficiales del BDI-II con sus opciones textuales completas (incluye los sub-ítems 1a/1b/2a/2b/3a/3b de los ítems 16 y 18 sobre sueño y apetito).
- Cálculo automático del puntaje total (no se muestra al paciente, solo se envía a la psicóloga).
- Nota de seguridad visible con la Línea 106 (salud mental Colombia) y 123 (emergencias), dado que el ítem 9 trata sobre ideación suicida.
- Envío de respuestas vía **Formspree** (`https://formspree.io/f/mjyvwygv`, ya configurado y verificado) usando `fetch` + `FormData`. Cada pregunta se envía con su **nombre completo** (ej. "01. Tristeza") y la **respuesta literal completa** como valor (no solo números), más un campo con el puntaje total.
- Enlace de respaldo (`mailto:`) siempre visible por si el envío automático falla.

## Decisiones técnicas importantes (para no repetir errores)
1. **Se intentó publicar como Claude Artifact** (`claude.ai/code/artifact/...`) pero se descartó como canal de distribución a pacientes porque:
   - El entorno de Artifacts corre en un iframe con sandbox que **bloquea `fetch`/XHR hacia dominios externos no incluidos en su lista blanca de CDNs** (Formspree no está permitido) — el envío automático nunca llegaba.
   - La navegación forzada por script (`window.location.href = 'mailto:...'`) también queda bloqueada por el mismo sandbox.
   - Además, se observaron fallos de carga intermitentes para visitantes externos no autenticados en celular (icono de "contenido roto", pantalla de "Sign in").
2. **Solución final:** el mismo archivo HTML se desplegó como **sitio estático independiente en Netlify** (fuera del entorno de Claude), donde no aplican esas restricciones — se confirmó por pruebas reales que el `fetch` a Formspree funciona correctamente ahí.
3. Formspree requiere **confirmar el primer envío** desde el correo del formulario (control antispam, ocurre una sola vez) — ya se hizo.
4. El campo oculto de puntaje usa `data-score` en cada radio (para el cálculo interno) y el `value`/`name` visibles son el texto legible de la pregunta y la respuesta — así el correo que llega es legible para la psicóloga, no solo números.

## Estado actual
- ✅ Sitio publicado y funcionando en **Netlify** (dominio propio, la usuaria tiene el link — no depende de claude.ai).
- ✅ Formspree conectado y verificado, entregando correos con nombre de pregunta + respuesta completa.
- ✅ Archivo `index.html` (versión definitiva, autocontenida) entregado a la usuaria para que lo guarde y pueda volver a subirlo a Netlify (pestaña "Deploys" → arrastrar el archivo) si necesita actualizarlo.

## Pendientes / posibles siguientes pasos
- Confirmar si existe el archivo real de la tipografía "Guía" (actualmente sustituida por Fraunces) para reemplazarla si la usuaria la consigue.
- El plan gratuito de Formspree permite 50 envíos al mes; si la consulta crece, considerar plan pago.
- Si se quiere volver a alojar en un Claude Artifact en el futuro, recordar la limitación de CSP/sandbox descrita arriba (no usar `fetch` ni navegación por script hacia dominios externos ahí).

## Enlaces y credenciales relevantes (recuérdalos, no están en este archivo por seguridad de la usuaria)
- Endpoint Formspree: `https://formspree.io/f/mjyvwygv`
- Correo destino de las respuestas: `ps.lizbanyarango@gmail.com`
- Link del sitio en Netlify: (la usuaria lo tiene guardado — pedírselo si se retoma el proyecto)
