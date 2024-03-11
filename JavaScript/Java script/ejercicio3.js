function invertirArreglo(numeros) {
    const nuevoArreglo = [];
    for (let i = numeros.length - 1; i >= 0; i--) {
      nuevoArreglo.push(numeros[i]);
    }
    return nuevoArreglo;
  }
  
  const numeros = [2, 5, 3, 9];
  const numerosInvertidos = invertirArreglo(numeros);
  console.log('El arreglo invertido es:', numerosInvertidos);
  
  
  
  