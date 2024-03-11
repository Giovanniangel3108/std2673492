function ordenarAlfabeticamente(texto) {
    // Convertir la cadena a un array de caracteres
    const caracteres = texto.split("");
  
    // Ordenar el array de caracteres
    caracteres.sort();
  
    // Unir el array de caracteres en una nueva cadena
    const textoOrdenado = caracteres.join("");
  
    return textoOrdenado;
  }
  
  // Ejemplo de uso
  const texto = "software";
  const textoOrdenado = ordenarAlfabeticamente(texto);
  console.log(textoOrdenado); // "aegorstw"
    