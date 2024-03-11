const arreglo1 = [1, 0, 2, 3, 4];
const arreglo2 = [4, 3, 6, 7, 8, 13];

// Función para sumar los valores de dos arreglos por índice
function sumarIndices(arr2, arr1) {
  const sumaIndices = [];
  for (let i = 0; i < arr2.length; i++) {
    sumaIndices.push(arr2[i] + arr1[i]);
  }
  return sumaIndices;
}

// Calcular la suma de los indices
const resultado = sumarIndices(arreglo1, arreglo2);

console.log('Resultado:', resultado);
