const tableroPuntuacion = {
  Percy: 450,
  Annabeth: 300,
  Grover: 270,
  Clarisse: 260
};

let mejorParticipante = '';
let mayorPuntaje = 0;

for (const participante in tableroPuntuacion) {
  if (tableroPuntuacion[participante] > mayorPuntaje) {
    mayorPuntaje = tableroPuntuacion[participante];
    mejorParticipante = participante;
  }
}

console.log(mejorParticipante);

// Resultado esperado:
// Percy
