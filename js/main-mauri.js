const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;

function validarFormulario(event){
    event.preventDefault();

    const nombreUsuario = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const regalo = $form['descripcion-regalo'].value;

    const errorNombreUsuario = validarNombre(nombreUsuario);
    const errorCiudad = validarCiudad(ciudad);
    const errorComportamiento = validarComportamiento(comportamiento);
    const errorRegalo = validarRegalo(regalo);

    const errores = {
        nombre: errorNombreUsuario,
        comportamiento: errorComportamiento,
        ciudad: errorCiudad,
        'descripcion-regalo': errorRegalo
    }

    borrarMensajesError();
    const esExito = manejarErrores(errores) === 0;
    if(esExito){
        document.querySelector('#exito').className = '';
        $form.className = 'oculto';
    }
}

function manejarErrores(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];
        
        if(error){
            cantidadErrores++;
            $form[key].className = 'error'
            
            const $error = document.createElement('li');
            $error.textContent = error;
            $errores.appendChild($error);
            
        }else{
            $form[key].className = ''
        }
    })
    console.log(cantidadErrores)
    return cantidadErrores
}

function validarNombre(nombreUsuario){
    if(nombreUsuario === ''){
        return 'Este campo debe tener al menos 1 caracter.'
    
    }else if(nombreUsuario.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres.'
    
    }else if(!/^[A-z]+$/.test(nombreUsuario)){
        return 'El campo nombre solo acepta letras.'
    
    }else{
        return ''
    }
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
    if (regalo === ''){
        return 'Por favor dejar un mensaje para papa noel.'
    
    }else if (regalo.length >= 100){
        return 'Estas pidiendo mucho a papa noel'
    
    }else if (!/[A-z0-9]+$/i.test(regalo)){
        return 'El campo de la descripcion solo acepta letras y numeros.'
    
    }else{
        return ''
    }
}

function borrarMensajesError(){
    const mensajesError = document.querySelectorAll('li');
    for(let i=0; i<mensajesError.length; i++){
        mensajesError[i].remove();
    }
}