Contenido

1. Package.json, scritps
2. Modulos, importaciones y exportaciones
3. Node_modules, dependencias de producción y desarrollo
4. Reforzamiento de JS para Node.js
   - Functions
   - Callbacks
   - Factory Functions
   - Adapter Pattern
   - Promises
   - Async Await
   - Objects
   - Arrays

## Package.json, node_modules, scritps.

**Tarea 003 — Creación de nuestra primera aplicación con Node.js**

- **Objetivo**

Crear y ejecutar nuestra primera aplicación con Node.js, familiarizándonos con la estructura básica de un proyecto, el uso de NPM y la configuración del archivo `package.json`.

Al finalizar esta tarea, deberemos ser capaces de ejecutar nuestra aplicación utilizando el comando `npm start`.

- **Procedimiento**

**1. Crear el directorio del proyecto**

Desde la terminal de comandos, ubicarse en el directorio de trabajo y crear una carpeta llamada `clase-02-bases`.

**2. Inicializar el proyecto con NPM**

Ingresar al directorio creado y ejecutar:

```bash
npm init
```

Durante la inicialización, completar los siguientes campos:

- **package name:** `clase-02-bases`
- **version:** mantener `1.0.0` o utilizar `0.0.1` siguiendo el versionado semántico.
- **description:** `Mi primera aplicación con Node.js`
- **entry point:** mantener `index.js`.
- **test command:** dejar vacío.
- **git repository:** URL del repositorio de GitHub (opcional).
- **keywords:** dejar vacío.
- **author:** nombre del desarrollador.
- **license:** mantener el valor predeterminado `ISC`.

Finalmente, confirmar la configuración:

```text
Is this OK? (yes)
```

**3. Crear la estructura de archivos**

En la raíz del proyecto, crear una carpeta llamada `src` y, dentro de ella, un archivo llamado `app.js`.

La estructura deberá ser la siguiente:

```text
clase-02-bases/
├── src/
│   └── app.js
└── package.json
```

**4. Escribir nuestro primer programa**

Dentro de `src/app.js`, agregar el siguiente código:

```javascript
console.log("My first Node.js app");
```

**5. Ejecutar la aplicación**

Utilizando la terminal, ejecutar nuestra aplicación y comprobar que el mensaje se muestra correctamente.

- Desafío

Ahora que conseguimos ejecutar nuestro primer programa, debemos resolver el siguiente problema:

**¿Qué necesitamos configurar en el archivo `package.json` para ejecutar nuestra aplicación utilizando únicamente el comando `npm start`?**

Investigar el funcionamiento de los scripts de NPM, realizar los cambios necesarios y comprobar que la aplicación se ejecuta correctamente.

## Modulos, importaciones y exportaciones.

**1. ¿Qué son los módulos en Node.js?**

Un módulo es un archivo JavaScript que contiene código reutilizable y que puede ser utilizado desde otros archivos de nuestra aplicación.

La modularización nos permite:

- **Organizar:** dividir nuestra aplicación en archivos más pequeños.
- **Reutilizar:** utilizar funciones y constantes en diferentes partes del proyecto.
- **Mantener:** facilitar la lectura, modificación y mantenimiento del código.

Node.js soporta dos sistemas principales de módulos: **CommonJS** (`require` y `module.exports`) y **ECMAScript Modules** (`import` y `export`).

En esta clase trabajaremos con CommonJS.

**2. Exportar e importar módulos**

### module.exports — Exportar

La propiedad `module.exports` permite exponer valores desde un archivo JavaScript para que puedan ser utilizados en otro módulo.

### require() — Importar

La función `require()` permite cargar un módulo y acceder al valor que este exporta mediante `module.exports`.

**Ejemplo práctico**

Supongamos que tenemos un archivo llamado `math.js` que contiene una función para sumar dos números.

**Estructura del proyecto:**

```text
src/
├── app.js
└── math.js
```

**Archivo: math.js**

