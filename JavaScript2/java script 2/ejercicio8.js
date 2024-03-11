function esperar(segundos, accion) {
    // Función para ejecutar la acción después de la espera
    function ejecutarAccion() {
      accion();
    }
  
    // Iniciar el temporizador
    setTimeout(ejecutarAccion, segundos * 1000);
  }
  
  // Ejemplo de uso
  esperar(5, () => {
    console.log("¡Han pasado 5 segundos!");
  });
  