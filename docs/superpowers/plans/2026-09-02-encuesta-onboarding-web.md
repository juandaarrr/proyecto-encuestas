# Encuesta de Onboarding Providencia — Página Web (Netlify Forms) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single self-contained web page (`web-encuesta-onboarding/index.html`) that reproduces the 20-question Providencia onboarding survey with brand styling, computes hidden integration scores, submits through native Netlify Forms (no Formspree, no Google Forms), and deploys via a GitHub-connected Netlify site that emails responses to `Larango@providenciaco.com`.

**Architecture:** One static HTML file with inline CSS and a small inline `<script>`, plus one separate plain-JS file (`scoring.js`) holding the pure score-averaging functions so they can be unit-tested with Node's built-in test runner (no build step, no test framework dependency). The 12 scale questions (5-10 technical, 11-16 cultural) are rendered from two JS data arrays through one shared render function to avoid repeating near-identical markup 12 times. Netlify Forms handles storage/email; there is no backend code of our own.

**Tech Stack:** Plain HTML5, CSS3 (custom properties, `prefers-color-scheme`), vanilla JS (no frameworks, no bundler), Google Fonts (Baloo 2 + Inter), Node.js built-in test runner (`node --test`) for the one pure-logic file, Netlify Forms, GitHub.

## Global Constraints

- Colors (exact hex, from `codigos de color.txt`): verde brillante `#56BE27`, verde oscuro `#214229`, amarillo `#FFEE00`.
- Destination email for all form notifications: `Larango@providenciaco.com`.
- Single continuous scroll page — no multi-step/wizard navigation.
- Submissions go through native Netlify Forms (`data-netlify="true"`) — never Formspree, never Google Forms.
- No frameworks, no build tools, no npm dependencies shipped to the browser.
- Questions 1-16 required; questions 17-20 (open text) optional — exact wording must match `Preguntas_Encuesta_Onboarding_Final.md`.
- Hidden score fields (`puntuacion_tecnica`, `puntuacion_cultural`, `puntuacion_general`) are computed client-side and submitted with the form, but never shown to the respondent.
- On submit failure, the filled-in form must NOT be cleared — the respondent must be able to retry without re-typing.
- File lives in the existing repo at `C:\Users\Windows 10 Pro\OneDrive\Desktop\PROYECTO CORREOS CODE\PROYECTO CORREOS CODE`, already pushed to `https://github.com/juandaarrr/proyecto-encuestas`.

---

### Task 1: Base HTML shell, brand CSS, header

**Files:**
- Create: `web-encuesta-onboarding/index.html`

**Interfaces:**
- Produces: root element `header.encabezado` (logo + title + intro), CSS custom properties (`--verde-brillante`, `--verde-oscuro`, `--amarillo`, `--fondo`, `--texto`, `--fuente-titulo`, `--fuente-texto`) usable by all later tasks, CSS classes `.pregunta`, `.pregunta-escala`, `.escala`, `.chip`, `.escala-etiquetas`, `.boton-enviar`, `.mensaje-estado`, `.mensaje-error` that later tasks rely on for styling.