```javascript
const sum = (a, b) => a + b;

module.exports = sum;
```

**Archivo: app.js**

```javascript
const sum = require("./math");

const result = sum(10, 5);

console.log(result);
```

**Resultado esperado:**

```text
15
```

En este ejemplo:

- `module.exports` exporta la función `sum`.
- `require('./math')` importa la función desde el archivo `math.js`.
- `app.js` utiliza la función importada para realizar una operación.

**Importante:** el ejemplo utiliza CommonJS, por lo que el proyecto no debe configurar `"type": "module"` en `package.json`.

---

**Tarea 004 — Importación y exportación de módulos en Node.js**

- **Objetivo**

Aprender a organizar nuestro código en módulos reutilizables, exportando una variable que contiene la fecha y hora actual e importándola desde nuestra aplicación principal mediante CommonJS.

- **Procedimiento**

**1. Crear el directorio de utilidades**

Dentro de la carpeta `src`, crear un nuevo directorio llamado `utils`.

**2. Crear el archivo de constantes**

Dentro de `utils`, crear un archivo llamado `constants.js`.

La estructura del proyecto deberá quedar de la siguiente manera:

```text
clase-02-bases/
├── src/
│   ├── utils/
│   │   └── constants.js
│   └── app.js
└── package.json
```

**3. Declarar y exportar una variable**

Dentro de `constants.js`, agregar el siguiente código:

```javascript
const CURRENT_DATE = new Date().toLocaleString();

module.exports = CURRENT_DATE;
```

En este ejemplo utilizamos el objeto `Date` de JavaScript para obtener la fecha y hora actuales y el método `toLocaleString()` para convertirlas en una cadena de texto (_String_).

**4. Preparar la aplicación**

Abrir el archivo `app.js` y eliminar el mensaje utilizado en la tarea anterior.

- Desafío 1

Ahora que tenemos una variable exportada desde `utils/constants.js`, necesitamos utilizarla en nuestra aplicación principal.

**¿Cómo podemos importar `CURRENT_DATE` desde `constants.js` y mostrar la fecha y hora actual en la terminal utilizando `console.log()`?**

Investigar cómo funciona `require()`, identificar la ruta correcta del módulo y realizar la importación correspondiente.

Ejecutar la aplicación utilizando:

```bash
npm start
```

**Resultado esperado:**

```text
27/10/2026, 18:30:45
```

- Desafío 2

**¿Qué necesitamos modificar en nuestro proyecto Node.js para utilizar import y export en lugar de require() y module.exports?**

Investigar y realizar los cambios necesarios para:

Configurar el proyecto para utilizar ECMAScript Modules (ESM).

Exportar la constante CURRENT_DATE utilizando export.

Importar la constante desde app.js utilizando import.

Ejecutar la aplicación mediante npm start y comprobar que se muestra correctamente la fecha y hora en la terminal.

## Node_modules, dependencias de producción y desarrollo

**1. ¿Qué son las dependencias?**

Las dependencias son paquetes o librerías externas que incorporamos a nuestro proyecto para utilizar funcionalidades desarrolladas por otros programadores, evitando tener que implementarlas desde cero.

En Node.js utilizamos **NPM (Node Package Manager)** para instalar, actualizar y administrar estas dependencias.

Los paquetes instalados se registran en el archivo `package.json` y normalmente se almacenan dentro del directorio `node_modules`.

**2. Tipos de dependencias**

**Dependencias de producción — dependencies**

Son aquellas que nuestra aplicación necesita para funcionar durante su ejecución.

Por ejemplo, **Axios** es una librería que permite realizar peticiones HTTP a servicios externos y APIs.

Para instalar Axios, ejecutamos:

```bash
npm install axios
```

Por defecto, NPM registra el paquete dentro de la propiedad `dependencies` de nuestro `package.json`.

**Dependencias de desarrollo — devDependencies**

Son herramientas utilizadas principalmente durante el proceso de desarrollo, pero que no son necesarias para ejecutar nuestra aplicación en producción.

