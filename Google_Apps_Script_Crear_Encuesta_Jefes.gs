/**
 * SCRIPT AUTOMÁTICO - CREAR ENCUESTA DE EVALUACIÓN (PERSPECTIVA JEFES)
 * Providencia S.A. - Formulario INDEPENDIENTE al de colaboradores
 *
 * Este script crea un Google Form nuevo y separado, donde el JEFE/LÍDER
 * de área evalúa el proceso de adaptación de un colaborador nuevo.
 *
 * Tiempo de ejecución: ~30-60 segundos
 *
 * INSTRUCCIONES:
 * 1. Ir a https://script.google.com
 * 2. Crear un NUEVO proyecto (distinto al de la encuesta de colaboradores)
 * 3. Pegar TODO este código
 * 4. Click en "Ejecutar" -> seleccionar la función "crearEncuestaJefes"
 * 5. Autorizar permisos cuando pida
 * 6. ¡Listo! Se crea el Form automáticamente
 */

function crearEncuestaJefes() {

  // Crear nuevo formulario (independiente del de colaboradores)
  const form = FormApp.create('Evaluación de Adaptación del Colaborador - Perspectiva del Jefe/Líder - Providencia S.A.');

  // Configurar descripción
  form.setDescription('Como líder de área/zona, tu observación directa es clave para entender el proceso real de adaptación de tu colaborador.\n\nEsta encuesta es independiente y complementaria a la que responde el colaborador. Tus respuestas ayudan a RH a identificar fortalezas y alertas tempranas.\n\n⏱️ Tiempo: 5-6 minutos\n🔒 Confidencial: Solo verá el área de RH\n✅ Responde según lo que observas, no según lo que esperas ver');

  // Configurar para recopilar emails (captura automática del respondedor)
  form.setCollectEmail(true);

  // Mostrar barra de progreso
  form.setProgressBar(true);

  // Mensaje de confirmación
  form.setShowLinkToRespondAgain(true); // El jefe puede evaluar a varios colaboradores
  form.setConfirmationMessage('¡Gracias por tu evaluación! Si tienes más colaboradores nuevos que evaluar, puedes volver a responder este formulario para cada uno.');

  // ═══════════════════════════════════════════════════════════
  // SECCIÓN 1: DATOS DE CONTEXTO
  // ═══════════════════════════════════════════════════════════

  form.addSectionHeaderItem()
    .setTitle('📍 DATOS DE CONTEXTO')
    .setHelpText('Identifícate a ti y al colaborador que estás evaluando');

  // Pregunta 1: Nombre del Jefe
  form.addTextItem()
    .setTitle('¿Cuál es tu nombre completo?')
    .setRequired(true);

  // Pregunta 2: Correo del Jefe
  form.addTextItem()
    .setTitle('¿Cuál es tu correo empresarial?')
    .setRequired(true);

  // Pregunta 3: Nombre del Colaborador Evaluado
  form.addTextItem()
    .setTitle('¿Cuál es el nombre completo del colaborador que estás evaluando?')
    .setRequired(true);

  // Pregunta 4: Departamento/Área/Zona
  form.addMultipleChoiceItem()
    .setTitle('¿A qué departamento, área o zona pertenece el colaborador evaluado?')
    .setChoiceValues(['Recursos Humanos', 'Operaciones', 'Comercial/Ventas', 'Tecnología', 'Administración', 'Servicios al Cliente', 'Logística', 'Otro (especificar)'])
    .setRequired(true);

  // Pregunta 5: Tiempo trabajando con el colaborador
  form.addMultipleChoiceItem()
    .setTitle('¿Hace cuánto tiempo supervisas o trabajas directamente con este colaborador?')
    .setChoiceValues(['Menos de 2 semanas', '2 a 4 semanas', '1 a 2 meses', '2 a 3 meses', 'Más de 3 meses'])
    .setRequired(true);

  // ═══════════════════════════════════════════════════════════
  // SECCIÓN 2: OBSERVACIÓN TÉCNICA/OPERATIVA (6 preguntas)
  // ═══════════════════════════════════════════════════════════

  form.addSectionHeaderItem()
    .setTitle('🔧 OBSERVACIÓN TÉCNICA/OPERATIVA')
    .setHelpText('Responde según lo que has observado directamente, no según lo que esperabas ver');

  // Pregunta 6: Autonomía Real Observada
  form.addScaleItem()
    .setTitle('¿En cuánto tiempo notaste que el colaborador empezó a ejecutar tareas de su rol sin necesitar supervisión constante?')
    .setBounds(1, 5)
    .setLabels('Aún requiere supervisión constante', 'Desde la primera o segunda semana')
    .setRequired(true);

  // Pregunta 7: Capacidad de Resolver sin Intervención
  form.addScaleItem()
    .setTitle('Si mañana le asignas una tarea nueva pero similar a las que ya maneja, ¿qué tan seguro estás de que la resolvería correctamente sin que intervengas?')
    .setBounds(1, 5)
    .setLabels('Nada seguro, necesitaría guiarlo paso a paso', 'Totalmente seguro, la resolvería solo')
    .setRequired(true);

  // Pregunta 8: Manejo de Errores
  form.addScaleItem()
    .setTitle('Cuando el colaborador comete un error operativo, ¿qué tan rápido identifica la causa y lo corrige por iniciativa propia (sin que tengas que decírselo)?')
    .setBounds(1, 5)
    .setLabels('No lo identifica, necesita que se lo señalen', 'Lo detecta y corrige él mismo, rápido')
    .setRequired(true);

  // Pregunta 9: Repetición de Instrucciones
  form.addScaleItem()
    .setTitle('¿Qué tan seguido te encuentras repitiendo la misma instrucción o corrigiendo la misma situación con este colaborador?')
    .setBounds(1, 5)
    .setLabels('Muy seguido, parece no quedar claro', 'Casi nunca, con explicarlo una vez basta')
    .setRequired(true);

  // Pregunta 10: Base Técnica al Llegar
  form.addScaleItem()
    .setTitle('Más allá de lo que tú personalmente le has enseñado, ¿qué tan preparado en herramientas y sistemas llegó el colaborador desde el proceso de inducción inicial?')
    .setBounds(1, 5)
    .setLabels('Llegó sin nada, tuve que enseñarle todo desde cero', 'Llegó bien preparado, solo ajustes menores')
    .setRequired(true);

  // Pregunta 11: Curva de Aprendizaje Comparativa
  form.addScaleItem()
    .setTitle('Comparado con el tiempo que consideras estándar para dominar las funciones básicas de este cargo, ¿cómo ubicarías el ritmo de aprendizaje de este colaborador?')
    .setBounds(1, 5)
    .setLabels('Mucho más lento de lo esperado', 'Más rápido de lo esperado')
    .setRequired(true);

  // ═══════════════════════════════════════════════════════════
  // SECCIÓN 3: OBSERVACIÓN CULTURAL/RELACIONAL (6 preguntas)
  // ═══════════════════════════════════════════════════════════

  form.addSectionHeaderItem()
    .setTitle('💼 OBSERVACIÓN CULTURAL/RELACIONAL')
    .setHelpText('Piensa en comportamientos concretos que hayas presenciado, no en impresiones generales');

  // Pregunta 12: Reacción a Cambios y Decisiones de Equipo
  form.addScaleItem()
    .setTitle('Cuando hay un cambio de prioridades o una decisión del equipo con la que quizás no está totalmente de acuerdo, ¿cómo reacciona generalmente?')
    .setBounds(1, 5)
    .setLabels('Se resiste o lo cuestiona de forma poco constructiva', 'Se adapta con buena actitud, pregunta si tiene dudas')
    .setRequired(true);

  // Pregunta 13: Participación Informal
  form.addScaleItem()
    .setTitle('¿Qué tan involucrado se muestra el colaborador en las dinámicas informales del equipo (conversaciones de pasillo, pausas, chats grupales, actividades)?')
    .setBounds(1, 5)
    .setLabels('Se mantiene al margen, poco participativo', 'Participa activamente, se le ve cómodo')
    .setRequired(true);

  // Pregunta 14: Confianza para Acudir al Líder
  form.addScaleItem()
    .setTitle('Si el colaborador tuviera una duda incómoda, un desacuerdo o una dificultad personal que afecta su trabajo, ¿qué tan probable es que te lo cuente a ti directamente antes que a alguien más?')
    .setBounds(1, 5)
    .setLabels('Poco probable, prefiere evitar ese tipo de conversación', 'Muy probable, ya lo ha hecho o percibo esa confianza')
    .setRequired(true);

  // Pregunta 15: Integración Espontánea por Pares
  form.addScaleItem()
    .setTitle('¿Has notado que otros miembros del equipo lo incluyen espontáneamente en tareas, conversaciones o decisiones, sin que tú tengas que pedírselos?')
    .setBounds(1, 5)
    .setLabels('No, sigue siendo tratado como "el nuevo"', 'Sí, ya lo integran naturalmente como uno más')
    .setRequired(true);

  // Pregunta 16: Receptividad a Retroalimentación
  form.addScaleItem()
    .setTitle('Cuando le das retroalimentación (positiva o de mejora), ¿cómo reacciona generalmente?')
    .setBounds(1, 5)
    .setLabels('A la defensiva o le cuesta recibirla', 'La recibe bien y la aplica')
    .setRequired(true);

  // Pregunta 17: Alineación con la Forma de Trabajar del Área
  form.addScaleItem()
    .setTitle('¿Qué tan alineadas percibes las prioridades y forma de trabajar del colaborador con la manera en que se hacen las cosas en tu área?')
    .setBounds(1, 5)
    .setLabels('Percibo choques o formas de trabajo muy distintas', 'Está muy alineado con la dinámica del área')
    .setRequired(true);

  // ═══════════════════════════════════════════════════════════
  // SECCIÓN 4: REVELADORES CLAVE (4 preguntas abiertas)
  // ═══════════════════════════════════════════════════════════

  form.addSectionHeaderItem()
    .setTitle('🎯 ALERTAS Y FORTALEZAS')
    .setHelpText('Este espacio es para lo que no cabe en una escala numérica');

  // Pregunta 18: Fortaleza Identificada
  form.addParagraphTextItem()
    .setTitle('¿Qué fortaleza específica has notado en este colaborador durante su proceso de adaptación?')
    .setRequired(false);

  // Pregunta 19: Alerta o Dificultad
  form.addParagraphTextItem()
    .setTitle('¿Hay alguna dificultad, alerta o situación con este colaborador que consideres importante que RH conozca?')
    .setRequired(false);

  // Pregunta 20: Mejora al Proceso de Inducción
  form.addParagraphTextItem()
    .setTitle('Si pudieras cambiar algo del proceso de inducción que recibió este colaborador antes de llegar a tu equipo, ¿qué sería?')
    .setRequired(false);

  // Pregunta 21: Síntesis en una Frase
  form.addTextItem()
    .setTitle('En una frase, ¿cómo describirías el nivel de adaptación actual de este colaborador?')
    .setRequired(false);

  // ═══════════════════════════════════════════════════════════
  // OBTENER URL DEL FORMULARIO
  // ═══════════════════════════════════════════════════════════

  const formUrl = form.getPublishedUrl();
  const editUrl = form.getEditUrl();

  Logger.log('✅ ¡ENCUESTA DE JEFES CREADA EXITOSAMENTE!');
  Logger.log('');
  Logger.log('📋 PARA RESPONDER (compartir con jefes de área/zona):');
  Logger.log(formUrl);
  Logger.log('');
  Logger.log('✏️ PARA EDITAR (solo tú):');
  Logger.log(editUrl);
  Logger.log('');
  Logger.log('═════════════════════════════════════════');
  Logger.log('');
  Logger.log('IMPORTANTE:');
  Logger.log('Este formulario es INDEPENDIENTE al de colaboradores.');
  Logger.log('Tiene su propia URL, su propia hoja de Google Sheets');
  Logger.log('y su propio Dashboard cuando lo conectes.');
  Logger.log('');
  Logger.log('PRÓXIMOS PASOS:');
  Logger.log('1. Abre el link "PARA RESPONDER" y verifica las preguntas');
  Logger.log('2. Ve a Respuestas -> crea la hoja de cálculo vinculada');
  Logger.log('3. Comparte el link con los jefes de área/zona (no con colaboradores)');
  Logger.log('4. El nombre del colaborador (Pregunta 3) es la llave para');
  Logger.log('   cruzar esta información con la encuesta de colaboradores');
  Logger.log('');
  Logger.log('═════════════════════════════════════════');
}

/**
 * BONUS: Script para borrar el form de jefes si algo sale mal
 * Descomenta y ejecuta si necesitas empezar de nuevo
 */

// function listarFormsJefesYBorrar() {
//   const forms = DriveApp.getFilesByName('Evaluación de Adaptación del Colaborador - Perspectiva del Jefe/Líder - Providencia S.A.');
//   while (forms.hasNext()) {
//     const form = forms.next();
//     Logger.log('Borrando: ' + form.getName());
//     form.setTrashed(true);
//   }
//   Logger.log('✅ Form de jefes borrado. Puedes ejecutar crearEncuestaJefes() nuevamente.');
// }
