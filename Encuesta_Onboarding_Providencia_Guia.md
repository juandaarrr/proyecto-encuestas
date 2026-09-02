# 📋 GUÍA COMPLETA: Automatización Encuesta de Onboarding - Providencia S.A.

**Objetivo**: Implementar encuesta de experiencia de onboarding para medir integración cultural y operativa
**Meta**: 60% de respuestas de nuevos ingresos (julio - octubre 2026)
**Peso**: 30%

---

## 📊 ESTRUCTURA DEL PROTOTIPO

```
Google Form (Encuesta)
        ↓
Google Sheets (Base de datos)
        ↓
Data Studio (Dashboard de resultados)
```

---

## 🔍 SECCIÓN 1: DISEÑO DE LA ENCUESTA

### Dimensiones a Medir

#### 1. **Integración Cultural** (5 preguntas)
- Sentido de pertenencia a la empresa
- Alineación con valores corporativos
- Relación con compañeros
- Comprensión de la cultura organizacional
- Inclusión en actividades de equipo

#### 2. **Integración Operativa** (5 preguntas)
- Claridad en funciones y responsabilidades
- Disponibilidad de herramientas necesarias
- Capacitación recibida
- Claridad en procesos y procedimientos
- Apoyo del líder directo

#### 3. **Información del Respondente** (3 preguntas)
- Nombre del nuevo colaborador
- Departamento/Área
- Fecha de ingreso

#### 4. **Preguntas Demográficas** (2 preguntas)
- Tipo de contrato
- Antigüedad en la empresa (fecha)

**Total: 15 preguntas**

---

## ✅ PREGUNTAS ESPECÍFICAS

### SECCIÓN A: INFORMACIÓN DEL RESPONDENTE

1. **Nombre completo** (Texto corto)
   - Respuesta corta

2. **Correo electrónico** (Correo)
   - Para validación y seguimiento

3. **Departamento/Área donde trabaja** (Opción múltiple)
   - Recursos Humanos
   - Operaciones
   - Comercial/Ventas
   - Tecnología
   - Administración
   - Otros (especificar)

4. **Fecha de ingreso a Providencia** (Fecha)
   - Para calcular días desde ingreso

---

### SECCIÓN B: INTEGRACIÓN CULTURAL (Escala 1-5)

5. **¿Qué tan identificado/a te sientes con los valores de Providencia?**
   - 1 (Nada identificado) → 5 (Totalmente identificado)

6. **¿Has recibido bienvenida y orientación sobre la cultura de la empresa?**
   - 1 (No, nada) → 5 (Sí, muy completa)

7. **¿Te sientes integrado/a con tu equipo de trabajo?**
   - 1 (Nada integrado) → 5 (Totalmente integrado)

8. **¿Conoces a compañeros de otras áreas?**
   - 1 (No conozco a nadie) → 5 (Conozco a muchos)

9. **¿Has participado en actividades sociales o de integración?**
   - 1 (No) → 5 (Sí, varias)

---

### SECCIÓN C: INTEGRACIÓN OPERATIVA (Escala 1-5)

10. **¿Tienes claridad sobre tus funciones y responsabilidades?**
    - 1 (Nada claro) → 5 (Completamente claro)

11. **¿Contaste con las herramientas y sistemas necesarios desde el primer día?**
    - 1 (No) → 5 (Sí, todo)

12. **¿Recibiste capacitación adecuada para tu rol?**
    - 1 (No adecuada) → 5 (Muy adecuada)

13. **¿Comprendes los procesos y procedimientos de tu área?**
    - 1 (No comprendo) → 5 (Comprendo totalmente)

14. **¿Tu líder directo te ha brindado apoyo y orientación?**
    - 1 (No, nada) → 5 (Sí, mucho apoyo)

---

### SECCIÓN D: COMENTARIOS ABIERTOS

15. **¿Qué aspecto te ha gustado más de tu experiencia de onboarding?** (Respuesta larga)

16. **¿Qué aspectos crees que se pueden mejorar?** (Respuesta larga)

17. **¿Hay algo adicional que quieras compartir?** (Respuesta larga)

---

## 📈 MÉTRICAS A CALCULAR

| Métrica | Fórmula | Uso |
|---------|---------|-----|
| **Tasa de Respuesta (%)** | (Respuestas recibidas / Nuevos ingresos) × 100 | Meta: 60% |
| **Puntuación Integración Cultural** | Promedio preguntas 5-9 | Escala 1-5 |
| **Puntuación Integración Operativa** | Promedio preguntas 10-14 | Escala 1-5 |
| **Puntuación General** | Promedio todas las respuestas | Escala 1-5 |
| **Respuestas por Departamento** | Contar respuestas por área | Comparación |
| **Respuestas por Mes** | Contar respuestas agrupadas por mes | Tendencia |

---

## 🛠️ PASO A PASO: IMPLEMENTACIÓN