Por ejemplo, **Nodemon** es una herramienta que monitorea los cambios realizados en nuestros archivos y reinicia automáticamente la aplicación Node.js durante el desarrollo.

Para instalar Nodemon, ejecutamos:

```bash
npm install --save-dev nodemon
```

También podemos utilizar su forma abreviada:

```bash
npm install -D nodemon
```

NPM registra este paquete dentro de la propiedad `devDependencies`.

**3. Nuestro archivo package.json**

Después de instalar ambas dependencias, nuestro archivo `package.json` tendrá una estructura similar a la siguiente:

```json
{
  "name": "clase-02-bases",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },
  "dependencies": {
    "axios": "^1.x.x"
  },
  "devDependencies": {
    "nodemon": "^3.x.x"
  }
}
```

_Las versiones son ilustrativas. NPM registrará las versiones correspondientes a los paquetes instalados._

Observemos que incorporamos dos scripts:

- `npm start`: ejecuta nuestra aplicación utilizando Node.js.
- `npm run dev`: ejecuta nuestra aplicación utilizando Nodemon, reiniciándola automáticamente cuando detecta cambios.

**4. ¿Por qué es importante diferenciarlas?**

Separar las dependencias permite identificar qué paquetes necesita nuestra aplicación para funcionar y cuáles se utilizan únicamente durante el desarrollo.

En un entorno de producción, podemos instalar solamente las dependencias necesarias mediante:

```bash
npm ci --omit=dev
```

Este comando utiliza el archivo `package-lock.json` para instalar las dependencias de forma reproducible, omitiendo las dependencias exclusivas de desarrollo.

## Reforzamiento de JavaScript — Conceptos fundamentales para Node.js

### 1. Functions

**¿Qué es una función?**

Una **función** es un bloque de código reutilizable que permite realizar una tarea específica.

Las funciones nos permiten:

- **Reutilizar código:** evitar escribir las mismas instrucciones varias veces.
- **Organizar:** dividir problemas complejos en tareas más pequeñas.
- **Mantener:** facilitar la lectura y modificación del código.
- **Abstraer:** ocultar detalles de implementación detrás de un nombre descriptivo.

**Ejemplo básico**

```javascript
function greet() {
  console.log("Hello, World!");
}

greet();
```

**Resultado:**

```text
Hello, World!
```

La función `greet()` se ejecuta cuando la invocamos utilizando paréntesis `()`.

**Declaración de funciones**

Es la forma tradicional de definir funciones en JavaScript.

```javascript
function sum(a, b) {
  return a + b;
}

const result = sum(10, 5);

console.log(result); // 15
```

JavaScript también permite asignar una función a una variable.

```javascript
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 3)); // 15
```

**Arrow Functions**

Las **arrow functions** fueron introducidas en ES6 y permiten escribir funciones de manera más concisa.

**Ejemplo**

Función tradicional:

```javascript
function subtract(a, b) {
  return a - b;
}
```

Utilizando arrow function:

```javascript
const subtract = (a, b) => a - b;

console.log(subtract(10, 5)); // 5
```

Cuando la función contiene una sola expresión, podemos omitir las llaves y utilizar un retorno implícito.

**Retornar un objeto**

```javascript
const createUser = (name, age) => ({
  name,
  age,
});

console.log(createUser("John", 25));
```

**Importante:** las arrow functions no tienen su propio `this`, por lo que no siempre son intercambiables con las funciones tradicionales.

**Parámetros y argumentos**

Los **parámetros** son las variables que declaramos al definir una función.

Los **argumentos** son los valores que enviamos cuando la ejecutamos.

**Ejemplo**

```javascript
const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet("John"));
```

**Parámetros por defecto (Default Parameters)**

Podemos definir valores predeterminados para los parámetros.

```javascript
const greet = (name = "Guest") => {
  return `Hello, ${name}!`;
};

console.log(greet()); // Hello, Guest!
console.log(greet("Anna")); // Hello, Anna!
```

