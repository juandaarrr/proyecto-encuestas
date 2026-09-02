# 🚀 PASO A PASO: Implementación Técnica Detallada

---

## ✅ PASO 1: CREAR GOOGLE FORM (45 minutos)

### 1.1 Abrir Google Forms
```
1. Ir a https://forms.google.com
2. Iniciar sesión con tu cuenta de Google
3. Click en "+ Crear" → "Formulario en blanco"
```

### 1.2 Configurar Información Básica
```
Título:        "Encuesta de Experiencia de Onboarding - Providencia S.A."
Descripción:   "Queremos conocer tu experiencia de integración cultural y operativa.
                Tu retroalimentación es valiosa para nosotros.
                Tiempo estimado: 5-7 minutos"
Tema:          Seleccionar color azul/corporativo
```

### 1.3 Configurar Opciones Generales
**Ir a ⚙️ Configuración**

```
✅ Mostrar barra de progreso
✅ Permitir edición después del envío (desmarcar si prefieres una respuesta)
✅ Mostrar resumen de respuestas
❌ Aceptar solo 1 respuesta por usuario
✅ Limitar respuestas a usuarios de Providencia (opcional)
```

### 1.4 Configurar Recopilación de Correo

**En la primera pregunta**:
1. Click en el icono de 3 puntos (⋮)
2. Seleccionar "Recopilar direcciones de correo"
3. Elegir "Verificado" para verificar usuarios

---

## 📝 PASO 2: AGREGAR PREGUNTAS AL FORMULARIO (90 minutos)

### Estructura de Preguntas

#### **SECCIÓN 1: INFORMACIÓN DEL RESPONDENTE** (5 min)

**Pregunta 1: Nombre completo**
```
Tipo: Respuesta corta
Pregunta: "¿Cuál es tu nombre completo?"
Obligatoria: SÍ
```

**Pregunta 2: Correo electrónico**
```
Tipo: Correo electrónico
Pregunta: "¿Cuál es tu correo electrónico?"
Obligatoria: SÍ
```

**Pregunta 3: Departamento**
```
Tipo: Opción múltiple (una respuesta)
Pregunta: "¿En qué departamento/área trabajas?"
Opciones:
  - Recursos Humanos
  - Operaciones
  - Comercial/Ventas
  - Tecnología
  - Administración
  - Servicios al Cliente
  - Otro (especificar)
Obligatoria: SÍ
```

**Pregunta 4: Fecha de ingreso**
```
Tipo: Fecha
Pregunta: "¿Cuál es tu fecha de ingreso a Providencia?"
Formato: 31/12/2026
Obligatoria: SÍ
```

---

#### **SECCIÓN 2: INTEGRACIÓN CULTURAL** (10 min)

**Para todas estas, usar Escala lineal 1-5**

**Pregunta 5**
```
Escala: 1 → 5
Pregunta: "¿Qué tan identificado/a te sientes con los valores de Providencia?"
Etiqueta 1: "Nada identificado"
Etiqueta 5: "Totalmente identificado"
Obligatoria: SÍ
```

**Pregunta 6**
```
Escala: 1 → 5
Pregunta: "¿Has recibido bienvenida y orientación clara sobre la cultura de nuestra empresa?"
Etiqueta 1: "No, nada"
Etiqueta 5: "Sí, muy completa"
Obligatoria: SÍ
```

**Pregunta 7**
```
Escala: 1 → 5
Pregunta: "¿Te sientes integrado/a con tu equipo de trabajo?"
Etiqueta 1: "Nada integrado"
Etiqueta 5: "Totalmente integrado"
Obligatoria: SÍ
```

**Pregunta 8**
```
Escala: 1 → 5
Pregunta: "¿Conoces a compañeros de otras áreas de la empresa?"
Etiqueta 1: "No conozco a nadie"
Etiqueta 5: "Conozco a muchos"
Obligatoria: SÍ
```

