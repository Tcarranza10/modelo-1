
import {writeFile} from "node:fs/promises" 
import { join } from "node:path"
const novela ={
    titulo: "rayuela",
    autor: "Julio Cortazar",
    editorial: "Debolsillo",
}

const ruta = join("novela.json")

try {
    const ArchivoJson = JSON.stringify(novela, null, 4)
    writeFile(ruta,ArchivoJson)
} catch (error) {
    console.log(error)
}