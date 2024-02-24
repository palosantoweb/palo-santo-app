import { RequestError } from "./error/ErrorHandler";
import { convertClient, unconvertClient } from "../converters/ClientConverter";
import { Op } from "sequelize";
import Client from "../database/models/Client";

export async function saveUpdate(client, clientId) {
    // Valido datos del cliente
    if (!client.birthDate)
        throw new RequestError(new Error(), "Debe enviar la fecha de nacimiento del cliente.", 419);

    if (!client.email)
        throw new RequestError(new Error(), "Debe enviar el email.", 419);

    if (!client.name)
        throw new RequestError(new Error(), "Debe enviar el nombre del cliente.", 419);

    if (!client.nationality)
        throw new RequestError(new Error(), "Debe enviar la nacionalidad del cliente.", 419);

    if (!client.phoneNumber)
        throw new RequestError(new Error(), "Debe enviar el numero de telefono del cliente.", 419);

    // Instancio y creo el cliente en la base
    let dbClient = null;
    if (clientId) {
        dbClient = await Client.findByPk(Number(clientId))
        if (!dbClient)
            throw new RequestError(new Error(), "No se encontró el cliente a modificar.", 419);
    }
    if (clientId) {
        await Client.update(client, { where: { id: Number(clientId) } })
    } else {
        dbClient = await Client.create(dbClient)
    }

    return convertClient(dbClient);
}

export async function getAll(pageNumber, id, email, name, nationality, phoneNumber, birthDate) {
    const whereOptions = {}
    const size = 10

    if (id) whereOptions.id = id
    if (email) whereOptions.email = { [Op.like]: `%${email}%` }
    if (name) whereOptions.name = { [Op.like]: `%${name}%` }
    if (nationality) whereOptions.nationality = { [Op.like]: `%${nationality}%` }
    if (phoneNumber) whereOptions.phoneNumber = { [Op.like]: `%${name}%` }
    if (birthDate) whereOptions.birthDate = birthDate

    let findOptions = {
        where: whereOptions,
        order: [["name", "DESC"]]
    }
    if (pageNumber) {
        findOptions = {
            ...findOptions,
            limit: size,
            offset: size * pageNumber
        }
    }
    const clients = await Client.findAll(findOptions)

    const totalElements = (await Client.count({ where: whereOptions }))
    const result = {
        content: clients.map(client => convertClient(client)),
        totalPages: Math.ceil(totalElements / size),
        totalElements: totalElements
    }
    return result
}

export async function getById(id) {
    const dbClient = await Client.findByPk(id)
    if (!dbClient)
        throw new RequestError(new Error(), `No se encontró el cliente con identficacion >${id}<.`, 419);
    return convertClient(dbClient);
}