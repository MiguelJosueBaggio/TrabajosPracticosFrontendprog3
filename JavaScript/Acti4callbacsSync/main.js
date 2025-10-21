// Base de datos simulada (nuestros usuarios)
const users = [
{ id: 1, name: "Ana" },
{ id: 2, name: "Luis" },
{ id: 3, name: "María" }
]


/*1. Creá una función getUserById(id, callback) que reciba:
○ un id de usuario,
○ una función callback que se ejecutará después de 1.5 segundos.
2. Dentro del setTimeout, buscá el usuario con find.
3. Si existe → devolver el usuario.
4. Si no existe → devolver un error.
*/

// Función que busca un usuario por id
function buscar(id) {
  return users.find(user => user.id === id);
}

// Función asincrónica simulada con setTimeout
function getUserById(id, callback) {
  console.log("Buscando usuario...");
  
  setTimeout(() => {
    const user = buscar(id); // busca al usuario
    if (user) {
      callback(null, user); // si lo encuentra, ejecuta el callback con el usuario
    } else {
      callback("Usuario no encontrado", null); // si no, pasa un error
    }
  }, 1500);
}

// Llamada con callback
getUserById(2, (error, user) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Usuario encontrado:", user.name);
  }
});



//+++++++++++
/*1. Creá una función getUserByIdPromise(id) que retorne una Promesa.
2. Usá resolve si se encuentra el usuario y reject si no existe.
3. Probá la función con .then() y .catch().
👉 Ejemplo esperado:
getUserByIdPromise(3)
.then(user => console.log("Usuario encontrado:", user))
.catch(error => console.error("Error:", error));*/ 

function buscarUsuarioPorId(id) {
  return new Promise((resolve, reject) => {
    const usuarios = [
      { id: 1, nombre: "Ana" },
      { id: 2, nombre: "Luis" },
      { id: 3, nombre: "Lucía" },
    ];

    setTimeout(() => {
      const usuario = usuarios.find(u => u.id === id);
      if (usuario) {
        resolve(usuario);
      } else {
        reject("Usuario no encontrado");
      }
    }, 1500);
  });
}

//utilzacion de la promesa
buscarUsuarioPorId(2)
  .then(usuario => console.log("Usuario encontrado:", usuario))
  .catch(error => console.error("Error:", error));

  /*1. Creá una función async function fetchUser(id).
2. Usá await para esperar el resultado de getUserByIdPromise(id).
3. Manejá el error con try/catch.
 Ejemplo esperado:
fetchUser(1); // debería mostrar el usuario con id 1 */



function getUserByIdPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.id === id);
      if (user) {
        resolve(user); // si se encontor el usuario
      } else {
        reject(" Usuario no encontrado"); // si no esta presente
      }
    }, 1500); // simulamos retardo de 1.5s
  });
}

//  Función async que usa await
async function fetchUser(id) {
  try {
    const user = await getUserByIdPromise(id); // espera el resultado
    console.log(" Usuario encontrado:", user);
  } catch (error) {
    console.error(" Error:", error);
  }
}

// Ejemplo de uso
fetchUser(1); 
fetchUser(5); 

