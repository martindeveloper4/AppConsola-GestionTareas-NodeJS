
// import colors
require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.log();
        console.log('==================='.green);
        console.log('  Selecciones una opción  '.green);
        console.log('====================\n'.green);

        console.log(`${'1.'.green} Crear Tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas completadas`);
        console.log(`${'4.'.green} Listar Tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);


        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        // stdout  > mostrar información al usuario.
        readline.question('Seleccione una opción: ', (opt) => {
            resolve(opt);
            readline.close();
            resolve(opt);
        });
    });

}

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${'ENTER'.green} para continuar `, (opt) => {
            readline.close();
            resolve();
        });
    })

}


// se exportan los objetos
module.exports = {
    mostrarMenu,
    pausa
}