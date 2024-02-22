import { RequestError } from "./error/ErrorHandler";
import { ClientModel } from "../models/ClientModel";
import { convertClient, unconvertClient } from "../converters/ClientConverter";
import { FindOptions, Op, WhereOptions } from "sequelize";
import { PageableModel } from "../models/PageableModel";
import Client from "../database/models/Client";

export async function saveUpdate(client: ClientModel, clientId?: number): Promise<ClientModel> {
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
    let dbClient: any | null = null;
    if (clientId) {
        dbClient = await Client.findByPk(clientId)
        if (!dbClient)
            throw new RequestError(new Error(), "No se encontró el cliente a modificar.", 419);
    }
    dbClient = unconvertClient(client, dbClient);

    if (clientId) {
        await Client.update(dbClient.dataValues, { where: { id: clientId } })
    } else {
        dbClient = await Client.create(dbClient.dataValues)
    }

    return convertClient(dbClient);
}

export async function getAll(pageNumber: number, id?: number, email?: string, name?: string, nationality?: string, phoneNumber?: number, birthDate?: Date): Promise<PageableModel<ClientModel>> {
    const whereOptions: WhereOptions<any> = {}
    const size: number = 10

    if (id) whereOptions.id = id
    if (email) whereOptions.email = { [Op.like]: `%${email}%` }
    if (name) whereOptions.name = { [Op.like]: `%${name}%` }
    if (nationality) whereOptions.nationality = { [Op.like]: `%${nationality}%` }
    if (phoneNumber) whereOptions.phoneNumber = phoneNumber
    if (birthDate) whereOptions.birthDate = birthDate

    let findOptions: FindOptions<any> = {
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
    const clients: any[] = await Client.findAll(findOptions)

    const totalElements = (await Client.count({ where: whereOptions }))
    console.log("estoy aca!!!")
    const result: PageableModel<ClientModel> = {
        // content: clients.map(client => convertClient(client)),
        // totalPages: Math.ceil(totalElements / size),
        // totalElements: totalElements
    }
    return null
}

export async function getById(id: number): Promise<ClientModel> {
    const dbClient = await Client.findByPk(id)
    if (!dbClient)
        throw new RequestError(new Error(), `No se encontró el cliente con identficacion >${id}<.`, 419);
    return convertClient(dbClient);
}