El valor predeterminado se utiliza cuando el argumento es `undefined` o no se proporciona.

**Return — Retorno de valores**

La palabra reservada `return` permite devolver un valor desde una función.

También finaliza inmediatamente su ejecución.

**Ejemplo**

```javascript
const calculatePrice = (price, tax) => {
  const total = price + price * tax;

  return total;
};

const result = calculatePrice(100, 0.21);

console.log(result); // 121
```

**Importante:** si una función no contiene `return`, devuelve `undefined` de manera implícita.

**Rest Parameters (...)**

Los parámetros rest permiten recibir una cantidad variable de argumentos y agruparlos en un array.

**Ejemplo**

```javascript
const sum = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

console.log(sum(10, 20)); // 30
console.log(sum(10, 20, 30, 40)); // 100
```

En este ejemplo, `...numbers` agrupa los argumentos recibidos en un array.

**Funciones puras (Pure Functions)**

Una función pura es aquella que:

- Siempre devuelve el mismo resultado para los mismos argumentos.
- No modifica variables externas ni produce efectos secundarios observables.

**Ejemplo de función pura**

```javascript
const applyDiscount = (price, discount) => {
  return price - (price * discount) / 100;
};

console.log(applyDiscount(100, 10)); // 90
```

**Ejemplo de función con efecto secundario**

```javascript
let total = 100;

const applyDiscount = (discount) => {
  total = total - (total * discount) / 100;
};

applyDiscount(10);

console.log(total); // 90
```

En el segundo ejemplo, la función modifica una variable externa.

**Buena práctica:** cuando sea posible, preferir funciones puras porque facilitan las pruebas, el mantenimiento y la reutilización del código.

**Scope — Alcance de las variables**

El **scope** determina desde qué partes del código podemos acceder a una variable.

**Ejemplo**

```javascript
const APP_NAME = "Crypto App";

const showApp = () => {
  const message = "Welcome!";

  console.log(APP_NAME);
  console.log(message);
};

showApp();
```

La variable `APP_NAME` pertenece al ámbito exterior, mientras que `message` está declarada dentro de la función.

Por lo tanto, `message` no está disponible fuera de `showApp()`.

**Funciones asíncronas (Async Functions)**

Las funciones asíncronas permiten trabajar con operaciones que necesitan esperar un resultado, como consultas a APIs o bases de datos.

Se declaran utilizando `async` y pueden utilizar `await`.

**Ejemplo**

```javascript
const getUser = async () => {
  return {
    id: 1,
    name: "John",
  };
};

const showUser = async () => {
  const user = await getUser();

  console.log(user.name);
};

showUser();
```

**Importante:** una función declarada con `async` siempre devuelve una Promise, incluso cuando retorna un valor directamente.

**Buenas prácticas**

Al desarrollar funciones en JavaScript, es recomendable seguir algunos principios de Clean Code:

- Utilizar nombres descriptivos que indiquen qué hace la función.
- Procurar que cada función tenga una responsabilidad clara.
- Evitar funciones excesivamente largas.
- Reducir la cantidad de parámetros cuando sea posible.
- Evitar modificar variables globales.
- Preferir funciones puras cuando resulte apropiado.
- Utilizar `return` para comunicar resultados en lugar de depender de `console.log()`.

**Ejemplo**

Evitar nombres poco descriptivos:

```javascript
const calc = (a, b) => a * b;
```

Preferir nombres que expresen la intención:

```javascript
const calculateTotalPrice = (price, quantity) => {
  return price * quantity;
};
```

### 2. Callbacks

**¿Qué es un Callback?**

Un **callback** es una función que se pasa como argumento a otra función para que esta pueda ejecutarla en un momento determinado.

En JavaScript, las funciones son consideradas **ciudadanos de primera clase (First-Class Functions)**, lo que significa que podemos almacenarlas en variables, pasarlas como argumentos y retornarlas desde otras funciones.

**Ejemplo**

