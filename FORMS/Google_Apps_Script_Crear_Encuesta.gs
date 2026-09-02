/**
 * SCRIPT AUTOMÁTICO - CREAR ENCUESTA ONBOARDING PROVIDENCIA
 *
 * Este script crea automáticamente el Google Form con todas las 20 preguntas
 * Tiempo de ejecución: ~30-60 segundos
 *
 * INSTRUCCIONES:
 * 1. Ir a https://script.google.com
 * 2. Crear nuevo proyecto
 * 3. Pegar TODO este código
 * 4. Click en "Ejecutar" (arriba)
 * 5. Autorizar permisos cuando pida
 * 6. ¡Listo! Se crea el Form automáticamente
 */

function crearEncuestaOnboarding() {

  // Crear nuevo formulario
  const form = FormApp.create('Encuesta de Experiencia de Onboarding - Providencia S.A.');

  // Configurar descripción
  form.setDescription('Bienvenido/a a Providencia. Valoramos tu experiencia y queremos asegurar que tu integración sea lo mejor posible.\n\nEsta encuesta nos ayuda a entender cómo ha sido tu proceso de integración y dónde podemos mejorar.\n\n⏱️ Tiempo: 7-8 minutos\n🔒 Confidencial: Solo verá el área de RH\n✅ Tu honestidad es lo más valioso');

  // Configurar para recopilar emails
  form.setCollectEmail(true);

  // Mostrar barra de progreso
  form.setProgressBar(true);

  // Mostrar resumen de respuestas
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage('¡Gracias por completar la encuesta! Tu retroalimentación es valiosa para nosotros.');

  // ═══════════════════════════════════════════════════════════
  // SECCIÓN 1: INFORMACIÓN BÁSICA (Ambientación)
  // ═══════════════════════════════════════════════════════════

  form.addSectionHeaderItem()
    .setTitle('📍 INFORMACIÓN BÁSICA')
    .setHelpText('Ayúdanos a contextualizar tu respuesta');

  // Pregunta 1: Nombre
  form.addTextItem()
    .setTitle('¿Cuál es tu nombre completo?')
    .setRequired(true);

  // Pregunta 2: Email
  form.addEmailItem()
    .setTitle('¿Cuál es tu correo empresarial?')
    .setRequired(true);

  // Pregunta 3: Departamento
  form.addMultipleChoiceItem()
    .setTitle('¿En qué departamento o área estás trabajando?')
    .setChoiceValues(['Recursos Humanos', 'Operaciones', 'Comercial/Ventas', 'Tecnología', 'Administración', 'Servicios al Cliente', 'Logística', 'Otro (especificar)'])
    .setRequired(true);

  // Pregunta 4: Fecha de Ingreso
  form.addDateItem()
    .setTitle('¿Cuál es tu fecha de ingreso a Providencia?')
    .setRequired(true);

  // ═══════════════════════════════════════════════════════════
  // SECCIÓN 2: INTEGRACIÓN TÉCNICA/OPERATIVA (6 preguntas)
  // ═══════════════════════════════════════════════════════════

  form.addSectionHeaderItem()
    .setTitle('🔧 TU EXPERIENCIA TÉCNICA/OPERATIVA')
    .setHelpText('Nos interesa entender cómo ha sido tu proceso de adaptación operativa');

  // Pregunta 5: Autonomía en Proceso
  form.addScaleItem()
    .setTitle('Desde que comenzaste, ¿en cuántos días pudiste completar una tarea de tu rol sin necesidad de pedir ayuda?')
    .setBounds(1, 5)
    .setLabels('Aún no he podido hacerlo solo', 'Desde el primer o segundo día')
    .setRequired(true);

  // Pregunta 6: Claridad de Procesos
  form.addScaleItem()
    .setTitle('Si tuvieras que explicarle a un nuevo compañero cómo hacer tu tarea principal, ¿qué tan seguro te sentirías de hacerlo sin revisar documentos o pedir ayuda?')
    .setBounds(1, 5)
    .setLabels('Completamente inseguro', 'Muy seguro, podría hacerlo fácilmente')
    .setRequired(true);

  // Pregunta 7: Herramientas y Acceso
  form.addScaleItem()
    .setTitle('Pensando en todas las herramientas, sistemas y accesos que necesitas para tu trabajo, ¿qué tan rápido los tuviste disponibles desde tu primer día?')
    .setBounds(1, 5)
    .setLabels('Tuve que esperar mucho, hubo demoras', 'Todo estuvo listo antes de empezar')
    .setRequired(true);

  // Pregunta 8: Capacitación Recibida
  form.addScaleItem()
    .setTitle('Considerando la capacitación que recibiste en tus primeros días, ¿cuánto te ayudó a sentirte preparado para el rol?')
    .setBounds(1, 5)
    .setLabels('No fue útil, me dejó confundido', 'Muy útil, me preparó perfectamente')
    .setRequired(true);

  // Pregunta 9: Resolución de Problemas
  form.addScaleItem()
    .setTitle('Cuando tuviste dudas o problemas en tu rol, ¿qué tan fácil fue encontrar quién te ayudara y resolver la situación?')
    .setBounds(1, 5)
    .setLabels('Muy difícil, nadie disponible o no sabían ayudar', 'Muy fácil, siempre encontré apoyo rápido')
    .setRequired(true);

  // Pregunta 10: Independencia Operativa
  form.addScaleItem()
    .setTitle('Hoy, sin consultar a nadie, ¿qué tan confiado te sientes en manejar las situaciones normales de tu trabajo?')
    .setBounds(1, 5)
    .setLabels('Bajo, sigo dependiendo mucho de otros', 'Alto, manejo bien la mayoría de situaciones')
    .setRequired(true);

  // ═══════════════════════════════════════════════════════════
  // SECCIÓN 3: INTEGRACIÓN CULTURAL (6 preguntas)
  // ═══════════════════════════════════════════════════════════

  form.addSectionHeaderItem()
    .setTitle('💼 TU EXPERIENCIA CULTURAL')
    .setHelpText('Nos interesa entender cómo te has integrado en nuestra cultura organizacional');

  // Pregunta 11: Conexión Emocional
  form.addScaleItem()
    .setTitle('Cuando te presentaron los valores y la visión de Providencia en tus primeros días, ¿algo resonó contigo personalmente?')
    .setBounds(1, 5)
    .setLabels('No, me parecen solo palabras sin significado', 'Sí, se alinean bien con mis valores personales')
    .setRequired(true);

  // Pregunta 12: Confianza en Liderazgo
  form.addScaleItem()
    .setTitle('Pensando en tu líder directo, ¿qué tan cómodo te sientes siendo honesto sobre tus dudas, miedos o necesidades?')
    .setBounds(1, 5)
    .setLabels('Nada cómodo, prefiero no expresar mis preocupaciones', 'Muy cómodo, puedo ser completamente honesto')
    .setRequired(true);

  // Pregunta 13: Integración al Equipo
  form.addScaleItem()
    .setTitle('Pensando en tu equipo de trabajo, ¿cuántos de tus compañeros crees que saben quién eres realmente más allá de tu rol?')
    .setBounds(1, 5)
    .setLabels('Casi nadie, soy el "nuevo"', 'Muchos, ya me conocen como persona')
    .setRequired(true);

  // Pregunta 14: Comunicación Organizacional
  form.addScaleItem()
    .setTitle('En las comunicaciones de la empresa (reuniones, mails, anuncios), ¿te sientes incluido e informado de lo que está pasando?')
    .setBounds(1, 5)
    .setLabels('No, me entero a último momento o de oídas', 'Sí, tengo claridad y soy comunicado primero')
    .setRequired(true);

  // Pregunta 15: Red de Relaciones
  form.addScaleItem()
    .setTitle('¿Conoces gente en otros departamentos? (no solo de vista, sino lo suficiente como para saludar o pedir un favor)')
    .setBounds(1, 5)
    .setLabels('No, solo conozco a mi equipo', 'Sí, conozco gente de varios departamentos')
    .setRequired(true);

  // Pregunta 16: Seguridad Emocional
  form.addScaleItem()
    .setTitle('¿Te sientes seguro cometiendo errores y aprendiendo de ellos sin miedo a represalias o vergüenza?')
    .setBounds(1, 5)
    .setLabels('No, es arriesgado fallar aquí', 'Sí, el ambiente es seguro para aprender')
    .setRequired(true);

  // ═══════════════════════════════════════════════════════════
  // SECCIÓN 4: REVELADORES CLAVE (4 preguntas abiertas)
  // ═══════════════════════════════════════════════════════════

  form.addSectionHeaderItem()
    .setTitle('🎯 TU PERSPECTIVA SINCERA')
    .setHelpText('Aquí buscamos tu honestidad - no hay respuestas "correctas"');

  // Pregunta 17: Sorpresa
  form.addParagraphTextItem()
    .setTitle('¿Hay algo sobre la realidad de trabajar en Providencia que te sorprendió (positiva o negativamente) y que es diferente a lo que esperabas?')
    .setRequired(false);

  // Pregunta 18: Brecha
  form.addParagraphTextItem()
    .setTitle('Si tuvieras que decir qué fue lo MÁS DIFÍCIL de tus primeros días en Providencia, ¿cuál ha sido? (puede ser de cualquier tipo: técnico, personal, emocional, administrativo)')
    .setRequired(false);

  // Pregunta 19: Fortaleza
  form.addParagraphTextItem()
    .setTitle('¿Cuál ha sido lo MEJOR de tu experiencia en Providencia hasta ahora? (lo que más te ha gustado, lo que más valoras)')
    .setRequired(false);

  // Pregunta 20: Recomendación
  form.addParagraphTextItem()
    .setTitle('Si un amigo te preguntara "¿vale la pena trabajar en Providencia?", ¿qué le dirías? Sé honesto.')
    .setRequired(false);

  // ═══════════════════════════════════════════════════════════
  // OBTENER URL DEL FORMULARIO
  // ═══════════════════════════════════════════════════════════

  const formUrl = form.getPublishedUrl();
  const editUrl = form.getEditUrl();

  // Mostrar URLs en la consola
  Logger.log('✅ ¡ENCUESTA CREADA EXITOSAMENTE!');
  Logger.log('');
  Logger.log('📋 PARA RESPONDER:');
  Logger.log(formUrl);
  Logger.log('');
  Logger.log('✏️ PARA EDITAR:');
  Logger.log(editUrl);
  Logger.log('');
  Logger.log('═════════════════════════════════════════');
  Logger.log('');
  Logger.log('PRÓXIMOS PASOS:');
  Logger.log('1. Abre el link "PARA RESPONDER" en tu navegador');
  Logger.log('2. Verifica que todas las preguntas estén correctas');
  Logger.log('3. Copia el link de respuesta');
  Logger.log('4. Comparte con tu equipo de RH');
  Logger.log('5. Comienza a enviar a nuevos ingresos desde el 1 de julio');
  Logger.log('');
  Logger.log('═════════════════════════════════════════');
}

/**
 * BONUS: Script para borrar el form si algo sale mal
 * Descomenta y ejecuta si necesitas empezar de nuevo
 */

// function listarFormsYBorrar() {
//   const forms = DriveApp.getFilesByName('Encuesta de Experiencia de Onboarding - Providencia S.A.');
//   while (forms.hasNext()) {
//     const form = forms.next();
//     Logger.log('Borrando: ' + form.getName());
//     form.setTrashed(true);
//   }
//   Logger.log('✅ Form borrado. Puedes ejecutar crearEncuestaOnboarding() nuevamente.');
// }
