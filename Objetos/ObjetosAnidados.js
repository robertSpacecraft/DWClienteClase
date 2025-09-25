"use strict";

let instituto = {
    nombre: "Poeta Paco Mollá",
    direccion: {
        ciudad: "Petrer",
        cp: "03610",
        calle: "Avenida Reina Sofia"
    },
    cursos: [
        {
            codigo: "2DAWSEMI", alumnos: [
                {
                    nombre: "Javier",
                    nota: 9
                },
                {
                    nombre: "javier",
                    nota: 5
                }
            ]
        },
        {
            codigo: "1DAW",
            alumnos: [
                {
                    nombre: "Robert",
                    nota: 8.5
                }
            ]
        }
    ]

}

console.log(instituto.direccion.ciudad);
console.log(instituto.cursos.length);
console.log(instituto.cursos[0]);
console.log(instituto.cursos[0].codigo);

console.log("---------------------------");

for (let i = 0; i < instituto.cursos.length; i++){
    console.log(`Curso: ${instituto.cursos[i].codigo}`);
    for (let j = 0; j < instituto.cursos[i].alumnos.length; j++){
        console.log(`El alumno ${instituto.cursos[i].alumnos[j].nombre} tiene un ${instituto.cursos[i].alumnos[j].nota}`);
    }
}

console.log("--------------------------")

for (let clave in instituto.cursos[0].alumnos[1]){
    console.log(clave);
}