require('colors');


const { guardarDB } = require('./helpers/guardarArchivo');
const { 
    inquirerMenu, 
    pausa,
    leerInput 
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

// nom init -y

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    do {
        //Imprimir el menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //Crear opcion
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea( desc );
                break;
            case '2':
                console.log( tareas.listadoArr );
                break;
        }

        guardarDB( tareas.listadoArr );

        await pausa();
    } while (opt !== '0');

}

main();