```javascript
const greet = (name, callback) => {
  console.log(`Hello, ${name}!`);

  callback();
};

const sayGoodbye = () => {
  console.log("Goodbye!");
};

greet("John", sayGoodbye);
```

**Resultado esperado:**

```text
Hello, John!
Goodbye!
```

En este ejemplo:

- `greet()` recibe dos parámetros: `name` y `callback`.
- `sayGoodbye` se pasa como argumento sin ejecutarse inmediatamente.
- `callback()` ejecuta la función recibida.

**Importante:** cuando pasamos una función como callback, utilizamos su nombre sin paréntesis: `sayGoodbye`. Si escribimos `sayGoodbye()`, estaríamos ejecutándola inmediatamente y pasando su resultado.

**Callbacks síncronos (Synchronous Callbacks)**

Un callback síncrono se ejecuta durante la ejecución de la función que lo recibe, sin esperar una operación asíncrona.

**Ejemplo**

```javascript
const calculate = (a, b, callback) => {
  return callback(a, b);
};

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(calculate(10, 5, sum)); // 15
console.log(calculate(10, 5, multiply)); // 50
```

La función `calculate()` no necesita conocer qué operación matemática debe realizar. Simplemente ejecuta la función recibida.

Este mecanismo permite separar responsabilidades y reutilizar código.

**Callbacks con métodos de Arrays**

Ya utilizamos callbacks al trabajar con métodos como `map()`, `filter()` y `forEach()`.

```javascript
const prices = [100, 200, 300];

const updatedPrices = prices.map((price) => price * 2);

console.log(updatedPrices); // [200, 400, 600]
```

La arrow function `(price) => price * 2` es el callback que `map()` ejecuta por cada elemento del array.

**3. Callbacks asíncronos (Asynchronous Callbacks)**

Un callback asíncrono es una función que se ejecuta después de que se completa una operación o cuando ocurre un evento.

En Node.js, los callbacks se utilizan para trabajar con operaciones como:

- Lectura y escritura de archivos.
- Eventos.
- Temporizadores.
- Operaciones de entrada y salida (I/O).

**Ejemplo con setTimeout()**

```javascript
console.log("Starting application...");

setTimeout(() => {
  console.log("Task completed!");
}, 2000);

console.log("Application continues...");
```

**Resultado esperado:**

```text
Starting application...
Application continues...
Task completed!
```

**¿Qué está sucediendo?**

1. JavaScript ejecuta el primer `console.log()`.
2. `setTimeout()` programa la ejecución de un callback.
3. El programa continúa ejecutando las siguientes instrucciones.
4. Después de aproximadamente 2 segundos, el callback se ejecuta cuando el entorno de ejecución puede procesarlo.

**Importante:** `setTimeout()` no detiene la ejecución del programa y el tiempo indicado representa una espera mínima aproximada, no un momento exacto garantizado.

### 3. Factory Functions

Una **factory function** es una función que crea y devuelve objetos.

Nos permite generar múltiples objetos con una misma estructura sin necesidad de utilizar clases.

**Ejemplo**

```javascript
const createUser = (name, age) => ({
  name,
  age,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
});

const user1 = createUser("John", 25);
const user2 = createUser("Anna", 30);

console.log(user1.greet());
console.log(user2.greet());
```

**Resultado esperado:**

```text
Hello, my name is John
Hello, my name is Anna
```

Las factory functions son útiles para crear objetos reutilizables y organizar la lógica de nuestra aplicación.

**Tarea 012 — Factory Functions para crear objetos persona**

**Objetivo\***

Implementar una Factory Function para crear objetos reutilizables, utilizando dependencias externas de NPM para generar identificadores únicos y calcular automáticamente la edad de una persona.

En este ejercicio vamos a crear una función llamada `createPerson()` que permita generar personas con la siguiente estructura:

```javascript
{
  id: '550e8400-e29b-41d4-a716-446655440000',
  name: 'John Doe',
  birthdate: '2000-05-15',
  age: 26
}
```

