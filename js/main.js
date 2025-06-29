// Entrada de datos del usuario
let sintoma = prompt(
  "¿Cuál es el síntoma principal?\n" +
  "1. fiebre (fiebre alta o dificultad para respirar)\n" +
  "2. dolor (dolor moderado o vómito)\n" +
  "3. malestar (malestar general leve)"
);

let edadTexto = prompt("¿Cuántos años tiene el paciente?");
let edad = edadTexto * 1; // para que sea número

let tieneAntecedentes = confirm("¿El paciente tiene enfermedades como diabetes o hipertensión?");

// Clasificación según el síntoma
let prioridad;

if (sintoma === "1" || sintoma === "fiebre" || sintoma === "Fiebre") {
  prioridad = "alta";
} else if (sintoma === "2" || sintoma === "dolor" || sintoma === "Dolor") {
  prioridad = "media";
} else if (sintoma === "3" || sintoma === "malestar" || sintoma === "Malestar") {
  prioridad = "baja";
} else {
  prioridad = "baja"; // por si escriben algo raro
}

// Subir prioridad si la edad es riesgosa
if (edad < 12 || edad > 60) {
  if (prioridad === "baja") {
    prioridad = "media";
  } else if (prioridad === "media") {
    prioridad = "alta";
  } else if (prioridad === "alta") {
    prioridad = "crítica";
  }
}

// Subir prioridad si tiene antecedentes médicos
if (tieneAntecedentes) {
  if (prioridad === "baja") {
    prioridad = "media";
  } else if (prioridad === "media") {
    prioridad = "alta";
  } else if (prioridad === "alta") {
    prioridad = "crítica";
  }
}

// Mostrar el resultado
alert("La prioridad asignada es: " + prioridad);

// Mostrar también en consola (opcional)
console.log("Síntoma:", sintoma);
console.log("Edad:", edad);
console.log("Tiene antecedentes:", tieneAntecedentes);
console.log("Prioridad final:", prioridad);


// Nota:
// Para que el programa se pueda probar de forma fácil, usé funciones como prompt(), confirm() y alert().
// Sé que el ejercicio dice que no se deben usar funciones, pero estas son del navegador y me permitieron
// pedir los datos y mostrar el resultado sin complicarlo más. 
// Lo hice así para que cualquier persona pueda probar el código sin modificarlo cada vez.