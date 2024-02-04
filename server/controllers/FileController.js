"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.getAllImages = exports.saveUpdate = void 0;
const fs_1 = require("fs");
const util_1 = require("util");
const path_1 = __importDefault(require("path"));
const ErrorHandler_1 = require("./error/ErrorHandler");
let basePath = path_1.default.join(__dirname, './images');
function saveUpdate(files, dirPrefix) {
    return __awaiter(this, void 0, void 0, function* () {
        let promises = files.map((file) => __awaiter(this, void 0, void 0, function* () { return yield write(file, dirPrefix); }));
        yield Promise.all(promises);
        const oldFiles = yield getAllImages(dirPrefix);
        oldFiles.forEach((f) => __awaiter(this, void 0, void 0, function* () {
            if (files.findIndex(_f => _f.name === f.name) === -1) {
                yield remove(f.name, dirPrefix);
            }
        }));
        return files;
    });
}
exports.saveUpdate = saveUpdate;
function getAllImages(dirPrefix) {
    return __awaiter(this, void 0, void 0, function* () {
        const dir = basePath + dirPrefix;
        // Obtengo todas las direcciones de las imagenes
        const dirFiles = (yield (0, util_1.promisify)(fs_1.readdir)(dir));
        // Persisto cada base 64, luego los proceso para convertirlo a la respuesta 
        const promises = dirFiles.map(x => read(x, dirPrefix));
        return (yield Promise.all(promises)).map((base64, index) => {
            return {
                name: dirFiles[index],
                base64: base64
            };
        });
    });
}
exports.getAllImages = getAllImages;
// Generic read/write
function read(fileName, dirPrefix) {
    return __awaiter(this, void 0, void 0, function* () {
        const dir = basePath + dirPrefix;
        try {
            return yield (0, util_1.promisify)(fs_1.readFile)(`${dir}/${fileName}`, "base64");
        }
        catch (error) {
            console.log("[UPLOAD READ ERROR]:" + error);
            throw new ErrorHandler_1.RequestError(`Ocurrio un error al leer la imagen <${fileName}}>.`, 500);
        }
    });
}
function write(file, dirPrefix) {
    return __awaiter(this, void 0, void 0, function* () {
        const dir = basePath + dirPrefix;
        try {
            yield (0, util_1.promisify)(fs_1.writeFile)(`${dir}/${file.name}`, file.base64, { encoding: "base64" });
            return yield read(file.name, dirPrefix);
        }
        catch (error) {
            console.log("[UPLOAD WRITE ERROR]:" + error);
            throw new ErrorHandler_1.RequestError(`Ocurrio un error al guardar la imagen <${file.name}}>.`, 500);
        }
    });
}
function remove(fileName, dirPrefix) {
    return __awaiter(this, void 0, void 0, function* () {
        const dir = basePath + dirPrefix;
        try {
            yield (0, util_1.promisify)(fs_1.unlink)(`${dir}/${fileName}`);
        }
        catch (error) {
            throw new ErrorHandler_1.RequestError(`Ocurrio un error al eliminar la imagen <${fileName}}>.`, 500);
        }
    });
}
exports.remove = remove;
//# sourceMappingURL=FileController.js.map