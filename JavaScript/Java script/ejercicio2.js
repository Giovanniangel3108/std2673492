function sumarArreglo(numeros) {
    let suma = 0;
    for (let numero of numeros) {
      suma += numero;
    }
    return suma;
  }
  const numeros = [34, 43, 65, 3, 86];
  const sumaTotal = sumarArreglo(numeros);
  console.log('La suma total es:', sumaTotal); 
  
  

  



