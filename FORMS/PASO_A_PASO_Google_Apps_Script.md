# 🚀 PASO A PASO: EJECUTAR SCRIPT AUTOMÁTICO

**Tiempo total: 5 minutos**

---

## 📋 PASO 1: Abrir Google Apps Script

1. Abre una nueva pestaña en tu navegador
2. Ve a: **https://script.google.com**
3. Inicia sesión con tu cuenta Google si es necesario

**Resultado**: Deberías ver una página que dice "Google Apps Script" con un botón "Crear un nuevo proyecto"

---

## ➕ PASO 2: Crear Nuevo Proyecto

1. Click en el botón azul **"➕ Nuevo proyecto"** (arriba a la izquierda)

2. Te abrirá un editor de código en blanco

3. Verás un archivo llamado `Code.gs` con código de ejemplo

**Resultado**: Editor vacío o con código de prueba

---

## 🗑️ PASO 3: Limpiar el Código Existente

1. Selecciona TODO el código que viene por defecto
   - Click en el editor
   - Presiona **Ctrl+A** (o Cmd+A en Mac)

2. Presiona **Delete** o **Backspace** para eliminarlo

3. El editor debe quedarse completamente vacío

**Resultado**: Editor limpio, listo para nuevo código

---

## 📄 PASO 4: Pegar el Script

1. Abre el archivo: **`Google_Apps_Script_Crear_Encuesta.gs`** que generé

2. Copia TODO el contenido:
   - Ctrl+A (para seleccionar todo)
   - Ctrl+C (para copiar)

3. Vuelve a la pestaña de Google Apps Script

4. Click en el editor (área de código)

5. Pega el código:
   - Ctrl+V (para pegar)

**Resultado**: Ves todo el código en el editor de Google Apps Script

---

## 🎬 PASO 5: Ejecutar el Script

1. Busca el botón **"Ejecutar"** o **"▶ Run"** en la parte superior (lado izquierdo)

2. Click en el botón **"Ejecutar"**

**Resultado**: 
- Aparecerá un cuadro pidiendo autorización
- Posiblemente te pida que verifiques tu identidad Google

---

## 🔐 PASO 6: Autorizar Permisos

Cuando haga click en Ejecutar, Google pedirá permisos:

1. Verás un mensaje como: **"Este script necesita acceso a tu cuenta"**

2. Click en **"Revisar permisos"** o **"Authorize"**

3. Te mostrará: "Google Apps Script quiere acceso a tus documentos"

4. Click en tu email/cuenta Google

5. Click en **"Permitir"** o **"Allow"**

**Por qué lo pide:**
- El script necesita crear un Google Form en tu cuenta
- Necesita acceso a tu Google Drive
- Es seguro - es TU código, en TU cuenta

---

## ⏳ PASO 7: Esperar a que Termine

El script se ejecutará automáticamente (tarda ~30-60 segundos)

Verás:
- Barra de progreso
- La palabra "Ejecutando..." desaparecerá cuando termine

**Resultado**: Script terminado (aparecerá un ✓)

---

## 📍 PASO 8: Ver los Resultados

1. Busca la pestaña **"Registros de ejecución"** o **"Execution log"** (abajo del editor)

2. Click en la pestaña de Registros

3. Verás un mensaje que dice:
```
✅ ¡ENCUESTA CREADA EXITOSAMENTE!

📋 PARA RESPONDER:
https://docs.google.com/forms/d/XXXXXXXXXXXX/viewform

✏️ PARA EDITAR:
https://docs.google.com/forms/d/XXXXXXXXXXXX/edit
```

**Copia estos links** - los usarás ahora

---

## 🔗 PASO 9: Abrir tu Google Form Nuevo

1. Copia el link que dice **"PARA RESPONDER"** de los registros

2. Abre una nueva pestaña

3. Pega el link en la barra de direcciones y presiona Enter

4. ¡Verás tu encuesta completamente creada con todas las 20 preguntas! 🎉

**Verifica que veas:**
- Título: "Encuesta de Experiencia de Onboarding - Providencia S.A."
- Sección 1: Información Básica (4 preguntas)
- Sección 2: Experiencia Técnica (6 preguntas escala)
- Sección 3: Experiencia Cultural (6 preguntas escala)
- Sección 4: Perspectiva Sincera (4 preguntas abiertas)

---

## ✅ PASO 10: Validar que Todo Está Perfecto

### Revisar Estructura

1. Scroll hacia abajo en tu form
2. Verifica que todas las preguntas estén presentes
3. Comprueba que las escalas 1-5 estén correctas
4. Valida que las secciones estén claras

### Hacer una Prueba

1. Click en **"Responder"** (arriba del form)

