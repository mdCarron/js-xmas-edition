const $form = document.querySelector('#carta-a-santa');

const nombreUsuario = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const regalo = $form['descripcion-regalo'].value;

console.log(nombreUsuario);
console.log(ciudad);
console.log(comportamiento);
console.log(regalo);

validarNombre(nombreUsuario);
validarCiudad(ciudad);
validarComportamiento(comportamiento);
validarRegalo(regalo);

function validarNombre(nombreUsuario){
    if(nombreUsuario.length === 0){
        return 'Este campo debe tener al menos 1 caracter.'
    }
    if(nombreUsuario.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres.'
    }
    
    return ''
}

function validarCiudad(ciudad){
    if (ciudad === ''){
        return 'Por favor seleccionar una ciudad.'
    }
    return ''
}

function validarComportamiento(comportamiento){
    if(comportamiento === ''){
        return 'Por favor seleccionar una opcion.'
    }
    return ''
}

function validarRegalo(regalo){
    if (regalo.length === 0){
        return 'Por favor dejar un mensaje para papa noel.'
    }
    if (regalo.length >= 100){
        return 'Estas pidiendo mucho a papa noel'
    }

    return ''
}
