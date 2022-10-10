/*Objetivo: Familiarizarse con los métodos y propiedades más importantes de los Objetos predefinidos Math, Date, Number, String de JavaScript 
Desarrollo: Se creará un proyecto que contara de un archivo html, una fichero javascript y opcionalmente un fichero css.
La página html se utilizará para obtener los datos y se mostrarán los resultados mediante un alert.*/

/*Caja de texto de tipo fecha o promt que al pulsar el botón "reyes magos" llame a la función reyesMagos(Fecha) que nos devuelve cuántos días quedan para que vengan los Reyes Magos y lo muestre por pantalla.*/

//Creo una función que asigna la fecha de los reyes magos y calcula el tiempo que queda con la fecha proporcionada
function reyesMagos(fecha){
    const fechaReyesMagos = new Date();
    let tiempoFalta = 0;

    fechaReyesMagos.setFullYear(new Date().getFullYear()+1);
    fechaReyesMagos.setDate(6);
    fechaReyesMagos.setMonth(0);

    tiempoFalta = fechaReyesMagos.getTime() - fecha.getTime();

    return Math.floor((tiempoFalta / 86400000));
}

/*Botón que al pusar muestre en un alert la fecha y hora actuales de la siguiente formaFecha:
Hoy es martes, 22 de septiembre de 2020 y son las 12:34 horas*/

function fechaHoraActual(){
    const fechaSemana = new Date().getDay();
    const fechaDia = new Date().getDate();
    const fechaMes = new Date().getMonth();
    const fechaAnnio = new Date().getFullYear();
    const fechaHora = new Date().getHours();
    const fechaMinutos = new Date().getMinutes();
    let diaSemana = "";
    let mes = "";

    if (fechaMinutos<10) {
        fechaMinutos = "0"+fechaMinutos;
    }

    switch(fechaSemana){
        case 0:
            diaSemana = "Domingo";
        break;
        case 1:
            diaSemana = "Martes";
        break;
        case 2:
            diaSemana = "Miércoles";
        break;
        case 3:
            diaSemana = "Jueves";
        break;
        case 4:
            diaSemana = "Viernes";
        break;
        case 5:
            diaSemana = "Sábado";
        break;
        case 6:
            diaSemana = "Lunes";
        break;
    }

    switch(fechaMes){
        case 0:
            mes = "Enero";
        break;
        case 1:
            mes = "Febrero";
        break;
        case 2:
            mes = "Marzo";
        break;
        case 3:
            mes = "Abril";
        break;
        case 4:
            mes = "Mayo";
        break;
        case 5:
            mes = "Junio";
        break;
        case 6:
            mes = "Julio";
        break;
        case 7:
            mes = "Agosto";
        break;
        case 8:
            mes = "Septiembre";
        break;
        case 9:
            mes = "Octubre";
        break;
        case 10:
            mes = "Noviembre";
        break;
        case 11:
            mes = "Diciembre";
        break;
    }

    return "Hoy es " + diaSemana + ", " + fechaDia + " de " + mes + " de " + fechaAnnio + " y son las " + fechaHora + ":" + fechaMinutos + " horas."
}

/*Caja de texto de tipo número o promt que nos solicita un radio. Este llamará a la función calcularAreaCirculo(radio) que devuelve el área.  Mostrar en un alert el área de un círculo y la longitud de una circunferencia a partir del radio que introduzca el usuario. Debes mostrarlo con 2 decimales. Comprobar que introduce un número como radio.*/
function calcularAreaCirculo(radio){
    let area = Math.round(((Math.PI * Math.pow(radio, 2)) + Number.EPSILON) * 100) / 100;
    let longitud = Math.round(((2 * Math.PI * radio) + Number.EPSILON) * 100) /100;

    console.log(area + " y " + longitud)
    return "El área de la circunferencia es " + area + " y su longitud es " + longitud;
}

/*Mediante cajas de texto o un promt, al pulsar el botón "aleatorio" llame a la función calcularAleatorio(comienzo,fin) que mostrará por pantalla un número aleatorio generado entre los dos números introducidos.*/
function calcularAleatorio(comienzo, fin){
    const numero = Math.floor(Math.random() * (fin - comienzo + 1) + comienzo);

    return numero;
}

/*Añadir una caja de texto y los siguientes botones que implementan las siguientes funcionalidades:
Imprimir la primera mitad de los caracteres de la cadena de la caja de texto. mitadCar(cadena)
Imprimir el último carácter de la caja de texto. ultimoCaracter(cadena)
Imprimir la cadena en forma inversa de la caja de texto. cadenaInversa(cadena)
Imprimir cada carácter del String de la caja de texto separado con un guión cadenaGuiones(cadena)
Imprimir la cantidad de vocales almacenadas en la caja de texto. contarVocales(cadena)*/

function mitadCar(cadena){
    return cadena.slice(0, cadena.length / 2);
}

function ultimoCaracter(cadena){
    return cadena.slice(cadena.length - 1, cadena.length);
}

function cadenaInversa(cadena){
    return cadena.split("").reverse().join("");
}

function cadenaGuiones(cadena){
    return cadena.split("").join("-");
}

function contarVocales(cadena){
    const vocales = cadena.match(/[aeiou]/ig);
    return vocales.length;
}
