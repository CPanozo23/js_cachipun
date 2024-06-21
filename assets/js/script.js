//console.log("Holi")
/*
o	Piedra vence a tijeras.
o	Tijeras vence a papel.
o	Papel vence a piedra.
o	Si ambos seleccionan lo mismo, es un empate.
*/

/* 3 Situaciones finales: Ganar, perder, empatar*/

/*let jugada = "piedra"
let pc = "piedra"
let resultado =""*/
/**GANAR:
o	Piedra vence a tijeras.
o	Tijeras vence a papel.
o	Papel vence a piedra.
 */
//Piedra vence a tijeras.
/*
if (jugada=="piedra" && pc=="tijeras") {
    resultado = "ganaste"
}
if(jugada=="tijeras" && pc=="papel") {
    resultado = "ganaste"
}
if(jugada=="papel" && pc=="piedra") {
    resultado = "ganaste"
}
    */
/* FUNCIÓN NORMAL
function jugar(){
    let usuario = document.querySelector("#txtName").value
    //arreglo con las 3 jugadas
    const opciones = ['piedra', 'papel', 'tijeras']
    // se guarda en pc una opción aleatoria de el arreglo anterior
    let pc = opciones[Math.floor(Math.random() * opciones.length)]
    let jugada = document.querySelector("#selectJugada").value
    let resultado =""
    console.log(pc)
    console.log(usuario)
    console.log(jugada)

    //version 2 de ganar
    if (
        (jugada=="piedra" && pc=="tijeras") ||
        (jugada=="tijeras" && pc=="papel") ||
        (jugada=="papel" && pc=="piedra")
        )
        {
        resultado = "ganaste"
    }
    //if de empatar
    else if(jugada == pc){
        resultado = "empataste"
    }else{
        resultado = "perdiste"
    }
    console.log(`${resultado} ${usuario}`)
    //llamar al elemento para dar el mensaje del resultado
    //se llama completo porque se va a editar
    let mensajeRespuesta = document.querySelector("#msjResultado")
    mensajeRespuesta.innerHTML=`${resultado} ${usuario}`
    //lo ideal es que cambie de color según el resultado obtenido
    mensajeRespuesta.style.backgroundColor="green"
}
*/

//ARROW FUNCTION // es una versión mejorada, más actualizada, se utilizará más a futuro
/*const jugar = () => {
    let usuario = document.querySelector("#txtName").value
    //arreglo con las 3 jugadas
    const opciones = ['piedra', 'papel', 'tijeras']
    // se guarda en pc una opción aleatoria de el arreglo anterior
    let pc = opciones[Math.floor(Math.random() * opciones.length)]
    let jugada = document.querySelector("#selectJugada").value
    let resultado =""
    console.log(pc)
    console.log(usuario)
    console.log(jugada)

    //version 2 de ganar
    if (
        (jugada=="piedra" && pc=="tijeras") ||
        (jugada=="tijeras" && pc=="papel") ||
        (jugada=="papel" && pc=="piedra")
        )
        {
        resultado = "ganaste"
    }
    //if de empatar
    else if(jugada == pc){
        resultado = "empataste"
    }else{
        resultado = "perdiste"
    }
    console.log(`${resultado} ${usuario}`)
    //llamar al elemento para dar el mensaje del resultado
    //se llama completo porque se va a editar
    let mensajeRespuesta = document.querySelector("#msjResultado")
    mensajeRespuesta.innerHTML=`${resultado} ${usuario}`
    //lo ideal es que cambie de color según el resultado obtenido
    mensajeRespuesta.style.backgroundColor="green"
}
*/
//VERSIÓN MEJORADA 3: separación de lógica.
let mensajeRespuesta = document.querySelector("#msjResultado")
//VALIDAR QUE TENGO LOS DATOS NECESARIOS
const validarDatos = () =>{
    let usuario = document.querySelector("#txtName").value
    let jugada = document.querySelector("#selectJugada").value
    //validar -> comparar
    if(usuario == "" || jugada==""){
        console.log("Falta elegir nombre de usuario y/o jugada")
        mensajeRespuesta.innerHTML="Falta elegir nombre de usuario y/o jugada"
    }else{
        //mandar por parámetro los datos que requiero
        jugar(usuario, jugada)
    }

}


//REALIZAR LA ACCIÓN PRINCIPAL: JUGAR 
const jugar = (usuario, jugada) => {
    //arreglo con las 3 jugadas
    const opciones = ['piedra', 'papel', 'tijeras']
    // se guarda en pc una opción aleatoria de el arreglo anterior
    let pc = opciones[Math.floor(Math.random() * opciones.length)]
    let resultado =""
    console.log(pc)
    console.log(usuario)
    console.log(jugada)

    //version 2 de ganar
    if (
        (jugada=="piedra" && pc=="tijeras") ||
        (jugada=="tijeras" && pc=="papel") ||
        (jugada=="papel" && pc=="piedra")
        )
        {
        resultado = "ganaste"
    }
    //if de empatar
    else if(jugada == pc){
        resultado = "empataste"
    }else{
        resultado = "perdiste"
    }
    console.log(`${resultado} ${usuario}`)
    //llamar al elemento para dar el mensaje del resultado
    //se llama completo porque se va a editar
    let mensajeRespuesta = document.querySelector("#msjResultado")
    mensajeRespuesta.innerHTML=`${resultado} ${usuario}`
    //lo ideal es que cambie de color según el resultado obtenido
    mensajeRespuesta.style.backgroundColor="green"
}
//llamando a mi elemento que desencadena todo
let boton = document.querySelector("#btnJugar")
//AddEventListener -> Está atento a lo que hace la persona en nuestra página
//En este caso, estará atento a la interacción de la persona con el botón
//La interacción es el click //lo mismo que el onclick
//boton.addEventListener("click", jugar)
boton.addEventListener("click", validarDatos)




