const asientos = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"],
    ["D1", "D2", "D3", "D4"],
    ["E1", "E2", "E3", "E4"],
    ["F1", "F2", "F3", "F4"],
    ["G1", "G2", "G3", "G4"],
    ["H1", "H2", "H3", "H4"],
    ["I1", "I2", "I3", "I4"],
    ["J1", "J2", "J3", "J4"],
  ];
  function mostrarAsientos(asientos) {
    for (const fila of asientos) {
      console.log(fila.join(" "));
    }
  }
  
  function reservarAsiento(asientos, fila, numero) {
    if (asientos[fila - 1][numero - 1] === "X") {
      console.log("El asiento ya está reservado");
    } else {
      asientos[fila - 1][numero - 1] = "X";
      console.log("Asiento reservado correctamente");
    }
  }
  mostrarAsientos(asientos);

  // Reservar el asiento A2
  reservarAsiento(asientos, 1, 2);
  
  // Mostrar la matriz de asientos después de la reserva
  mostrarAsientos(asientos);
    