2. Llena una respuesta de prueba:
   - Nombre: "Test"
   - Email: tu email
   - Departamento: cualquiera
   - Fecha: hoy
   - Escalas: algunas opciones (ej: 4, 5, 3, etc.)
   - Textos abiertos: "prueba"

3. Click en **"Enviar"** al final

### Verificar Respuesta

1. Vuelve al form
2. Click en pestaña **"Respuestas"**
3. Deberías ver tu respuesta de prueba listada

**Perfecto**: ¡El form está 100% funcional!

---

## 📊 PASO 11: Obtener Link de Compartir

1. En tu Google Form abierto, busca botón **"Enviar"** (arriba a la derecha, junto a Más opciones)

2. Click en **"Enviar"**

3. Verás 3 opciones: Email, Link, Embed

4. Click en **"Link"** (el ícono de cadena 🔗)

5. Click en **"Copiar"**

**Resultado**: Ya tienes el link copiado en tu portapapeles

---

## 🎯 PASO 12: Guardar Referencias Importantes

Crea un archivo de texto y guarda:

```
ENCUESTA ONBOARDING PROVIDENCIA - REFERENCIAS

📋 LINK PARA RESPONDER (compartir con nuevos ingresos):
https://docs.google.com/forms/d/XXXXXX/viewform

✏️ LINK PARA EDITAR (solo tú):
https://docs.google.com/forms/d/XXXXXX/edit

📊 LINK A RESPUESTAS (verás datos recolectados):
https://docs.google.com/forms/d/XXXXXX/responses

📑 GOOGLE SHEETS VINCULADO (datos automáticos):
[Se crea automáticamente cuando recibas primera respuesta]

INICIO: 1 de julio de 2026
META: 60% respuestas
PERÍODO: julio - octubre 2026
```

---

## 🚨 TROUBLESHOOTING

### Problema: "Error: Something went wrong"
```
Solución:
1. Cierra la pestaña
2. Vuelve a https://script.google.com
3. Intenta ejecutar nuevamente
4. Si persiste, abre una nueva ventana incógnita (Ctrl+Shift+N)
```

### Problema: "Permission denied"
```
Solución:
1. Verifica que iniciaste sesión en Google
2. Click en "Revisar permisos" nuevamente
3. Autoriza completamente
4. Ejecuta el script otra vez
```

### Problema: "No puedo ver los logs/registros"
```
Solución:
1. Mira en la parte inferior del editor
2. Deberías ver: "Logs | Executions"
3. Click en la pestaña correcta
4. Si no ves nada, espera 10 segundos más
```

### Problema: El Form se creó pero hay un error en una pregunta
```
Solución:
1. Abre el link "PARA EDITAR"
2. Busca la pregunta con error
3. Click en ella
4. Edita manualmente
5. Click en Guardado
```

---

## ✨ VERIFICACIÓN FINAL

Antes de enviar a tu equipo, verifica:

```
✅ Todas las 4 secciones visibles
✅ Preguntas 1-4: Información (texto, email, múltiple opción, fecha)
✅ Preguntas 5-10: Escalas 1-5 (técnica)
✅ Preguntas 11-16: Escalas 1-5 (cultura)
✅ Preguntas 17-20: Texto abierto (reveladores)
✅ Barra de progreso visible (arriba)
✅ Descripción clara visible
✅ Prueba funciona (respuesta se guardó)
```

Si TODOS los ✅ están marcados: **¡Perfecto! Tu encuesta está lista.**

---

## 🎬 PRÓXIMOS PASOS DESPUÉS DE CREAR

1. **Comparte el link** con tu equipo de RH
2. **Copia el link en tu lista de referencias**
3. **Crea Google Sheets vinculado** (siguiente paso)
4. **Crea Dashboard en Data Studio** (paso siguiente)
5. **Envía a nuevos ingresos a partir del 1 julio**

---

## 📞 AYUDA RÁPIDA

Si algo no funciona:

**Opción 1**: Re-ejecutar
```
1. Script.google.com
2. Click "Ejecutar" nuevamente
3. Autoriza si pide
```

**Opción 2**: Borrar y crear de nuevo
```
1. Descomenta la función "listarFormsYBorrar()" al final del script
2. Ejecuta esa función
3. Vuelve a ejecutar "crearEncuestaOnboarding()"
```

**Opción 3**: Crear manualmente
```
Si el script falla, usa "Paso_a_Paso_Implementacion.md"
y crea el form manualmente (45 minutos)
```

---

## 🎉 ¡LISTO!

Ya tienes tu encuesta automáticamente creada y funcional.

**Tiempo total gastado: ~5 minutos** ⏱️

**Siguiente: Conectar Google Sheets** (15 minutos)

¿Necesitas ayuda con el siguiente paso?
