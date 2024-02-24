export function convertRoom(dbRoom, room) {
    if (!room)
        room = new {}
    room.id = dbRoom.id
    return room;
}

export function unconvertRoom(room) {
    let dbRoom = new {}
    if (room.id)
        dbRoom.id = room.id
    return dbRoom;
}