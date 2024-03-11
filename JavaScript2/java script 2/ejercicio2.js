function encontrarPalabraMasLarga(texto) {
    // Convertir la cadena en un array de palabras
    const palabras = texto.split(" ");
  
    // Variable para almacenar la palabra más larga
    let palabraMasLarga = "";
  
    // Recorrer el array de palabras
    for (const palabra of palabras) {
      // Si la palabra actual es más larga que la palabra más larga
      if (palabra.length > palabraMasLarga.length) {
        // Actualizar la palabra más larga
        palabraMasLarga = palabra;
      }
    }
  
    return palabraMasLarga;
  }
  
  // Ejemplo de uso
  const texto = "análisis y desarrollo de software";
  const palabraMasLarga = encontrarPalabraMasLarga(texto);
  console.log(palabraMasLarga); // "desarrollo"
  
  