function crearPatronLetras(filas) {
    for (let i = 1; i <= filas; i++) {
      let letra = String.fromCharCode(64 + i);
      let linea = "";
      for (let j = 0; j < i; j++) {
        linea += letra;
      }
      console.log(linea);
    }
  }
  
  // Ejemplo de uso
  crearPatronLetras(5);
  