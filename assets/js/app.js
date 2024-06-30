        
       // Definición de la URL base y el punto final de la API de GitHub
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

      // Selectores para los elementos del DOM
const $n = document.querySelector('.name');  // Selector para el nombre
const $b = document.querySelector('.blog');  // Selector para el blog
const $l = document.querySelector('.location');  // Selector para la ubicación

     // Función asincrónica para mostrar la información del usuario
async function displayUser(username) {
  try {
    $n.textContent = 'Cargando...';  // Mostrar mensaje de carga
    const response = await fetch(`${usersEndpoint}/${username}`);  // Hacer solicitud a la API
    if (!response.ok) {
      throw new Error('Usuario no encontrado');  // Lanzar error si no se encontró el usuario
    }
    const data = await response.json();  // Parsear la respuesta JSON
    console.log(data);  

    // Actualizar el DOM con la información del usuario
    $n.textContent = data.name || 'Nombre no disponible';  // Mostrar el nombre o un mensaje si no está disponible
    $b.textContent = data.blog || 'Blog no disponible';  // Mostrar el blog o un mensaje si no está disponible
    $l.textContent = data.location || 'Ubicación no disponible';  // Mostrar la ubicación o un mensaje si no está disponible
  } catch (err) {
    handleError(err);  // Manejar cualquier error que ocurra durante el proceso
  }
}

     // Función para manejar errores
function handleError(err) {
  console.log('OH NO!');  // Mostrar mensaje genérico de error
  console.error(err);  // Mostrar el error específico en la consola
  $n.textContent = `Algo salió mal: ${err}`;  // Mostrar mensaje de error en el DOM
}

  // Llamar a la función displayUser con un nombre de usuario específico
displayUser('stolinski').catch(handleError);  // Manejar errores durante la llamada
