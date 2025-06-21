document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('miBoton');
  const resultDiv = document.getElementById('resultado');

  if (button) {
    button.addEventListener('click', () => {
      resultDiv.textContent = '¡Botón clicado con éxito!';
    });
  }
});
