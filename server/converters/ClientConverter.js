"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unconvertClient = exports.convertClient = void 0;
const Client_1 = require("../database/entities/Client");
const ClientModel_1 = require("../models/ClientModel");
function convertClient(dbClient, client) {
    if (!client)
        client = new ClientModel_1.ClientModel();
    client.id = dbClient.id;
    client.email = dbClient.email;
    client.birthDate = dbClient.birthDate;
    client.name = dbClient.name;
    client.nationality = dbClient.nationality;
    client.phoneNumber = dbClient.phoneNumber;
    return client;
}
exports.convertClient = convertClient;
function unconvertClient(client, dbClient) {
    if (!dbClient)
        dbClient = new Client_1.Client();
    if (client.id)
        dbClient.id = client.id;
    if (client.email)
        dbClient.email = client.email;
    if (client.birthDate)
        dbClient.birthDate = client.birthDate;
    if (client.name)
        dbClient.name = client.name;
    if (client.nationality)
        dbClient.nationality = client.nationality;
    if (client.phoneNumber)
        dbClient.phoneNumber = client.phoneNumber;
    return dbClient;
}
exports.unconvertClient = unconvertClient;
//# sourceMappingURL=ClientConverter.js.map