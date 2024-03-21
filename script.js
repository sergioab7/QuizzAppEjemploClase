import {preguntas} from "./preguntas.js";

const btnEnviar = document.querySelector(".btnEnviar");
const btnRespuestas = document.querySelectorAll(".respuestas");

const tituloPregunta = document.querySelector(".tituloPregunta");
const preguntasFinalizado = document.querySelector(".main");

const juegoFinalizadoGanador = document.querySelector(".juegoFinalizadoGanador");
juegoFinalizadoGanador.style.display="none";
const spanPreguntasAcertadas = document.querySelector(".preguntasAcertadas");

const pregunta1 = document.querySelector(".pregunta1");
const pregunta2 = document.querySelector(".pregunta2");
const pregunta3 = document.querySelector(".pregunta3");
const pregunta4 = document.querySelector(".pregunta4");

let turno = 0;
let preguntasAcertadas = 0;

mostrarPreguntas();

btnRespuestas.forEach(boton => {
    boton.addEventListener("click", (e) => {
        quitarSombreadoDeColoresActivos();
        e.target.classList.add("sombreado");
    })
})

function mostrarPreguntas(){
    quitarSombreadoDeColoresActivos();

    if(turno<preguntas.length){
        tituloPregunta.innerHTML=preguntas[turno].titulo;
    
        pregunta1.innerHTML=preguntas[turno].respuesta1
        pregunta2.innerHTML=preguntas[turno].respuesta2
        pregunta3.innerHTML=preguntas[turno].respuesta3
        pregunta4.innerHTML=preguntas[turno].respuesta4
    }

}

function quitarSombreadoDeColoresActivos(){
    btnRespuestas.forEach(boton => {
        if(boton.classList.contains("sombreado")){
            boton.classList.remove("sombreado");
        }
    })
}

btnEnviar.addEventListener("click", () => {
    if(turno+1 == preguntas.length){
        juegoFinalizadoUltimo();
    }else{
        comprobarTurnoGanador();
        turno++;
        mostrarPreguntas();
    }
})

function comprobarTurnoGanador(){
    let valorSeleccionado;
    btnRespuestas.forEach(boton => {
        if (boton.classList.contains("sombreado")) {
            valorSeleccionado = boton.innerHTML; 
            if(valorSeleccionado == preguntas[turno].correcta){
                preguntasAcertadas += 1;
                console.log("Preguntas acertadas hasta el momento: " + preguntasAcertadas);
            }
        }
    })
    console.log(valorSeleccionado);
}


function juegoFinalizadoUltimo(){
    preguntasFinalizado.classList.add("quitar");
    juegoFinalizadoGanador.style.display="block";
    spanPreguntasAcertadas.innerHTML=preguntasAcertadas;
}