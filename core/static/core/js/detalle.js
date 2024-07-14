
const queryString = window.location.search;
// Crear un objeto con los parámetros
const urlParams = new URLSearchParams(queryString);
console.log("hola detalle")
// Obtener el valor de 'id'
//const id = urlParams.get('id');
//console.log(id);
//let id;
let nombreValido, apellidoValido, correoValido, telefonoValido, cantidadValido, tipo_eventoValido ,fechaValida= false;
let array = [];
function inicializacion() {
    // enlaces
   /* let imagen1 = document.getElementById(`imagen1`);
    let imagen2 = document.getElementById(`imagen2`);
    let imagen3 = document.getElementById(`imagen3`);
    let imagen4 = document.getElementById(`imagen4`);
    // carga de imagenes
    imagen1.src = "." + datos[parseInt(numero)].foto1;
    imagen2.src = datos[parseInt(numero)].foto2;
    imagen3.src = datos[parseInt(numero)].foto3;
    imagen4.src = datos[parseInt(numero)].foto4;

    // enlace y carga de direccion
    let direccion = document.getElementById("direccion");
    direccion.innerHTML = "Dirección: " + datos[parseInt(numero)].direccion;
    // enlace y carga de precio
    let precio = document.getElementById("precio");
    precio.innerHTML = "" + datos[parseInt(numero)].precio;
    // enlace y carga de descripcion
    let descripcion = document.getElementById("descripcion");
    descripcion.innerHTML = datos[parseInt(numero)].descripcion;
    // enlace y carga de mapa
    let mapa = document.getElementById("mapa");
    mapa.src = datos[parseInt(numero)].mapa;
*/
    // enlace y carga de caracteristicas
    let capacidad = document.getElementById("capacidad");
    let banios = document.getElementById("banios");
    let cocina = document.getElementById("cocina");
    let piscina = document.getElementById("piscina");
    let patio = document.getElementById("patio");
    let climatizacion = document.getElementById("climatizacion");
    let estacionamiento = document.getElementById("estacionamiento");
    let barra = document.getElementById("barra");
    let sonido = document.getElementById("sonido");
    let video = document.getElementById("video");
    let conectividad = document.getElementById("conectividad");
    let vestuario = document.getElementById("vestuario");
    let infantiles = document.getElementById("infantiles");
    let escenario = document.getElementById("escenario");
    console.log(array)
    capacidad.innerHTML = array[0];
    banios.innerHTML = array[1];
    cocina.innerHTML = array[2]===true? 'si' : 'no';
    piscina.innerHTML = array[3]===true ? 'si' : 'no';
    patio.innerHTML = array[4]===true ? 'si' : 'no';
    climatizacion.innerHTML = array[5]===true ? 'si' : 'no';
    estacionamiento.innerHTML = array[6]===true? 'si' : 'no';
    barra.innerHTML = array[7]===true? 'si' : 'no';
    sonido.innerHTML = array[8]===true? 'si' : 'no';
    video.innerHTML = array[9]===true? 'si' : 'no';
    conectividad.innerHTML = array[10]===true? 'si' : 'no';
    vestuario.innerHTML = array[11]===true ? 'si' : 'no';
    infantiles.innerHTML = array[12]===true? 'si' : 'no';
    escenario.innerHTML = array[13]===true? 'si' : 'no';

}


//document.addEventListener('DOMContentLoaded', function() {
    function getCaracteristicas(id) {
    const propiedadId = id; // Id de la propiedad que quieres consultar

    //const propiedadId = 1; // Reemplaza con el ID de la propiedad que deseas obtener

fetch(`http://localhost:8000/detalle_caracteristicas/${propiedadId}/`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return response.json();
    })
    .then(data => {
        console.log(data.caracteristicas);
        array = data.caracteristicas.split(",").map(item => {
            // Intentar convertir a número entero
            let num = parseInt(item);
            if (!isNaN(num)) {  // Verificar si se pudo convertir a número
              return num;
            } else if (item.trim() === "true") {  // Si es la cadena "true", convertir a booleano true
              return true;
            } else if (item.trim() === "false") {  // Si es la cadena "false", convertir a booleano false
              return false;
            } else {
              // Si no se puede convertir a número y no es "true" ni "false", manejar según tu necesidad
              // Por ejemplo, puedes devolver el mismo valor como string o null
              return item;
            }
          });
        
        inicializacion();
    })
    .catch(error => {
        console.error('Error al obtener características:', error);
    });
};




