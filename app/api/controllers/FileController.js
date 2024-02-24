import { writeFile, readFile, unlink, readdir } from "fs"
import { promisify } from "util"
import path from "path";

let basePath = path.join(process.cwd(), './public/images')

export async function saveUpdate(files, dirPrefix) {
    let promises = files.map(async file => await write(file, dirPrefix))
    await Promise.all(promises)
    const oldFiles = await getAllImages(dirPrefix)
    oldFiles.forEach(async f => {
        if (files.findIndex(_f => _f.name === f.name) === -1) {
            await remove(f.name, dirPrefix)
        }
    })
    return files;
}

export async function getAllImages(dirPrefix) {
    const dir = basePath + dirPrefix
    // Obtengo todas las direcciones de las imagenes
    const dirFiles = (await promisify(readdir)(dir))
    // Persisto cada base 64, luego los proceso para convertirlo a la respuesta 
    const promises = dirFiles.map(x => read(x, dirPrefix))
    return (await Promise.all(promises)).map((base64, index) => {
        return {
            name: dirFiles[index],
            base64: base64
        }
    });
}

// Generic read
async function read(fileName, dirPrefix) {
    const dir = basePath + dirPrefix
    try {
        return await promisify(readFile)(`${dir}/${fileName}`, "base64");
    } catch (error) {
        console.log("[UPLOAD READ ERROR]:" + error)
        throw new Error(`Ocurrio un error al leer la imagen <${fileName}}>.`)
    }
}

// Generic write
async function write(file, dirPrefix) {
    const dir = basePath + dirPrefix
    try {
        await promisify(writeFile)(`${dir}/${file.name}`, file.base64, { encoding: "base64" });
        return await read(file.name, dirPrefix)
    } catch (error) {
        console.log("[UPLOAD WRITE ERROR]:" + error)
        throw new Error(`Ocurrio un error al guardar la imagen <${file.name}}>.`)
    }
}

// Generic remove
export async function remove(fileName, dirPrefix) {
    const dir = basePath + dirPrefix
    try {
        await promisify(unlink)(`${dir}/${fileName}`);
        return "Imagen eliminada exitosamente!"
    } catch (error) {
        throw new Error(`Ocurrio un error al eliminar la imagen <${fileName}}>.`)
    }
}