- [ ] **Step 1: Create the file with full HTML shell, fonts, and CSS**

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Encuesta de Experiencia de Onboarding - Providencia S.A.</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --verde-brillante: #56BE27;
    --verde-oscuro: #214229;
    --amarillo: #FFEE00;
    --fondo: #ffffff;
    --fondo-tarjeta: #f5f9f2;
    --texto: #214229;
    --borde: #d7e3d0;
    --fuente-titulo: 'Baloo 2', sans-serif;
    --fuente-texto: 'Inter', sans-serif;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --fondo: #12190f;
      --fondo-tarjeta: #1b2618;
      --texto: #eef5ea;
      --borde: #2c3b27;
    }
  }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    background: var(--fondo);
    color: var(--texto);
    font-family: var(--fuente-texto);
    line-height: 1.5;
  }

  .contenedor {
    max-width: 720px;
    margin: 0 auto;
    padding: 24px 20px 64px;
  }

  .encabezado {
    text-align: center;
    padding: 32px 0 16px;
  }

  .logo-marca {
    font-family: var(--fuente-titulo);
    font-weight: 700;
    color: var(--verde-brillante);
    font-size: 1.8rem;
    letter-spacing: 0.03em;
    margin: 0 0 4px;
  }

  .logo-marca span {
    display: block;
    font-size: 1rem;
    color: var(--texto);
    font-weight: 600;
  }

  .encabezado h1 {
    font-family: var(--fuente-titulo);
    font-size: 1.5rem;
    margin: 16px 0 12px;
  }

  .intro {
    font-size: 0.95rem;
    opacity: 0.9;
  }

  .bloque {
    background: var(--fondo-tarjeta);
    border: 1px solid var(--borde);
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .bloque h2 {
    font-family: var(--fuente-titulo);
    font-size: 1.15rem;
    color: var(--verde-oscuro);
    margin-top: 0;
  }

  @media (prefers-color-scheme: dark) {
    .bloque h2 { color: var(--verde-brillante); }
  }

  .pregunta {
    margin-bottom: 20px;
  }

  .pregunta label,
  .pregunta-texto {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
  }

  input[type="text"],
  input[type="email"],
  input[type="date"],
  select,
  textarea {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid var(--borde);
    border-radius: 8px;
    font-family: var(--fuente-texto);
    font-size: 1rem;
    background: var(--fondo);
    color: var(--texto);
  }

  textarea { resize: vertical; }

  .escala {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .chip {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid var(--verde-brillante);
    font-weight: 600;
    cursor: pointer;
  }

  .chip input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .chip:has(input:checked) {
    background: var(--verde-brillante);
    color: #ffffff;
  }

  .escala-etiquetas {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    opacity: 0.75;
    margin-top: 6px;
  }

  .boton-enviar {
    display: block;
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 10px;
    background: var(--verde-brillante);
    color: #ffffff;
    font-family: var(--fuente-titulo);
    font-size: 1.05rem;
    font-weight: 700;
    cursor: pointer;
  }

  .boton-enviar:hover { filter: brightness(0.95); }

  .mensaje-estado {
    text-align: center;
    padding: 24px;
    border-radius: 16px;
    background: var(--fondo-tarjeta);
    border: 1px solid var(--borde);
  }

  .mensaje-error {
    border-color: #c0392b;
    color: #c0392b;
  }

  @media (max-width: 480px) {
    .encabezado h1 { font-size: 1.25rem; }
    .chip { width: 40px; height: 40px; }
  }
</style>
</head>
<body>
<div class="contenedor">
  <header class="encabezado">
    <p class="logo-marca">PROVIDENCIA<span>100 AÑOS</span></p>
    <h1>Encuesta de Experiencia de Onboarding</h1>
    <p class="intro">
      Bienvenido/a a Providencia. Valoramos tu experiencia y queremos asegurar que tu integración sea lo mejor posible.<br><br>
      Esta encuesta nos ayuda a entender cómo ha sido tu proceso de integración y dónde podemos mejorar.<br><br>
      ⏱️ Tiempo: 7-8 minutos &nbsp;·&nbsp; 🔒 Confidencial: Solo verá el área de RH &nbsp;·&nbsp; ✅ Tu honestidad es lo más valioso
    </p>
  </header>
</div>
</body>
</html>
```

- [ ] **Step 2: Manual verification in browser**

Open `web-encuesta-onboarding/index.html` directly by double-clicking it (or dragging it into a browser window). Verify:
- The page title bar shows "Encuesta de Experiencia de Onboarding - Providencia S.A.".
- "PROVIDENCIA" appears in bright green (`#56BE27`), bold, with "100 AÑOS" beneath it.
- The intro paragraph mentions "7-8 minutos" and "Confidencial".
- Resize the browser window to a narrow (mobile) width — the heading text shrinks and nothing overflows horizontally.
- If your OS is set to dark mode, the background is dark green-black and text is light; if in light mode, background is white.

- [ ] **Step 3: Commit**

```bash
git add web-encuesta-onboarding/index.html
git commit -m "feat: add base HTML shell and brand styling for onboarding survey page"
```

---

### Task 2: Form shell + Section 1 (basic info)

**Files:**
- Modify: `web-encuesta-onboarding/index.html` (insert before the closing `</div>` of `.contenedor`, i.e. right after `</header>`)

**Interfaces:**
- Produces: `<form id="encuestaForm" name="encuesta-onboarding-providencia">` with Netlify attributes, containing `section#seccion-1` with fields named `nombre`, `correo`, `departamento`, `fecha_ingreso`. Later tasks append more `<section>` elements and the submit button inside this same `<form>`.

- [ ] **Step 1: Insert the form opening tag, hidden Netlify fields, and Section 1**

In `web-encuesta-onboarding/index.html`, immediately after the closing `</header>` tag (and still inside `<div class="contenedor">`), add:

```html
  <form name="encuesta-onboarding-providencia" method="POST" data-netlify="true" id="encuestaForm">
    <input type="hidden" name="form-name" value="encuesta-onboarding-providencia">
    <p style="position:absolute; left:-9999px;">
      <label>No llenar este campo si eres humano: <input name="bot-field"></label>
    </p>

    <section class="bloque" id="seccion-1">
      <h2>Información Básica</h2>

      <div class="pregunta">
        <label for="nombre">¿Cuál es tu nombre completo?</label>
        <input type="text" id="nombre" name="nombre" required>
      </div>

      <div class="pregunta">
        <label for="correo">¿Cuál es tu correo empresarial?</label>
        <input type="email" id="correo" name="correo" required>
      </div>

      <div class="pregunta">
        <label for="departamento">¿En qué departamento o área estás trabajando?</label>
        <select id="departamento" name="departamento" required>
          <option value="" disabled selected>Selecciona una opción</option>
          <option value="Recursos Humanos">Recursos Humanos</option>
          <option value="Operaciones">Operaciones</option>
          <option value="Comercial/Ventas">Comercial/Ventas</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Administración">Administración</option>
          <option value="Servicios al Cliente">Servicios al Cliente</option>
          <option value="Logística">Logística</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div class="pregunta">
        <label for="fecha_ingreso">¿Cuál es tu fecha de ingreso a Providencia?</label>
        <input type="date" id="fecha_ingreso" name="fecha_ingreso" required>
      </div>
    </section>

  </form>
```

- [ ] **Step 2: Manual verification in browser**

Reopen `web-encuesta-onboarding/index.html`. Verify:
- A card titled "Información Básica" appears below the header, styled with the light-green card background.
- It has 4 fields: text input, email input, a dropdown with 8 department options (first one disabled/placeholder), and a date picker.
- Try submitting with fields empty (there's no submit button yet, but you can confirm via browser dev tools that all 4 inputs have the `required` attribute using `document.querySelectorAll('#seccion-1 [required]').length` in the console — it should print `4`).

- [ ] **Step 3: Commit**

```bash
git add web-encuesta-onboarding/index.html
git commit -m "feat: add Netlify form shell and basic-info section"
```

---

### Task 3: Scale-question renderer + Section 2 (technical experience)

**Files:**
- Modify: `web-encuesta-onboarding/index.html` (insert `section#seccion-2` after `section#seccion-1`, and add an inline `<script>` before `</body>`)

**Interfaces:**
- Consumes: nothing from earlier tasks besides the CSS classes `.pregunta-escala`, `.escala`, `.chip`, `.escala-etiquetas` from Task 1.
- Produces: JS function `renderEscalas(preguntas, contenedorId)` and array `PREGUNTAS_TECNICAS`, both defined in the inline `<script>` and reused by Task 4 for the cultural section.

- [ ] **Step 1: Insert Section 2's empty container after Section 1**

In `web-encuesta-onboarding/index.html`, immediately after the closing `</section>` of `seccion-1` (still inside the `<form>`), add:

```html
    <section class="bloque" id="seccion-2">
      <h2>Tu Experiencia Técnica</h2>
      <div id="contenedor-tecnica"></div>
    </section>
```

- [ ] **Step 2: Add the inline script with the renderer and technical questions data**

Immediately before the closing `</body>` tag, add:

```html
<script>
  const PREGUNTAS_TECNICAS = [
    { id: 'q5', texto: 'Desde que comenzaste, ¿en cuántos días pudiste completar una tarea de tu rol sin necesidad de pedir ayuda?', min: 'Aún no he podido hacerlo solo', max: 'Desde el primer o segundo día' },
    { id: 'q6', texto: 'Si tuvieras que explicarle a un nuevo compañero cómo hacer tu tarea principal, ¿qué tan seguro te sentirías de hacerlo sin revisar documentos o pedir ayuda?', min: 'Completamente inseguro', max: 'Muy seguro, podría hacerlo fácilmente' },
    { id: 'q7', texto: 'Pensando en todas las herramientas, sistemas y accesos que necesitas para tu trabajo, ¿qué tan rápido los tuviste disponibles desde tu primer día?', min: 'Tuve que esperar mucho, hubo demoras', max: 'Todo estuvo listo antes de empezar' },
    { id: 'q8', texto: 'Considerando la capacitación que recibiste en tus primeros días, ¿cuánto te ayudó a sentirte preparado para el rol?', min: 'No fue útil, me dejó confundido', max: 'Muy útil, me preparó perfectamente' },
    { id: 'q9', texto: 'Cuando tuviste dudas o problemas en tu rol, ¿qué tan fácil fue encontrar quién te ayudara y resolver la situación?', min: 'Muy difícil, nadie disponible o no sabían ayudar', max: 'Muy fácil, siempre encontré apoyo rápido' },
    { id: 'q10', texto: 'Hoy, sin consultar a nadie, ¿qué tan confiado te sientes en manejar las situaciones normales de tu trabajo?', min: 'Bajo, sigo dependiendo mucho de otros', max: 'Alto, manejo bien la mayoría de situaciones' },
  ];

  function renderEscalas(preguntas, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    preguntas.forEach((p) => {
      const div = document.createElement('div');
      div.className = 'pregunta pregunta-escala';
      const opciones = [1, 2, 3, 4, 5].map((n) => `
        <label class="chip">
          <input type="radio" name="${p.id}" value="${n}" ${n === 1 ? 'required' : ''}>
          ${n}
        </label>
      `).join('');
      div.innerHTML = `
        <p class="pregunta-texto" id="label-${p.id}">${p.texto}</p>
        <div class="escala" role="radiogroup" aria-labelledby="label-${p.id}">${opciones}</div>
        <div class="escala-etiquetas"><span>${p.min}</span><span>${p.max}</span></div>
      `;
      contenedor.appendChild(div);
    });
  }

  renderEscalas(PREGUNTAS_TECNICAS, 'contenedor-tecnica');
</script>
```

- [ ] **Step 3: Manual verification in browser**

Reopen `web-encuesta-onboarding/index.html`. Verify:
- A card titled "Tu Experiencia Técnica" appears after "Información Básica".
- It contains exactly 6 questions, each with 5 circular numbered chips (1-5) and two small labels underneath (leftmost extreme and rightmost extreme text).
- Clicking a chip visually highlights it (green fill, white number).
- In the browser console, `document.querySelectorAll('#contenedor-tecnica input[required]').length` should print `6` (one required radio per question, since only the "1" option carries `required` — the browser only needs one radio in a same-name group marked required for the group to be enforced).

- [ ] **Step 4: Commit**

```bash
git add web-encuesta-onboarding/index.html
git commit -m "feat: add scale-question renderer and technical experience section"
```

---

### Task 4: Section 3 (cultural experience)

**Files:**
- Modify: `web-encuesta-onboarding/index.html` (insert `section#seccion-3` after `section#seccion-2`; extend the existing inline `<script>`)

**Interfaces:**
- Consumes: `renderEscalas(preguntas, contenedorId)` produced in Task 3.
- Produces: array `PREGUNTAS_CULTURALES`.

- [ ] **Step 1: Insert Section 3's empty container after Section 2**

Immediately after the closing `</section>` of `seccion-2`, add:

```html
    <section class="bloque" id="seccion-3">
      <h2>Tu Experiencia Cultural</h2>
      <div id="contenedor-cultural"></div>
    </section>
```

- [ ] **Step 2: Extend the inline script**

In the `<script>` block, immediately after the `PREGUNTAS_TECNICAS` array declaration (before `function renderEscalas`), add:

```html
  const PREGUNTAS_CULTURALES = [
    { id: 'q11', texto: 'Cuando te presentaron los valores y la visión de Providencia en tus primeros días, ¿algo resonó contigo personalmente?', min: 'No, me parecen solo palabras sin significado', max: 'Sí, se alinean bien con mis valores personales' },
    { id: 'q12', texto: 'Pensando en tu líder directo, ¿qué tan cómodo te sientes siendo honesto sobre tus dudas, miedos o necesidades?', min: 'Nada cómodo, prefiero no expresar mis preocupaciones', max: 'Muy cómodo, puedo ser completamente honesto' },
    { id: 'q13', texto: 'Pensando en tu equipo de trabajo, ¿cuántos de tus compañeros crees que saben quién eres realmente más allá de tu rol?', min: "Casi nadie, soy el 'nuevo'", max: 'Muchos, ya me conocen como persona' },
    { id: 'q14', texto: 'En las comunicaciones de la empresa (reuniones, mails, anuncios), ¿te sientes incluido e informado de lo que está pasando?', min: 'No, me entero a último momento o de oídas', max: 'Sí, tengo claridad y soy comunicado primero' },
    { id: 'q15', texto: '¿Conoces gente en otros departamentos? (no solo de vista, sino lo suficiente como para saludar o pedir un favor)', min: 'No, solo conozco a mi equipo', max: 'Sí, conozco gente de varios departamentos' },
    { id: 'q16', texto: '¿Te sientes seguro cometiendo errores y aprendiendo de ellos sin miedo a represalias o vergüenza?', min: 'No, es arriesgado fallar aquí', max: 'Sí, el ambiente es seguro para aprender' },
  ];
```

And change the last line of the script from:

```html
  renderEscalas(PREGUNTAS_TECNICAS, 'contenedor-tecnica');
```

to:

```html
  renderEscalas(PREGUNTAS_TECNICAS, 'contenedor-tecnica');
  renderEscalas(PREGUNTAS_CULTURALES, 'contenedor-cultural');
```

- [ ] **Step 3: Manual verification in browser**

Reopen `web-encuesta-onboarding/index.html`. Verify:
- A card titled "Tu Experiencia Cultural" appears after "Tu Experiencia Técnica", with exactly 6 questions rendered the same chip style.
- `document.querySelectorAll('#contenedor-cultural input[type=radio]').length` prints `30` (6 questions × 5 chips).

- [ ] **Step 4: Commit**

```bash
git add web-encuesta-onboarding/index.html
git commit -m "feat: add cultural experience section"
```

---

### Task 5: Section 4 (open questions) + submit button + status messages

**Files:**
- Modify: `web-encuesta-onboarding/index.html` (insert `section#seccion-4`, hidden score inputs, and the submit button after `section#seccion-3`, close the `</form>`, add the two message `<div>`s after `</form>`)

**Interfaces:**
- Produces: hidden inputs `#puntuacion_tecnica`, `#puntuacion_cultural`, `#puntuacion_general` (populated later by Task 7), `div#mensajeExito`, `div#mensajeError` (used by Task 7).

- [ ] **Step 1: Insert Section 4, hidden score fields, and the submit button**

Immediately after the closing `</section>` of `seccion-3` (still inside `<form>`, before the existing `</form>` tag from Task 2), add:

```html
    <section class="bloque" id="seccion-4">
      <h2>Tu Perspectiva Sincera</h2>

      <div class="pregunta">
        <label for="q17">¿Hay algo sobre la realidad de trabajar en Providencia que te sorprendió (positiva o negativamente) y que es diferente a lo que esperabas?</label>
        <textarea id="q17" name="q17_sorpresa" rows="3"></textarea>
      </div>

      <div class="pregunta">
        <label for="q18">Si tuvieras que decir qué fue lo MÁS DIFÍCIL de tus primeros días en Providencia, ¿cuál ha sido? (puede ser de cualquier tipo: técnico, personal, emocional, administrativo)</label>
        <textarea id="q18" name="q18_brecha" rows="3"></textarea>
      </div>

      <div class="pregunta">
        <label for="q19">¿Cuál ha sido lo MEJOR de tu experiencia en Providencia hasta ahora? (lo que más te ha gustado, lo que más valoras)</label>
        <textarea id="q19" name="q19_fortaleza" rows="3"></textarea>
      </div>

      <div class="pregunta">
        <label for="q20">Si un amigo te preguntara "¿vale la pena trabajar en Providencia?", ¿qué le dirías? Sé honesto.</label>
        <textarea id="q20" name="q20_recomendacion" rows="3"></textarea>
      </div>
    </section>

    <input type="hidden" name="puntuacion_tecnica" id="puntuacion_tecnica" value="">
    <input type="hidden" name="puntuacion_cultural" id="puntuacion_cultural" value="">
    <input type="hidden" name="puntuacion_general" id="puntuacion_general" value="">

    <button type="submit" class="boton-enviar">Enviar respuestas</button>
```

- [ ] **Step 2: Add the status message divs after the form**

Immediately after the `</form>` closing tag, add:

```html
  <div id="mensajeExito" class="mensaje-estado" hidden>
    <p>¡Gracias! Tu respuesta fue enviada correctamente.</p>
  </div>
  <div id="mensajeError" class="mensaje-estado mensaje-error" hidden>
    <p>Hubo un problema al enviar tu respuesta. Por favor intenta de nuevo.</p>
  </div>
```

- [ ] **Step 3: Manual verification in browser**

Reopen `web-encuesta-onboarding/index.html`. Verify:
- A card titled "Tu Perspectiva Sincera" with 4 multi-line text areas appears after "Tu Experiencia Cultural".
- `document.querySelectorAll('#seccion-4 textarea[required]').length` prints `0` (all optional).
- A green "Enviar respuestas" button appears at the bottom of the form.
- Clicking the button with required fields empty triggers the browser's native "please fill out this field" validation popup (nothing is submitted yet — the JS handler is added in Task 7).

- [ ] **Step 4: Commit**

```bash
git add web-encuesta-onboarding/index.html
git commit -m "feat: add open-questions section, hidden score fields, and submit button"
```

---

### Task 6: Score calculation logic (TDD)

**Files:**
- Create: `web-encuesta-onboarding/scoring.js`
- Test: `web-encuesta-onboarding/scoring.test.js`

**Interfaces:**
- Produces: `promedio(valores: number[]): number` and `calcularPuntuaciones(respuestas: {q5..q16: string|number}): {tecnica: number, cultural: number, general: number}`, both exported via `module.exports` for Node and available as globals when loaded with `<script src="scoring.js">` in the browser. Task 7 consumes `calcularPuntuaciones`.

- [ ] **Step 1: Write the failing test file**

Create `web-encuesta-onboarding/scoring.test.js`:

```js
const test = require('node:test');
const assert = require('node:assert/strict');
const { promedio, calcularPuntuaciones } = require('./scoring.js');

test('promedio calcula el promedio simple redondeado a 2 decimales', () => {
  assert.equal(promedio([1, 2, 3, 4, 5]), 3);
  assert.equal(promedio([5, 4, 4]), 4.33);
});

test('calcularPuntuaciones separa tecnica, cultural y general', () => {
  const respuestas = {
    q5: 5, q6: 5, q7: 5, q8: 5, q9: 5, q10: 5,
    q11: 1, q12: 1, q13: 1, q14: 1, q15: 1, q16: 1,
  };
  const resultado = calcularPuntuaciones(respuestas);
  assert.equal(resultado.tecnica, 5);
  assert.equal(resultado.cultural, 1);
  assert.equal(resultado.general, 3);
});

test('calcularPuntuaciones acepta valores string (como los de FormData)', () => {
  const respuestas = {
    q5: '3', q6: '3', q7: '3', q8: '3', q9: '3', q10: '3',
    q11: '4', q12: '4', q13: '4', q14: '4', q15: '4', q16: '4',
  };
  const resultado = calcularPuntuaciones(respuestas);
  assert.equal(resultado.tecnica, 3);
  assert.equal(resultado.cultural, 4);
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test web-encuesta-onboarding/scoring.test.js`
Expected: FAIL — `Error: Cannot find module './scoring.js'`

- [ ] **Step 3: Write the minimal implementation**

Create `web-encuesta-onboarding/scoring.js`:

```js
function promedio(valores) {
  const numeros = valores.map(Number);
  const suma = numeros.reduce((acumulado, valor) => acumulado + valor, 0);
  return Math.round((suma / numeros.length) * 100) / 100;
}

function calcularPuntuaciones(respuestas) {
  const tecnica = promedio([
    respuestas.q5, respuestas.q6, respuestas.q7,
    respuestas.q8, respuestas.q9, respuestas.q10,
  ]);
  const cultural = promedio([
    respuestas.q11, respuestas.q12, respuestas.q13,
    respuestas.q14, respuestas.q15, respuestas.q16,
  ]);
  const general = promedio([
    respuestas.q5, respuestas.q6, respuestas.q7, respuestas.q8,
    respuestas.q9, respuestas.q10, respuestas.q11, respuestas.q12,
    respuestas.q13, respuestas.q14, respuestas.q15, respuestas.q16,
  ]);
  return { tecnica, cultural, general };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { promedio, calcularPuntuaciones };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test web-encuesta-onboarding/scoring.test.js`
Expected: PASS — `# pass 3`, `# fail 0`

- [ ] **Step 5: Commit**

```bash
git add web-encuesta-onboarding/scoring.js web-encuesta-onboarding/scoring.test.js
git commit -m "feat: add score calculation logic with unit tests"
```

---

### Task 7: Wire up submission (fetch, hidden scores, success/error states)

**Files:**
- Modify: `web-encuesta-onboarding/index.html` (add `<script src="scoring.js"></script>` and a submit-handler `<script>` block, both immediately before the existing inline `<script>` that renders the scales — order matters, see Step 1)

**Interfaces:**
- Consumes: `calcularPuntuaciones` from `scoring.js` (Task 6); DOM ids `encuestaForm`, `puntuacion_tecnica`, `puntuacion_cultural`, `puntuacion_general`, `mensajeExito`, `mensajeError` (Task 5).

- [ ] **Step 1: Load scoring.js before the existing inline script**

In `web-encuesta-onboarding/index.html`, immediately before the existing `<script>` tag that defines `PREGUNTAS_TECNICAS` (added in Task 3), add:

```html
<script src="scoring.js"></script>
```

- [ ] **Step 2: Add the submit handler**

Inside the existing inline `<script>` block (the one from Task 3/4 that calls `renderEscalas`), append this at the end, after the two `renderEscalas(...)` calls:

```html
  document.getElementById('encuestaForm').addEventListener('submit', function (evento) {
    evento.preventDefault();

    const formulario = evento.target;
    const datosFormulario = new FormData(formulario);

    const respuestasEscala = {};
    ['q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16'].forEach((id) => {
      respuestasEscala[id] = datosFormulario.get(id);
    });

    const puntuaciones = calcularPuntuaciones(respuestasEscala);
    document.getElementById('puntuacion_tecnica').value = puntuaciones.tecnica;
    document.getElementById('puntuacion_cultural').value = puntuaciones.cultural;
    document.getElementById('puntuacion_general').value = puntuaciones.general;

    datosFormulario.set('puntuacion_tecnica', puntuaciones.tecnica);
    datosFormulario.set('puntuacion_cultural', puntuaciones.cultural);
    datosFormulario.set('puntuacion_general', puntuaciones.general);

    const cuerpo = new URLSearchParams(datosFormulario).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: cuerpo,
    })
      .then(() => {
        formulario.hidden = true;
        document.getElementById('mensajeExito').hidden = false;
        document.getElementById('mensajeError').hidden = true;
      })
      .catch(() => {
        document.getElementById('mensajeError').hidden = false;
      });
  });
```

- [ ] **Step 3: Manual verification in browser (local, pre-deploy)**

Reopen `web-encuesta-onboarding/index.html` and open the browser's developer console. Fill every required field (name, email, department, date, and all 12 scale questions with any value). Before clicking submit, run in the console:

```js
document.getElementById('encuestaForm').addEventListener('submit', (e) => e.preventDefault(), { once: true, capture: true });
```

This ensures the native form navigation is blocked so you can inspect state safely. Click "Enviar respuestas", then check in the console:

```js
document.getElementById('puntuacion_tecnica').value
document.getElementById('puntuacion_cultural').value
document.getElementById('puntuacion_general').value
```

Expected: three numbers between 1 and 5 are printed (not empty strings), confirming the scores were computed and written into the hidden fields before submission. The actual network POST will 404 locally (there is no Netlify server on your machine) — real end-to-end delivery is verified after deployment in Task 8.

- [ ] **Step 4: Commit**

```bash
git add web-encuesta-onboarding/index.html
git commit -m "feat: wire up Netlify form submission with hidden score calculation"
```

---

### Task 8: Deploy to Netlify, configure email notification, live end-to-end test

**Files:** none (infrastructure/configuration task, plus a final push of everything already committed)

**Interfaces:** none — this task consumes the finished `web-encuesta-onboarding/` folder from Tasks 1-7 and produces a live URL.

- [ ] **Step 1: Push all commits to GitHub**

```bash
git push origin main
```

Expected: push succeeds, all commits from Tasks 1-7 appear on `https://github.com/juandaarrr/proyecto-encuestas`.

- [ ] **Step 2: Create the Netlify site from the GitHub repo**

In the Netlify dashboard: "Add new site" → "Import an existing project" → choose GitHub → select `juandaarrr/proyecto-encuestas`. Set:
- Build command: (leave empty)
- Publish directory: `web-encuesta-onboarding`

Deploy the site. Expected: Netlify shows "Published" and gives you a live URL like `https://<random-name>.netlify.app`.

- [ ] **Step 3: Enable form detection and add the email notification**

In the Netlify site dashboard: go to "Forms" → enable form detection if not already on → trigger a redeploy if prompted. Once the form `encuesta-onboarding-providencia` appears under Forms, go to "Forms" → "Notifications" → "Add notification" → "Email notification" → enter `Larango@providenciaco.com` → save. Confirm the verification email Netlify sends to that address.

- [ ] **Step 4: Live end-to-end test**

Open the live Netlify URL, fill out the entire survey with test data, and submit. Verify:
- The form disappears and the "¡Gracias! Tu respuesta fue enviada correctamente." message appears without a page reload.
- Within a few minutes, an email arrives at `Larango@providenciaco.com` containing all submitted answers plus three additional fields: `puntuacion_tecnica`, `puntuacion_cultural`, `puntuacion_general`, each a number between 1 and 5.
- Reload the live URL on a phone (or use browser dev tools' device emulation) — layout remains usable, no horizontal scrolling.
- Toggle the OS/browser dark mode — colors switch to the dark palette defined in Task 1 without any unreadable text.

- [ ] **Step 5: Record the live URL**

Add the live URL to the design spec for future reference:

```bash
git log --oneline -1
```

Then open `docs/superpowers/specs/2026-09-02-encuesta-onboarding-web-design.md` and, under "## Arquitectura", add one line: `- URL en producción: <la URL real que te dio Netlify>`. Commit:

```bash
git add docs/superpowers/specs/2026-09-02-encuesta-onboarding-web-design.md
git commit -m "docs: record production URL for onboarding survey site"
git push origin main
```

---

## Self-Review Notes

- **Spec coverage:** Netlify Forms architecture (Task 8), all 20 questions with exact wording (Tasks 2/3/4/5), hidden score fields (Tasks 6/7), single continuous scroll with no wizard (all sections live in one page, no step navigation added), brand colors/fonts/dark-mode/responsive (Task 1), error handling that preserves form contents (Task 7's `.catch` only shows the error message, never resets `formulario`), test plan (Task 8 Steps 2-4) — all covered.
- **Placeholder scan:** no TBD/TODO; every step has literal, complete code or an exact manual-check procedure.
- **Type/name consistency:** `calcularPuntuaciones` and `promedio` names match between Task 6 (definition) and Task 7 (consumption); DOM ids (`encuestaForm`, `puntuacion_tecnica`, `puntuacion_cultural`, `puntuacion_general`, `mensajeExito`, `mensajeError`, `contenedor-tecnica`, `contenedor-cultural`) match between the tasks that create them and the tasks that reference them.