**Pregunta 9**
```
Escala: 1 → 5
Pregunta: "¿Has participado en actividades sociales o de integración del equipo?"
Etiqueta 1: "No he participado"
Etiqueta 5: "He participado en varias"
Obligatoria: SÍ
```

---

#### **SECCIÓN 3: INTEGRACIÓN OPERATIVA** (10 min)

**Pregunta 10**
```
Escala: 1 → 5
Pregunta: "¿Tienes claridad sobre tus funciones y responsabilidades?"
Etiqueta 1: "Nada claro"
Etiqueta 5: "Completamente claro"
Obligatoria: SÍ
```

**Pregunta 11**
```
Escala: 1 → 5
Pregunta: "¿Contaste con las herramientas y sistemas necesarios desde tu primer día?"
Etiqueta 1: "No, ninguno"
Etiqueta 5: "Sí, todos"
Obligatoria: SÍ
```

**Pregunta 12**
```
Escala: 1 → 5
Pregunta: "¿Recibiste capacitación adecuada para tu rol?"
Etiqueta 1: "No adecuada"
Etiqueta 5: "Muy adecuada"
Obligatoria: SÍ
```

**Pregunta 13**
```
Escala: 1 → 5
Pregunta: "¿Comprendes los procesos y procedimientos de tu área?"
Etiqueta 1: "No comprendo"
Etiqueta 5: "Comprendo totalmente"
Obligatoria: SÍ
```

**Pregunta 14**
```
Escala: 1 → 5
Pregunta: "¿Tu líder directo te ha brindado apoyo y orientación adecuada?"
Etiqueta 1: "No, nada"
Etiqueta 5: "Sí, mucho apoyo"
Obligatoria: SÍ
```

---

#### **SECCIÓN 4: COMENTARIOS ABIERTOS** (5 min)

**Pregunta 15**
```
Tipo: Respuesta larga (párrafo)
Pregunta: "¿Qué aspecto te ha gustado más de tu experiencia de onboarding?"
Obligatoria: NO
```

**Pregunta 16**
```
Tipo: Respuesta larga (párrafo)
Pregunta: "¿Qué aspectos crees que se pueden mejorar?"
Obligatoria: NO
```

**Pregunta 17**
```
Tipo: Respuesta larga (párrafo)
Pregunta: "¿Hay algo adicional que quieras compartir con nosotros?"
Obligatoria: NO
```

---

## 💾 PASO 3: CONECTAR CON GOOGLE SHEETS (15 minutos)

### 3.1 Crear Hoja de Respuestas

```
1. En el Google Form, ir a la pestaña "RESPUESTAS"
2. Click en el icono de Google Sheets (tabla)
3. Click en "Crear una nueva hoja de cálculo"
4. Nombrar: "Encuesta_Onboarding_Responses_[AAAA-MM]"
5. Click en "Crear"
```

**Se crea automáticamente una hoja vinculada** donde se guardarán todas las respuestas.

### 3.2 Verificar Estructura de la Hoja

La hoja debe tener estas columnas automáticamente:
```
A: Timestamp (Fecha/hora)
B: Correo electrónico
C: Nombre completo
D: Email (si se configura)
E: Departamento
F: Fecha de ingreso
G-K: Preguntas 5-9 (Escala Cultura)
L-P: Preguntas 10-14 (Escala Operativa)
Q-S: Respuestas abiertas
```

---

## 📊 PASO 4: AGREGAR COLUMNAS CALCULADAS EN SHEETS (30 minutos)

### 4.1 Insertar Nuevas Columnas

Después de la última respuesta abierta, agregar estas columnas:

**Columna T: "Puntuación_Cultura"**
```
Encabezado: Puntuación Integración Cultural
Fila 2: =AVERAGE(G2:K2)
Copiar fórmula hacia abajo
Formato: Número con 2 decimales
```

