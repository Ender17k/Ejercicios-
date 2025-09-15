const tableroPuntuacion = {
  Percy: 300,
  Annabeth: 280,
  Grover: 270
};

delete tableroPuntuacion.Grover;

console.log(tableroPuntuacion);

// Resultado esperado:
// { Percy: 300, Annabeth: 280 }
