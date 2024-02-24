export function convertClient(dbClient, client) {
    if (!client)
        client = {}
    client.id = dbClient.id
    client.email = dbClient.email
    client.birthDate = dbClient.birthDate
    client.name = dbClient.name
    client.nationality = dbClient.nationality
    client.phoneNumber = dbClient.phoneNumber

    return client
}

export function unconvertClient(client, dbClient) {
    if (!dbClient)
        dbClient = {}
    if (client.id)
        dbClient.id = client.id
    if (client.email)
        dbClient.email = client.email
    if (client.birthDate)
        dbClient.birthDate = client.birthDate
    if (client.name)
        dbClient.name = client.name
    if (client.nationality)
        dbClient.nationality = client.nationality
    if (client.phoneNumber)
        dbClient.phoneNumber = client.phoneNumber
    return dbClient;
}