function mostrarFormulario() {
    let formulario = document.getElementById("formulario");
    formulario.classList.remove("oculto");
    formulario.classList.add("centrado")
}
// escuchador de boton reservar
document.getElementById("botonReservar").addEventListener("click", function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del botón
    if (nombreValido && apellidoValido && correoValido && telefonoValido && cantidadValido && tipo_eventoValido && fechaValida) {
        let formulario = document.getElementById("formulario");
        // para ocultar el formulario primero hay que sacar el centrado
        formulario.classList.remove("centrado");
        // Oculta la sección de formulario al presionar el botón de reserva
        formulario.classList.add("oculto");
    }

});

function botonMapa() {
    let mapa = document.getElementById("mapa");

    if (mapa.classList.contains("oculto")) {
        mapa.classList.remove("oculto");
    } else {
        mapa.classList.add("oculto");
    }
}


function botonCaracteristicas(id) {
    console.log(id)
   // id =id;
    getCaracteristicas(id);
    let caracteristicas = document.getElementById("caracteristicas");

    if (caracteristicas.classList.contains("oculto")) {
        caracteristicas.classList.remove("oculto");
        caracteristicas.classList.add("container");
        caracteristicas.classList.add("centrado");
    } else {
        caracteristicas.classList.remove("container");
        caracteristicas.classList.remove("centrado");
        caracteristicas.classList.add("oculto");
    }
}

