# Diseño: Encuesta de Onboarding Providencia S.A. — Página web (Netlify + Netlify Forms)

## Contexto y objetivo

El proyecto ya cuenta con las 20 preguntas validadas de la "Encuesta de Onboarding" en
[`Preguntas_Encuesta_Onboarding_Final.md`](../../../Preguntas_Encuesta_Onboarding_Final.md), pensadas originalmente
para Google Forms. El objetivo de este diseño es digitalizarlas en una **página web propia**, con la identidad de
marca de Providencia S.A., desplegada en **Netlify**, que recopile las respuestas usando el sistema nativo
**Netlify Forms** (sin Google Forms, sin Formspree) y las envíe por correo a `Larango@providenciaco.com`.

Se usa como referencia arquitectónica el proyecto previo del cuestionario BDI-II (ver
[`resumen_proyecto_bdi.md`](../../../resumen_proyecto_bdi.md)): página HTML autocontenida, sin frameworks, publicada
como sitio estático. La diferencia clave es el backend de envíos: aquel usaba Formspree; este usa Netlify Forms
porque se espera un volumen de respuestas que supera el límite gratuito de Formspree (50/mes), mientras que Netlify
Forms no tiene límite de envíos en su plan gratuito (el envío de formularios cuesta 0 créditos en el modelo de
precios de Netlify vigente en 2026).

## Identidad de marca

- **Logo**: `LOGO PROVI.PNG` — texto "PROVIDENCIA" en verde brillante, "100 AÑOS" debajo, tipografía bold/redondeada.
- **Colores** (de `codigos de color.txt`):
  - Verde brillante: `#56BE27`
  - Verde oscuro: `#214229`
  - Amarillo: `#FFEE00` (uso puntual, no saturar)
- **Tipografía**: título/encabezados en un Google Font bold/redondeado similar al logo (Baloo 2 o Fredoka); texto de
  preguntas y cuerpo en un sans-serif legible (Inter o Nunito). Ambas familias disponibles en Google Fonts.
- Fondo predominantemente blanco/claro, igual que el logo. Soporte de modo claro/oscuro automático
  (`prefers-color-scheme`).

## Arquitectura

- Archivo nuevo autocontenido: `web-encuesta-onboarding/index.html` (HTML + CSS + JS inline, sin build step, sin
  dependencias externas salvo Google Fonts).
- El repositorio de GitHub (`github.com/juandaarrr/proyecto-encuestas`) ya existe y contiene los documentos del
  proyecto; este archivo se añade dentro de él.
- Se conecta el repo a un nuevo sitio de Netlify:
  - Build command: ninguno (sitio estático).
  - Publish directory: `web-encuesta-onboarding`.
  - Cada `git push` a `main` dispara un redeploy automático.
- En el panel de Netlify (Forms → Notifications) se configura una notificación por email hacia
  `Larango@providenciaco.com` para el formulario detectado.

## Estructura y contenido del formulario

Página de una sola vista de scroll continuo (sin pasos/wizard), con 4 bloques visuales que seguido el orden del
documento original:

1. **Información básica** (4 preguntas, todas obligatorias):
   - Nombre completo (texto corto)
   - Correo empresarial (`type="email"`)
   - Departamento/área (select: Recursos Humanos, Operaciones, Comercial/Ventas, Tecnología, Administración,
     Servicios al Cliente, Logística, Otro)
   - Fecha de ingreso (`type="date"`)

2. **Experiencia técnica/operativa** (preguntas 5-10, escala 1-5, todas obligatorias): autonomía, claridad de
   procesos, herramientas/acceso, capacitación recibida, resolución de problemas, independencia operativa. Cada
   escala se presenta como fila de "chips" numerados 1-5 con las etiquetas de los extremos visibles (texto exacto
   del documento fuente).

3. **Experiencia cultural** (preguntas 11-16, escala 1-5, todas obligatorias): conexión emocional, confianza en
   liderazgo, integración al equipo, comunicación organizacional, red de relaciones, seguridad emocional. Mismo
   componente de "chips" 1-5.

4. **Perspectiva sincera** (preguntas 17-20, texto largo/párrafo, **opcionales**): sorpresa, brecha, fortaleza,
   recomendación. Textos exactos del documento fuente.

### Puntajes ocultos (no visibles para el colaborador)

Al enviar, se calculan en JS y se agregan como campos ocultos del mismo envío (igual patrón que el proyecto BDI):

- `puntuacion_tecnica` = promedio de preguntas 5-10
- `puntuacion_cultural` = promedio de preguntas 11-16
- `puntuacion_general` = promedio de preguntas 5-16

Así el correo que recibe RH incluye las respuestas literales completas **y** los 3 puntajes ya calculados, sin que el
colaborador los vea (mantiene la filosofía "indirecta" de la encuesta: las preguntas no revelan qué se está
midiendo).

## Envío del formulario (Netlify Forms)

- `<form name="encuesta-onboarding-providencia" method="POST" data-netlify="true">` con un input oculto
  `form-name` (requisito de Netlify) y un honeypot básico anti-spam.
- Envío vía `fetch` (POST a `/` con `Content-Type: application/x-www-form-urlencoded`) para evitar recarga de
  página; al confirmar éxito se reemplaza el formulario por un mensaje de agradecimiento simple.
- No se usa `mailto:` de respaldo (a diferencia del proyecto BDI): al ser un formulario nativo de Netlify, si JS
  fallara, el envío normal por POST de HTML sigue funcionando como respaldo (progressive enhancement), sin depender
  de un servicio externo ni de CSP de terceros.

## Manejo de errores y validación

- Validación HTML5 nativa: `required` en preguntas 1-16, tipos correctos (`email`, `date`), escalas 1-5 obligatorias
  antes de habilitar el envío.
- Preguntas 17-20 opcionales, sin `required`.
- Si el `fetch` falla (red, error de servidor), se muestra un mensaje de error inline y el botón de enviar vuelve a
  estar disponible; el contenido del formulario **no se limpia**, para que el colaborador no pierda lo ya escrito y
  pueda reintentar.

## Plan de pruebas

Antes de dar el proyecto por terminado:

1. Desplegar el sitio en Netlify (conectado al repo) y confirmar build exitoso.
2. Configurar la notificación de email hacia `Larango@providenciaco.com` y confirmarla.
3. Enviar una respuesta de prueba real desde el sitio publicado y verificar que:
   - Llega el correo con todas las respuestas legibles y los 3 puntajes calculados.
   - La página muestra el mensaje de agradecimiento sin recargar.
4. Revisar la vista en escritorio y móvil, y en modo claro y oscuro.

## Fuera de alcance

- No se reemplaza el flujo de Google Forms/Apps Script ya documentado para la encuesta de jefes
  (`Google_Apps_Script_Crear_Encuesta_Jefes.gs`) — este diseño cubre únicamente la encuesta de onboarding en su
  nueva versión web.
- No se implementa dashboard/analítica automática de resultados; el análisis sigue el mapa de interpretación ya
  descrito en el documento fuente, a partir de los correos/datos que Netlify guarda.
