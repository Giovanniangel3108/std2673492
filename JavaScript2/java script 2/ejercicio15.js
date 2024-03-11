function crearPatronAsteriscos(filas) {
    for (let i = 0; i < filas; i++) {
      let linea = "";
      for (let j = 0; j <= i; j++) {
        linea += "*";
      }
      console.log(linea);
    }
  
    // Imprimir la mitad inferior del patrón
    for (let i = filas - 2; i >= 0; i--) {
      let linea = "";
      for (let j = 0; j <= i; j++) {
        linea += "*";
      }
      console.log(linea);
    }
  }
  
  // Ejemplo de uso
  crearPatronAsteriscos(5);
  