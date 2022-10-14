//Ejercicio 1
//Asigno el valor de los elementos de HTML a constantes
const campoReyesMagos = document.getElementById("campoReyesMagos");
const botonReyesMagos = document.getElementById("botonReyesMagos");
const resultadoReyesMagos = document.getElementById("resultadoReyesMagos");

//Establezco qué ocurre al pulsar su botón
botonReyesMagos.onclick = function(){
    const tiempoFalta = reyesMagos(new Date(campoReyesMagos.value));
    let resultado = "";


    if(tiempoFalta === 0) { //si no quedan días es porque es hoy
        resultado = "Hoy son los Reyes Magos."
    } else { //si no muestro el tiempo que falta
        resultado = "Faltan " + tiempoFalta + " días para los Reyes Magos."
    }

    resultadoReyesMagos.innerHTML = resultado;
}

//Ejercicio 2
const botonFechaHora = document.getElementById("botonFechaHora");
const resultadoFechaHora = document.getElementById("resultadoFechaHora");

botonFechaHora.onclick = function(){
    const resultado = fechaHoraActual();

    alert(resultado);
    resultadoFechaHora.innerHTML = resultado;
}

//Ejercicio 3
const radioCircunferencia = document.getElementById("radioCircunferencia");
const botonCircunferencia = document.getElementById("botonCircunferencia");
const resultadoCircunferencia = document.getElementById("resultadoCircunferencia");

botonCircunferencia.onclick = function(){
    const resultado = "El área de la circunferencia es " + calcularAreaCirculo(radioCircunferencia.value) + " y su longitud es " + calcularLongitudCirculo(radioCircunferencia.value);

    alert(resultado);
    resultadoCircunferencia.innerHTML = resultado;
}

//Ejercicio 4
const numeroInicio = document.getElementById("numeroInicio");
const numeroFin = document.getElementById("numeroFin");
const botonAleatorio = document.getElementById("botonAleatorio");
const resultadoAleatorio = document.getElementById("resultadoAleatorio");

botonAleatorio.onclick = function () {
    const resultado = calcularAleatorio(numeroInicio.value, numeroFin.value);

    resultadoAleatorio.innerHTML = "El número aleatorio es " + resultado;
}

//Ejercicio 5
const cadenaTexto = document.getElementById("cadena");
const botonMitadCadena = document.getElementById("botonMitadCadena");
const botonUltimoCaracter = document.getElementById("botonUltimoCaracter");
const botonAlReves = document.getElementById("botonAlReves");
const botonGuiones = document.getElementById("botonGuiones");
const botonVocales = document.getElementById("botonVocales");
const resultadoCadena = document.getElementById("resultadoCadena");

botonMitadCadena.onclick = function(){
    const resultado = mitadCar(cadenaTexto.value);
    //alert(resultado);
    resultadoCadena.innerHTML = resultado;
}

botonUltimoCaracter.onclick = function(){
    const resultado = ultimoCaracter(cadenaTexto.value);
    //alert(resultado);
    resultadoCadena.innerHTML = resultado;
    
}

botonAlReves.onclick = function(){
    const resultado = cadenaInversa(cadenaTexto.value);
    //alert(resultado);
    resultadoCadena.innerHTML = resultado;
    
}

botonGuiones.onclick = function(){
    const resultado = cadenaGuiones(cadenaTexto.value);
    //alert(resultado);
    resultadoCadena.innerHTML = resultado;
    
}

botonVocales.onclick = function(){
    const resultado = contarVocales(cadenaTexto.value);
    alert(resultado);
    resultadoCadena.innerHTML = "Hay " + resultado +" vocales.";
    
}