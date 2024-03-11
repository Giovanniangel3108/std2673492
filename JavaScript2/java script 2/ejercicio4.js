function obtenerTipoDato(argumento) {
    return typeof argumento;
  }
  
  // Ejemplos de uso
  console.log(obtenerTipoDato("Hola")); // "string"
  console.log(obtenerTipoDato(10)); // "number"
  console.log(obtenerTipoDato(true)); // "boolean"
  console.log(obtenerTipoDato(null)); // "object"
  console.log(obtenerTipoDato(undefined)); // "undefined"
    