// condicionales que nos permite tomar una decision
// pedir nombre de persona
let nombre=prompt("Ingresa tu nombre");
let edad=prompt("ingresa tu edad");
// Condicional para saber la edad y mostrar un mensaje
// que pasa si no tiene igual
// que pasa si no ponen la edad(programacion defensiva- Validaciones)
if (edad >= 18) {
    alert("Bienvenidos a la pagina de peliculas violentas");
} else {
    alert("Debe ser mayor de edad para ver nuestras peliculas");
}