function botonReservar2() {
    let formulario = document.getElementById("formulario");
    //si esta oculto lo muestra
    if (formulario.classList.contains("oculto")) {
        formulario.classList.remove("oculto");
        formulario.classList.add("container");
        formulario.classList.add("centrado");
    } else { // si esta visible entonces lo oculta

        formulario.classList.remove("container");
        formulario.classList.remove("centrado");
        formulario.classList.add("oculto");


    }
}
const expresiones = {
    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/,
    apellido: /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    numeros: /^\d{1,7}$/ // De 1 a 7 números
}
function comprobarCampo(expresion, valor) {

    return expresion.test(valor);
}
//retorna false si hay un campo vacio
function camposValidos() {
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const correo = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const cantidad = document.querySelector("#cantidad");
    const tipo_evento = document.querySelector("#tipo_evento");
    let error = false;

    if ((nombre.value) === "" || comprobarCampo(expresiones.nombre, nombre.value) === false) {
        nombreValido = false;
        error = true;

    } else {

        nombreValido = true;
    };
    if ((apellido.value) === "" || comprobarCampo(expresiones.apellido, apellido.value) === false) {
        apellidoValido = false;
        error = true;

    } else {
        apellidoValido = true;
    };
    if ((correo.value) === "" || comprobarCampo(expresiones.correo, correo.value) === false) {
        correoValido = false;
        error = true;

    } else {
        correoValido = true;
    }
    if ((telefono.value) === "" || comprobarCampo(expresiones.telefono, telefono.value) === false) {
        telefonoValido = false;
        error = true;
  
    } else {
        telefonoValido = true;
    }
    if ((cantidad.value) === "" || comprobarCampo(expresiones.numeros, cantidad.value) === false) {
        cantidadValido = false;
        error = true;
  
    } else {
        cantidadValido = true;
    }
    if ((tipo_evento.value) === "") {
        tipo_eventoValido = false;
        error = true;
    
    } else {
        tipo_eventoValido = true;
    }
    // if ((nombre.value) === "" || comprobarCampo(expresiones.nombre, nombre.value) === false) return false;
    // if ((apellido.value) === "" || comprobarCampo(expresiones.apellido, apellido.value) === false) return false;
    // if ((correo.value) === "" || comprobarCampo(expresiones.correo, correo.value) === false) return false;
    //if ((telefono.value) === "" || comprobarCampo(expresiones.telefono, telefono.value) === false) return false;
    // if ((cantidad.value) === "" || comprobarCampo(expresiones.numeros, cantidad.value) === false) return false;
    // if ((tipo_evento.value) === "") return false;
    return error;
}
// se activa al presionar el boton confirmar
function obtenerDatos() {
    let mensaje = document.getElementById("mensajeNombre");
    mensaje.style.color = "#666"
    mensaje = document.getElementById("mensajeApellido");
    mensaje.style.color = "#666"
    mensaje = document.getElementById("mensajeEmail");
    mensaje.style.color = "#666"
    mensaje = document.getElementById("mensajeTelefono");
    mensaje.style.color = "#666"
    mensaje = document.getElementById("mensajeCantidad");
    mensaje.style.color = "#666"
    mensaje = document.getElementById("mensajeFecha");
    mensaje.style.color = "#666"

    let hayError = camposValidos();
    //  console.log("nombre valido: "+nombreValido);
    if (hayError) {
        alert("error: uno de los campos no es valido");
        if (!nombreValido) {
            //  alert("error: El nombre no es valido,ingresar solo letras");
            let mensaje = document.getElementById("mensajeNombre");
            mensaje.style.color = "red"
        }
        if (!apellidoValido) {
            //         alert("error: El apellido no es valido,ingresar solo letras");
            let mensaje = document.getElementById("mensajeApellido");
            mensaje.style.color = "red"
        }
        if (!correoValido) {
            // alert("error: La direccion de correo no es valida,ingresar un correo valido");
            let mensaje = document.getElementById("mensajeEmail");
            mensaje.style.color = "red"
        }
        if (!telefonoValido) {
            //   alert("error: el numero de telefono no es valido,ingresar solo numeros (7 a 14 digitos)");
            let mensaje = document.getElementById("mensajeTelefono");
            mensaje.style.color = "red"
        }
        if (!cantidadValido) {
            //  alert("error: el numero de invitados no es valido,ingresar solo numeros");
            let mensaje = document.getElementById("mensajeCantidad");
            mensaje.style.color = "red"
        }
        // alert("Todos los campos son obligatorios, por favor veifique todos los campos.");
    } else {// validacion campo fecha
        let fecha = obtenerFecha();
        if (fecha === null) {
            fechaValida=false;
            alert("fecha invalida");
            let mensaje = document.getElementById("mensajeFecha");
            mensaje.style.color = "red"
        } else {
            // obtengo el vector de reservas
            let reservas = datos[parseInt(id)].reservas;
            // si esta vacio entonces no hay reservas y guardo fecha en el vector de reservas
            if (reservas.length === 0) {
                reservas.push(fecha);
                datos[parseInt(id)].reservas = reservas;
                alert("se envia los datos al servidor");
                fechaValida=true;
            } else {// si tiene reservas entonces verifico disponibilidad
                // devuelve false si encuentra la fecha y no esta disponible
                if (verificarDisponibilidad(reservas, fecha)) {
                    reservas.push(fecha);
                    datos[parseInt(id)].reservas = reservas;
                    alert("se envia los datos al servidor");
                    fechaValida=true;
                } else {
                    alert("no esta disponible para esa fecha");
                    fechaValida=false;
                }
            }
        }

    }

}
function cambiarColor() {
    var mensaje = document.getElementById("mensaje");
    mensaje.classList.add("red-text");
}
function obtenerFecha() {
    // Obtener el valor del input de fecha
    let fechaInput = document.getElementById("fecha").value;
    // si el formato esta bien entonces devuelve la fecha
    if (validarFormatoFecha(fechaInput)) {
        return fechaInput;
    } else {
        return null;
    }
}
function validarFormatoFecha(fecha) {
    // Expresión regular para verificar el formato de fecha (AAAA-MM-DD)
    let regexFecha = /^\d{4}-\d{2}-\d{2}$/;
    // Verificar si la fecha coincide con el formato deseado
    return regexFecha.test(fecha);
}
function verificarDisponibilidad(reservas, fecha) {
    return !reservas.includes(fecha);
}