**Columna U: "Puntuacion_Operativa"**
```
Encabezado: Puntuación Integración Operativa
Fila 2: =AVERAGE(L2:P2)
Copiar fórmula hacia abajo
Formato: Número con 2 decimales
```

**Columna V: "Puntuacion_General"**
```
Encabezado: Puntuación General
Fila 2: =AVERAGE(G2:P2)
Copiar fórmula hacia abajo
Formato: Número con 2 decimales
```

**Columna W: "Dias_Desde_Ingreso"**
```
Encabezado: Días desde Ingreso
Fila 2: =TODAY()-F2
Copiar fórmula hacia abajo
Formato: Número entero
```

**Columna X: "Estado"**
```
Encabezado: Estado
Fila 2: =IF(V2>=3.5,"✅ Bien","⚠️ Revisar")
Copiar fórmula hacia abajo
```

### 4.2 Crear Tabla Pivote para Resumen (Opcional)

En una nueva hoja llamada "RESUMEN":

```
1. Ir a "RESUMEN" (o crear nueva hoja)
2. Crear tablas con:
   - Total de respuestas
   - Tasa de cumplimiento (%)
   - Promedio general
   - Promedio por departamento
   - Tendencia por semana
```

**Ejemplo fórmula en RESUMEN**:
```
Total Respuestas: =COUNTA(Responses!B2:B)
Promedio General: =AVERAGE(Responses!V2:V)
Respuestas por Depto: =COUNTIF(Responses!E:E,"Operaciones")
```

---

## 📈 PASO 5: CREAR DASHBOARD EN DATA STUDIO (60-90 minutos)

### 5.1 Acceder a Data Studio

```
1. Ir a https://datastudio.google.com
2. Iniciar sesión con tu cuenta de Google
3. Click en "+ Crear" → "Reporte"
```

### 5.2 Conectar Fuente de Datos (Google Sheets)

```
1. Click en "Crear una conexión"
2. Buscar "Google Sheets"
3. Seleccionar tu hoja "Encuesta_Onboarding_Responses_[AAAA-MM]"
4. Click en "Conectar"
5. Seleccionar rango: "Responses" (o la pestaña con datos)
6. Click en "Crear informe"
```

### 5.3 Configurar Primera Página del Dashboard

**Título**: "Encuesta de Onboarding - Providencia S.A. [Período]"

**Layout recomendado**:
```
Primera fila (tarjetas KPI):
  [Respuestas] [Tasa %] [Puntuación Cultura] [Puntuación Operativa]

Segunda fila (gráficos):
  [Respuestas por Semana - Línea]  [Respuestas por Depto - Pastel]

Tercera fila (gráficos):
  [Cultura vs Operativa por Depto - Barras]

Cuarta fila (tabla):
  [Detalle de Respuestas]
```

---

### 5.4 Agregar Tarjeta 1: Total de Respuestas

```
1. Click en "+" → "Tarjeta de puntuación"
2. Métrica: "Contar registros"
3. Dimensión: Nada
4. Filtro: Timestamp >= 01/07/2026 AND Timestamp <= 31/10/2026
5. Título: "Total Respuestas Recibidas"
6. Número grande para ver meta
```

### 5.5 Agregar Tarjeta 2: Tasa de Cumplimiento (%)

```
1. Click en "+" → "Tarjeta de puntuación"
2. Crear campo calculado:
   Nombre: "Tasa_Cumplimiento"
   Fórmula: (COUNT_DISTINCT(Nombre) / 60) * 100
   
   [Nota: Reemplazar 60 con número real de nuevos ingresos esperados]

3. Métrica: "Tasa_Cumplimiento"
4. Título: "Tasa de Cumplimiento (%)"
5. Mostrar símbolo de porcentaje
6. Color de fondo: Verde si >60%, Amarillo si 40-60%, Rojo si <40%
```

### 5.6 Agregar Tarjeta 3: Puntuación Integración Cultural

