function contarVocales(texto) {
    // Convertir la cadena a minúsculas
    const textoMinusculas = texto.toLowerCase();
  
    // Expresión regular para las vocales
    const vocales = /[aeiou]/g;
  
    // Contar el número de coincidencias de la expresión regular en la cadena
    const numeroVocales = textoMinusculas.match(vocales).length;
  
    return numeroVocales;
  }
  
  // Ejemplo de uso
  const texto = "analisis y desarrollo de software";
  const numeroVocales = contarVocales(texto);
  console.log(numeroVocales); // 14
   