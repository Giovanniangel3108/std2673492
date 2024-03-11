function crearPatronDiamante(filas) {
    for (let i = 0; i < filas; i++) {
      let linea = "";
      let espacios = " ".repeat(filas - i - 1);
      for (let j = 0; j <= i * 2; j++) {
        if (j <= i) {
          linea += "*";
        } else {
          linea += " ";
        }
      }
      console.log(espacios + linea + espacios);
    }
  
    // Imprimir la mitad inferior del diamante
    for (let i = filas - 2; i >= 0; i--) {
      let linea = "";
      let espacios = " ".repeat(filas - i - 1);
      for (let j = 0; j <= i * 2; j++) {
        if (j <= i) {
          linea += "*";
        } else {
          linea += " ";
        }
      }
      console.log(espacios + linea + espacios);
    }
  }
  
  // Ejemplo de uso
  crearPatronDiamante(5);
  