```
1. Click en "+" → "Tarjeta de puntuación"
2. Métrica: "Average" de "Puntuación_Cultura"
3. Título: "Puntuación Integración Cultural"
4. Rango de valores: 1 a 5
5. Formato: 2 decimales
6. Mostrar indicador de rango (escala 1-5)
```

### 5.7 Agregar Tarjeta 4: Puntuación Integración Operativa

```
1. Click en "+" → "Tarjeta de puntuación"
2. Métrica: "Average" de "Puntuación_Operativa"
3. Título: "Puntuación Integración Operativa"
4. Rango de valores: 1 a 5
5. Formato: 2 decimales
```

### 5.8 Agregar Gráfico 1: Respuestas por Semana (Línea)

```
1. Click en "+" → "Gráfico de líneas"
2. Dimensión: Timestamp (Agrupado por Semana)
3. Métrica: Contar registros
4. Título: "Tendencia de Respuestas (Semanal)"
5. Eje X: Semana
6. Eje Y: Cantidad de respuestas
7. Agregar línea de meta (referencia 60%)
```

### 5.9 Agregar Gráfico 2: Respuestas por Departamento (Pastel)

```
1. Click en "+" → "Gráfico circular"
2. Dimensión: Departamento
3. Métrica: Contar registros
4. Título: "Respuestas por Departamento"
5. Mostrar etiquetas de valor y porcentaje
6. Paleta de colores: Predeterminada
```

### 5.10 Agregar Gráfico 3: Cultura vs Operativa (Barras Agrupadas)

```
1. Click en "+" → "Gráfico de barras"
2. Dimensión: Departamento
3. Métrica 1: Average de Puntuación_Cultura
4. Métrica 2: Average de Puntuación_Operativa
5. Título: "Integración por Departamento"
6. Eje X: Departamento
7. Eje Y: Puntuación (escala 1-5)
8. Tipo de serie: Barras agrupadas
```

### 5.11 Agregar Tabla: Detalle de Respuestas

```
1. Click en "+" → "Tabla"
2. Dimensiones: Nombre, Email, Departamento, Fecha de Ingreso
3. Métricas: Puntuación_General, Estado
4. Título: "Detalle de Respuestas"
5. Ordenar por: Timestamp (descendente - más recientes primero)
6. Filas por página: 25
7. Habilitar filtros interactivos
```

### 5.12 Agregar Filtros Interactivos (Opcional)

```
1. Click en "+" → "Filtro"
2. Tipo de filtro: Desplegable
3. Filtro 1: Por Departamento
4. Filtro 2: Por Rango de Fechas
5. Permitir que usuarios cambien filtros
```

---

## 🔄 PASO 6: VALIDAR Y PROBAR (30 minutos)

### 6.1 Prueba del Formulario

```
1. Abrir el Google Form (click en botón "Enviar")
2. Copiar el link de compartir
3. Probar enviando una respuesta de prueba
4. Verificar que aparezca en Google Sheets en tiempo real
5. Verificar que los cálculos en Sheets funcionen correctamente
6. Verificar que aparezca en el Dashboard de Data Studio
```

### 6.2 Validar Cálculos

```
Respuesta de prueba:
- Todas las preguntas de escala: 4
- Puntuación Cultura esperada: 4.0
- Puntuación Operativa esperada: 4.0
- Puntuación General esperada: 4.0
```

### 6.3 Compartir Acceso

**Google Form** (lectura/respuestas):
```
Click en "Enviar" → Copiar link
Compartir con: RH, Líderes, Proveedores de Onboarding
```

**Google Sheets** (edición):
```
Click en "Compartir" → Agregar:
  - Correos del equipo de RH
  - Permiso: Editor
  - Mensaje: "Base de datos de respuestas - Acceso restringido"
```

**Data Studio** (lectura):
```
Click en "Compartir" (arriba a la derecha) → Agregar:
  - Correos de Directivos
  - Correos de RH
  - Permiso: Visualización
```

---

## 📅 PASO 7: CONFIGURAR DISTRIBUCION Y SEGUIMIENTO

