import { readFile } from 'node:fs/promises'
import {dirname, join} from 'node:path'
import { fileURLToPath } from 'node:url' 

const carpeta = dirname(fileURLToPath(import.meta.url)) //<------ ruta de la carpeta actual

const rutaArchivo = join(carpeta, 'usuarios.json')

export async function leerUsuarios(){
    try{
        const datos = await readFile(rutaArchivo,'utf-8')
        return await JSON.parse(datos)
    }catch(error){
        throw error
    }
}