El identificador (`id`) y la edad (`age`) deberán generarse automáticamente, sin que sea necesario proporcionarlos como argumentos.

Utilizaremos dos librerías externas:

- [UUID — NPM](https://www.npmjs.com/package/uuid)
- [Get Age — NPM](https://www.npmjs.com/package/get-age)

**UUID:** permite generar identificadores únicos universales mediante UUID v4.

**Get Age:** permite calcular la edad en años cumplidos a partir de una fecha de nacimiento.

```bash
npm install uuid get-age
```

Estas dependencias deberán registrarse dentro de `dependencies` en nuestro archivo `package.json`.

**Estructura del archivos**

Dentro de `src`, crear un directorio llamado `factories` y un archivo llamado `person.factory.js`.

```text
clase-02-bases/
├── src/
│   ├── factories/
│   │   └── person.factory.js
│   └── app.js
├── package.json
└── package-lock.json
```

**Implementar la Factory Function**

Dentro de `person.factory.js`, implementar y exportar una función llamada `createPerson()`.

La función deberá:

1. Recibir únicamente dos parámetros: `name` y `birthdate`.
2. Generar automáticamente un identificador único utilizando `uuid`.
3. Calcular automáticamente la edad utilizando `get-age`.
4. Retornar un nuevo objeto con las propiedades `id`, `name`, `birthdate` y `age`.
5. Utilizar una Arrow Function y ECMAScript Modules (ESM).

la fecha de nacimiento deberá recibirse en formato `YYYY-MM-DD`, por ejemplo `2000-05-15`.

**Utilizar nuestra Factory Function**

Desde el archivo `app.js`:

1. Importar la función `createPerson()`.
2. Crear al menos tres personas con diferentes nombres y fechas de nacimiento.
3. Almacenar las personas dentro de un array.
4. Mostrar el array completo utilizando `console.log()`.

**Desafío**

¿Cómo podemos crear múltiples objetos de personas utilizando una única Factory Function, generando automáticamente sus identificadores y edades mediante dependencias externas?

Investigar cómo importar y utilizar las funciones proporcionadas por `uuid` y `get-age`.

La implementación deberá permitir crear nuevas personas sin modificar la lógica de `createPerson()`.

### 4. Adapter Pattern

El **patrón adaptador** es un patrón de diseño que permite transformar la estructura de datos o la interfaz de un componente para que sea compatible con otro.

Es especialmente útil cuando consumimos APIs externas y necesitamos adaptar sus respuestas a la estructura utilizada por nuestra aplicación.

**Ejemplo**

Supongamos que una API externa nos devuelve:

```javascript
const apiUser = {
  first_name: "John",
  last_name: "Doe",
};
```

Pero nuestra aplicación utiliza una propiedad llamada `fullName`.

Podemos crear una función adaptadora:

```javascript
const userAdapter = (user) => ({
  fullName: `${user.first_name} ${user.last_name}`,
});

const user = userAdapter(apiUser);

console.log(user.fullName); // John Doe
```

De esta manera, evitamos que nuestra aplicación dependa directamente de la estructura de datos de la API externa.

### 5. Promises

Una **promesa** representa el resultado futuro de una operación que puede completarse correctamente o fallar.

Una promesa puede encontrarse en tres estados:

- **Pending:** la operación todavía no terminó.
- **Fulfilled:** la operación se completó correctamente.
- **Rejected:** la operación falló.

**Ejemplo**

```javascript
const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John" });
    }, 1000);
  });
};

getUser()
  .then((user) => console.log(user))
  .catch((error) => console.error(error));
```

Después de aproximadamente un segundo, obtenemos:

```text
{ id: 1, name: 'John' }
```

Utilizamos `.then()` para procesar el resultado y `.catch()` para manejar posibles errores.

Las promesas son fundamentales para trabajar con operaciones asíncronas, como peticiones HTTP o consultas a bases de datos.

### 6. Async / Await

`async` y `await` permiten trabajar con promesas utilizando una sintaxis más sencilla y legible.

- **async:** declara una función asíncrona que siempre devuelve una promesa.
- **await:** espera el resultado de una promesa antes de continuar con la ejecución de esa función.

**Ejemplo**

Utilizando la función `getUser()` del ejemplo anterior:

```javascript
const showUser = async () => {
  try {
    const user = await getUser();

    console.log(user.name);
  } catch (error) {
    console.error(error);
  }
};

showUser();
```

**Resultado esperado:**

```text
John
```

Aunque utilizamos `await`, JavaScript no bloquea todo el programa mientras espera la respuesta. La función asíncrona suspende su ejecución y permite que otras tareas continúen.

El bloque `try/catch` permite manejar errores de una forma similar a la utilizada en código síncrono.

### 8. Objetos

**Objetos (Objects)**

Un **objeto** es una estructura de datos que permite almacenar información mediante pares de **clave y valor (key-value)**.

Los objetos son fundamentales en JavaScript porque nos permiten representar entidades, como usuarios, productos, criptomonedas o cualquier elemento de nuestra aplicación.

**Crear un objeto**

```javascript
const user = {
  id: 1,
  name: "John",
  age: 25,
  isActive: true,
};
```

Cada propiedad está formada por una clave (`name`) y un valor (`'John'`).

**Acceder a las propiedades**

Podemos acceder a las propiedades utilizando la notación de punto (`.`) o corchetes (`[]`).

```javascript
console.log(user.name); // John
console.log(user["age"]); // 25
```

**Agregar y modificar propiedades**

```javascript
user.email = "john@example.com";
user.age = 26;

console.log(user);
```

Aunque declaramos el objeto con `const`, podemos modificar sus propiedades. Lo que no podemos hacer es reasignar la variable `user` a otro objeto.

**Métodos de un objeto**

Un objeto también puede contener funciones, conocidas como métodos.

```javascript
const user = {
  name: "John",
  greet() {
    return `Hello, ${this.name}`;
  },
};

console.log(user.greet()); // Hello, John
```

**Desestructuración de objetos (Object Destructuring)**

La desestructuración permite extraer propiedades de un objeto y asignarlas a variables de manera más sencilla.

**Ejemplo**

```javascript
const crypto = {
  id: "bitcoin",
  symbol: "btc",
  price: 80800,
};

const { symbol, price } = crypto;

console.log(symbol); // btc
console.log(price); // 80800
```

También podemos renombrar las variables:

```javascript
const { price: currentPrice } = crypto;

console.log(currentPrice); // 80800
```

**Spread Operator en objetos (...)**

El operador spread (`...`) permite copiar propiedades de un objeto o combinar varios objetos.

**Ejemplo**

```javascript
const user = {
  name: "John",
  age: 25,
};

const updatedUser = {
  ...user,
  age: 26,
  isActive: true,
};

console.log(updatedUser);
```

**Resultado esperado:**

```javascript
{
  name: 'John',
  age: 26,
  isActive: true
}
```

Este mecanismo resulta especialmente útil para trabajar con **inmutabilidad**, evitando modificar directamente el objeto original.

**Importante:** spread realiza una copia superficial (_shallow copy_). Los objetos anidados siguen compartiendo sus referencias.

---

### 9. Arrays

Un **array** es una estructura de datos que permite almacenar múltiples valores dentro de una misma variable.

A diferencia de los objetos, sus elementos se organizan mediante índices numéricos que comienzan en `0`.

**Crear un array**

```javascript
const cryptocurrencies = ["Bitcoin", "Ethereum", "Stellar"];
```

**Acceder a sus elementos**

```javascript
console.log(cryptocurrencies[0]); // Bitcoin
console.log(cryptocurrencies[1]); // Ethereum
console.log(cryptocurrencies.length); // 3
```

**Agregar y eliminar elementos**

```javascript
const cryptocurrencies = ["Bitcoin", "Ethereum"];

// Agregar al final
cryptocurrencies.push("Stellar");

// Eliminar el último
cryptocurrencies.pop();

console.log(cryptocurrencies);
```

Los métodos `push()` y `pop()` modifican el array original.

**Arrays de objetos**

En aplicaciones reales es frecuente trabajar con arrays que contienen objetos.

Por ejemplo, una API puede devolver una colección de criptomonedas:

```javascript
const cryptocurrencies = [
  { id: 1, name: "Bitcoin", price: 80800 },
  { id: 2, name: "Ethereum", price: 3500 },
  { id: 3, name: "Stellar", price: 0.35 },
];
```

Podemos acceder a una propiedad de un objeto dentro del array:

```javascript
console.log(cryptocurrencies[0].name); // Bitcoin
console.log(cryptocurrencies[1].price); // 3500
```

**Principales métodos de Arrays**

JavaScript proporciona métodos que permiten recorrer, transformar y buscar elementos dentro de un array.

- **forEach() — Recorrer elementos**

Ejecuta una función por cada elemento del array.

```javascript
const cryptocurrencies = ["Bitcoin", "Ethereum", "Stellar"];

cryptocurrencies.forEach((crypto) => {
  console.log(crypto);
});
```

**Resultado:**

```text
Bitcoin
Ethereum
Stellar
```

- **map() — Transformar elementos**

Crea un nuevo array aplicando una transformación a cada elemento.

```javascript
const prices = [100, 200, 300];

const updatedPrices = prices.map((price) => price * 2);

console.log(updatedPrices); // [200, 400, 600]
```

El array original permanece sin modificaciones.

- **filter() — Filtrar elementos**

Crea un nuevo array que contiene únicamente los elementos que cumplen una condición.

```javascript
const prices = [100, 200, 300, 400];

const filteredPrices = prices.filter((price) => price > 200);

console.log(filteredPrices); // [300, 400]
```

- **find() — Buscar un elemento**

Devuelve el primer elemento que cumple una condición.

```javascript
const cryptocurrencies = [
  { id: 1, name: "Bitcoin" },
  { id: 2, name: "Ethereum" },
  { id: 3, name: "Stellar" },
];

const crypto = cryptocurrencies.find((item) => item.id === 2);

console.log(crypto); // { id: 2, name: 'Ethereum' }
```

Si no encuentra un elemento, devuelve `undefined`.

- **some() y every() — Verificar condiciones**

`some()` comprueba si al menos un elemento cumple una condición.

`every()` comprueba si todos los elementos cumplen una condición.

```javascript
const prices = [100, 200, 300];

const hasExpensive = prices.some((price) => price > 250);
const allPositive = prices.every((price) => price > 0);

console.log(hasExpensive); // true
console.log(allPositive); // true
```

- **reduce() — Acumular valores**

Permite recorrer un array y generar un único resultado acumulado.

```javascript
const prices = [100, 200, 300];

const total = prices.reduce((accumulator, price) => accumulator + price, 0);

console.log(total); // 600
```

**Desestructuración y Spread en Arrays**

- **Array Destructuring**

Permite extraer elementos de un array y asignarlos a variables.

```javascript
const cryptocurrencies = ["Bitcoin", "Ethereum", "Stellar"];

const [first, second] = cryptocurrencies;

console.log(first); // Bitcoin
console.log(second); // Ethereum
```

También podemos intercambiar valores:

```javascript
let percentageA = 30;
let percentageB = 70;

[percentageA, percentageB] = [percentageB, percentageA];

console.log(percentageA); // 70
console.log(percentageB); // 30
```

- **Spread Operator**

Podemos crear un nuevo array sin modificar el original.

```javascript
const cryptocurrencies = ["Bitcoin", "Ethereum"];

const updatedCryptos = [...cryptocurrencies, "Stellar"];

console.log(updatedCryptos);
// ['Bitcoin', 'Ethereum', 'Stellar']
```
