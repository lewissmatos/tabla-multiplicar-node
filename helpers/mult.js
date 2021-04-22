const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 1, hasta = 10, listar = false) => {            
   
    try {
        
        let salida, consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${'x'.yellow} ${i} ${'='.yellow} ${base * i} \n`;
        }
        
        
        if(listar == true){
            console.log('Tabla del: ',colors.blue(base), '\n');
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        return (`Archivo creado exitosamente!, tabla del ${base} \n`);

    } catch (error) {
        throw error;
    }
}

module.exports = {
    createFile
}