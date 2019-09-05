// var nombre = "Tatiana";

// var saludar = () => {
//     var nombre = "Camila";
//     console.log(nombre);
// };

// saludar();

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// console.log(i);

//otra razon por la cual es preferible usar let es que no deja interferir en el objeto 
//window(padre), y var es intrusivo en cualquier ámbito.

// const color = "rojo";
// color = "verde";

// //arroja error porque el const es una constante que no deja reasignar nuevos valores, aunque
// si otras caracteristicas o elementos dentro del array.

//Objeto

let serie = {
    nombre: "Lost",
    producida: 2019,
    visto: true,
    episodios: {
        uno: "lala",
        dos: "lolo",
    },
    reproducir: function () {
        console.log("reproduciendo...")
    },
};

console.log(serie.episodios.dos);
console.log(serie.reproducir());