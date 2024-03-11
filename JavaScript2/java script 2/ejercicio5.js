function calcularAreaTriangulo(a, b, c) {
    // Semiperímetro del triángulo
    const semiperimetro = (a + b + c) / 2;
  
    // Fórmula de Herón para el área
    const area = Math.sqrt(
      semiperimetro *
        (semiperimetro - a) *
        (semiperimetro - b) *
        (semiperimetro - c)
    );
  
    return area;
  }
  
  // Ejemplo de uso
  const ladoA = 5;
  const ladoB = 6;
  const ladoC = 7;
  const areaTriangulo = calcularAreaTriangulo(ladoA, ladoB, ladoC);
  console.log(`El área del triángulo es de ${areaTriangulo} metros cuadrados.`);
    
  