### 7.1 Envío Inicial

**Antes del 1 de julio de 2026**:
```
1. Coordinar con RH lista de nuevos ingresos
2. Crear lista de distribución de correos
3. Preparar email de presentación
4. Agendar envío del formulario
```

### 7.2 Email de Presentación

```
Asunto: Tu Encuesta de Onboarding - Ayúdanos a Mejorar ⭐

Contenido:
"Hola [Nombre],

Bienvenido/a a Providencia S.A. 🎉

Nos encantaría conocer tu experiencia durante estos primeros días.
Tu retroalimentación es invaluable para mejorar nuestro proceso de integración.

[LINK DEL FORMULARIO]

⏱️ Tiempo estimado: 5-7 minutos
🔒 Tus respuestas son confidenciales

¡Gracias por tu tiempo!

Equipo de Recursos Humanos"
```

### 7.3 Recordatorios Automáticos (Zapier/Make - Opcional)

```
Si deseas automatizar recordatorios:
1. Ir a zapier.com o make.com (requiere cuenta gratis)
2. Crear "Zap":
   Trigger: "Nuevo correo en Gmail con etiqueta 'Nuevos Ingresos'"
   Action: "Enviar email de formulario"
   Delay: 24 horas después
3. Crear segundo Zap:
   Trigger: "Sin respuesta después de 7 días"
   Action: "Enviar recordatorio"
```

---

## 📊 PASO 8: MONITOREO CONTINUO

### Plan de Revisión

**Semanal** (cada viernes):
```
- Revisar total de respuestas vs meta
- Identificar departamentos con baja respuesta
- Enviar recordatorios a no respondedores
```

**Quincenal** (cada 15 días):
```
- Analizar puntuaciones por departamento
- Revisar comentarios abiertos
- Identificar patrones de mejora
```

**Mensual** (últimos 2 días del mes):
```
- Generar reporte ejecutivo
- Comparar con mes anterior
- Proponer acciones correctivas si necesario
```

### Contacto de Seguimiento

Si puntuación < 3.5:
```
1. Contactar al nuevo colaborador
2. Preguntar sobre dificultades específicas
3. Ofrecer apoyo adicional (capacitación, mentoría, etc.)
4. Documentar acciones tomadas
```

---

## 🎯 CHECKLIST DE IMPLEMENTACIÓN

- [ ] Google Form creado y configurado
- [ ] Todas las 17 preguntas agregadas correctamente
- [ ] Google Sheets conectado y recibiendo respuestas
- [ ] Columnas calculadas creadas en Sheets
- [ ] Data Studio conectado a Google Sheets
- [ ] 6 tarjetas/gráficos configurados en Dashboard
- [ ] Prueba completada (respuesta de prueba enviada)
- [ ] Permisos compartidos (Form, Sheets, Dashboard)
- [ ] Email de presentación preparado
- [ ] Calendario de envío definido (1 julio 2026)
- [ ] Plan de monitoreo documentado

---

## 🆘 TROUBLESHOOTING

**Problema**: El Dashboard no muestra datos
```
Solución:
1. Verificar que Google Sheets tiene datos
2. En Data Studio, ir a "Editor" → "Fuentes de datos"
3. Click en la fuente → "Actualizar"
4. Esperar 2-3 minutos
```

**Problema**: Las fórmulas en Sheets muestran error
```
Solución:
1. Verificar que nombres de columnas sean exactos
2. Revisar que el rango sea correcto (G2:K2, etc.)
3. Si falta data, completar con valores de prueba
```

**Problema**: El Form no guarda respuestas
```
Solución:
1. Verificar que Google Sheets esté conectado
2. Ir a Respuestas → revisar si está vinculada la hoja
3. Desconectar y reconectar la hoja de cálculo
```

---

**¡Listo! Ya tienes el prototipo completo.**

Siguiente: Enviar feedback o necesitas ayuda con algo específico.
