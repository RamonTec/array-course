
// sirve para hacer un recorrido en los elementos de un array.

const letters = ['a', 'b', 'c'];

// for es una estructura de control que permite ejecutar un bloque de código un número determinado de veces.
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log('for', element);
}

// forEach es un método de los arrays que permite recorrer cada elemento del array y ejecutar una función para cada uno de ellos.
letters.forEach((item) => console.log('for each', item));

/**
 * Entonces, que ventaja tiene forEach sobre for?
 * * 1. forEach es más legible y fácil de entender.
 * * 2. forEach es más conciso y menos propenso a errores.
 * * 3. forEach es más fácil de usar con funciones de orden superior.
 * * 4. forEach es más fácil de usar con funciones anónimas.
 */