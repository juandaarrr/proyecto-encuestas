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
