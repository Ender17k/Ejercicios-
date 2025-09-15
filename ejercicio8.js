const tableroPuntuacion = {
  Percy: 450,
  Annabeth: 300,
  Grover: 270,
  Clarisse: 260
};

let puntajeTotal = 0;

for (const participante in tableroPuntuacion) {
  puntajeTotal += tableroPuntuacion[participante];
}

console.log(puntajeTotal);

// Resultado esperado:
// 1280
