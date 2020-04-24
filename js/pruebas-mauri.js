pruebaValidarNombre();
pruebaValidarCiudad();
pruebaValidarComportamiento();
pruebaValidarRegalo();

function pruebaValidarNombre(){
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter.', 
        'validarNombre no valida con un string vacio.'
        );

    console.assert(
        validarNombre('111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 caracteres.',
        'validarNombre no valida que el campo tenga menos de 50 caracteres.'
    );
}

function pruebaValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Por favor seleccionar una ciudad.', 
        'validarCiudad no valida que hay una ciudad seleccionada..'
    )
}

function pruebaValidarComportamiento(){
    console.assert(
        validarComportamiento('') === 'Por favor seleccionar una opcion.',
        'validarComportamiento no valida que haya una opcion selecionada.'
    )
}

function pruebaValidarRegalo(){
    console.assert(
        validarRegalo('') === 'Por favor dejar un mensaje para papa noel.',
        'validarRegalo no valida que en el campo de texto esta vacio.'
    )
    console.assert(
        validarRegalo('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Estas pidiendo mucho a papa noel',
        'validarRegalo no valida que supera el maximo de 100 caracteres.'
    )
}
//al validar las opciones tienen que ser las mismas que las escritas en la funcion, porque sino no funciona. Ademas siempre aclarar bien cual es el mensaje de error para identificar mas facil de donde viene el problema.