### **PASO 1: Crear el Google Form**

1. Ir a [forms.google.com](https://forms.google.com)
2. Crear nuevo formulario
3. Título: "Encuesta de Experiencia de Onboarding - Providencia S.A."
4. Descripción: "Ayúdanos a mejorar tu experiencia de integración"
5. Agregar las 17 preguntas con los tipos de respuesta especificados arriba
6. Configurar:
   - ✅ Recopilar direcciones de correo
   - ✅ Mostrar barra de progreso
   - ✅ Permite ver resumen de respuestas

**URL del Form**: (se proporciona después de crear)

---

### **PASO 2: Conectar Google Sheets**

1. En el Google Form, ir a **Respuestas** → **Crear hoja de cálculo**
2. Se crea automáticamente una hoja vinculada
3. Las respuestas se guardan automáticamente cada vez que alguien responde

**Estructura de la hoja**:
```
Timestamp | Nombre | Email | Departamento | Fecha Ingreso | P5 | P6 | ... | P17
```

---

### **PASO 3: Agregar Columnas Calculadas en Google Sheets**

En la hoja, agregar estas columnas después de las respuestas:

| Columna | Fórmula | Descripción |
|---------|---------|-------------|
| **Días desde ingreso** | `=TODAY()-Fecha_Ingreso` | Calcular antigüedad |
| **Puntuación Cultura** | `=AVERAGE(P5:P9)` | Promedio integración cultural |
| **Puntuación Operativa** | `=AVERAGE(P10:P14)` | Promedio integración operativa |
| **Puntuación General** | `=AVERAGE(P5:P14)` | Promedio total |
| **Estado** | IF(Puntuación General >= 3.5, "Bien", "Revisar") | Semáforo |

---

### **PASO 4: Crear Dashboard en Data Studio**

1. Ir a [datastudio.google.com](https://datastudio.google.com)
2. Crear nuevo reporte
3. Conectar con la hoja de Google Sheets
4. Agregar visualizaciones:

#### **Card/Tarjeta 1: Tasa de Respuesta**
- Métrica: Contar filas (respuestas)
- Filtro: Desde 1 julio 2026 al 31 octubre 2026
- Objetivo: Meta 60%

#### **Card 2: Puntuación Promedio General**
- Métrica: Average de Puntuación General
- Rango: 1-5

#### **Gráfico 1: Respuestas por Semana**
- Tipo: Gráfico de líneas
- Dimensión: Fecha (agrupado por semana)
- Métrica: Contar respuestas

#### **Gráfico 2: Integración Cultural vs Operativa**
- Tipo: Gráfico de barras
- Dimensiones: Departamento
- Métricas: Promedio Cultura, Promedio Operativa

#### **Gráfico 3: Respuestas por Departamento**
- Tipo: Gráfico de pastel
- Dimensión: Departamento
- Métrica: Contar respuestas

#### **Tabla 4: Detalle de Respuestas**
- Mostrar: Nombre, Email, Departamento, Puntuación General, Estado
- Ordenar por: Fecha descendente

#### **Card 5: Puntuación Integración Cultural**
- Métrica: Average Puntuación Cultura
- Rango: 1-5

#### **Card 6: Puntuación Integración Operativa**
- Métrica: Average Puntuación Operativa
- Rango: 1-5

---

## 📅 PLAN DE IMPLEMENTACIÓN

| Fase | Tarea | Tiempo | Responsable |
|------|-------|--------|-------------|
| **Semana 1** | Crear Google Form y diseño | 2-3 horas | TU |
| **Semana 1** | Validar preguntas con RH | 1-2 horas | RH |
| **Semana 2** | Conectar Google Sheets | 30 min | TU |
| **Semana 2** | Crear Data Studio Dashboard | 2-3 horas | TU |
| **Semana 2** | Pruebas del sistema | 1-2 horas | TU |
| **Semana 3** | Capacitar a RH sobre uso | 1 hora | TU |
| **1 Julio** | Enviar form a nuevos ingresos | Ongoing | RH |

---

## 🎯 SEGUIMIENTO Y MEJORA

### Envío de Encuestas
- **Automatizar recordatorios** con Zapier (opcional):
  - Cuando se agrega un nuevo empleado a una lista
  - Se envía automáticamente el link del form
  - Se envía recordatorio a los 7 días si no responde

### Revisión Periódica
- **Semanal**: Revisar tasa de respuesta vs meta
- **Quincenal**: Analizar puntuaciones por departamento
- **Mensual**: Reporte ejecutivo con insights

---

## 📞 SOPORTE Y VALIDACIÓN

- **Validar respuestas calidad**: Revisar comentarios abiertos semanalmente
- **Seguimiento personas con puntuación baja**: Si <3.5, contactar para mejorar experiencia
- **Ajustes**: Si tasa respuesta <60%, aplicar estrategia de reenvío

---

**Próximo paso**: Crear el Google Form con las preguntas específicas
