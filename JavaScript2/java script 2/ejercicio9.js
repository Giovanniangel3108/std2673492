function generarNumerosAleatorios(segundos) {
    // Función para generar un número aleatorio
    function generarNumeroAleatorio() {
      return Math.floor(Math.random() * 100) + 1;
    }
  
    // Función para iniciar el temporizador
    function iniciarTemporizador() {
      // Intervalo de 1 segundo
      const intervalo = setInterval(() => {
        const numeroAleatorio = generarNumeroAleatorio();
        console.log(`Número aleatorio: ${numeroAleatorio}`);
  
        // Si se llega al tiempo especificado, detener el temporizador
        if (segundos === 0) {
          clearInterval(intervalo);
        } else {
          segundos--;
        }
      }, 1000);
    }
  
    // Iniciar el temporizador
    iniciarTemporizador();
  }
  
  // Ejemplo de uso
  generarNumerosAleatorios(5);
  