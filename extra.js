const numeros = [13,15,4,8,9,2,17,5,10,14];
const [num0,num1,num2,num3,num4,...resto] = numeros;

const nuevoNumeros = [num1,num3,...resto];

console.log(numeros);
console.log(nuevoNumeros);

const mascota= {
    nombre: "Max",
    tipoDeMascota: "Perro",
    color: "Marron",
    raza: "Obejero Aleman"
};
const { nombre, tipoDeMascota, color,raza}= mascota;

console.log("Hola les presento a mi mascota su nombre es: " + nombre + " es un hermoso " + tipoDeMascota + ", de color: " + color + " y su raza es: " + raza + ".");