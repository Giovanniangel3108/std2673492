function crearPatronNumeros(filas) {
    for (let i = 1; i <= filas; i++) {
      let linea = "";
      for (let j = 0; j < i; j++) {
        linea += i;
      }
      console.log(linea);
    }
  }
  
  // Ejemplo de uso
  crearPatronNumeros(5);
  