document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('miBoton');
  const resultDiv = document.getElementById('resultado');

  if (button) {
    button.addEventListener('click', () => {
      resultDiv.className = 'error';
      resultDiv.textContent = '¡Botón clicado sin éxito!';
      console.error('Error: El botón no se ha clicado correctamente.');
    });
  }
});

console.log('Componente X cargado');
