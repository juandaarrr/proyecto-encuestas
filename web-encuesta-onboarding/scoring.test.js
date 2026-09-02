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
