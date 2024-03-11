function crearTemporizador(segundos) {
    // Función para actualizar el tiempo
    function actualizarTiempo(segundos) {
      console.log(`Tiempo restante: ${segundos} segundos`);
    }
  
    // Función para iniciar el temporizador
    function iniciarTemporizador() {
      let tiempoActual = segundos;
  
      // Intervalo de 1 segundo
      const intervalo = setInterval(() => {
        actualizarTiempo(tiempoActual);
        tiempoActual--;
  
        // Si se llega a 0 segundos, detener el temporizador
        if (tiempoActual === 0) {
          clearInterval(intervalo);
          mostrarMensaje();
        }
      }, 1000);
    }
  
    // Función para mostrar el mensaje de fin de tiempo
    function mostrarMensaje() {
      console.log("¡El tiempo ha terminado!");
    }
  
    // Iniciar el temporizador
    iniciarTemporizador();
  }
  
  // Ejemplo de uso
  crearTemporizador(10);
  