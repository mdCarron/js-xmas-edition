pruebaValidarNombre();
//pruebaValidarCiudad();
//pruebaValidarComportamiento();
//pruebaValidarRegalo();

function pruebaValidarNombre(){
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter.', 
        'La funcion validarNombre no valido con un string vacio.'
        );

    console.assert(
        validarNombre('111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 caracteres',
        'validarNombre no valido que el campo tenga menos de 50 caracteres.'
    );
}

/* 
function pruebaValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Por favor seleccionar una ciudad.', 
        'validarCiudad no esta validando.'
    )
}

function pruebaValidarComportamiento(){
    console.assert(
        validarComportamiento('') === 'Por favor seleccionar una opcion.',
        'validarComportamiento no esta validando.'
    )
}

function pruebaValidarRegalo(){
    console.assert(
        validarRegalo('') === 'Por favor dejar un mensaje para santa.',
        'validarRegalo no esta validando.'
    )
}
 */