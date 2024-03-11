const arreglo1 = [5, 2, 3];
const arreglo2 = [2, 30, 5];

// Función para combinar y eliminar duplicados
function combinarSinDuplicados(arr1, arr2) {
  const nuevoArreglo = [...arr1, ...arr2];
  const set = new Set(nuevoArreglo);
  return [...set];
}

// Combinar los arreglos y eliminar duplicados
const resultado = combinarSinDuplicados(arreglo1, arreglo2);

console.log('Arreglo combinado sin duplicados:', resultado);
