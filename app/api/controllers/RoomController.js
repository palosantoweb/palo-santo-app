import { convertRoomHasClient, unconvertRoomHasClient } from '../converters/RoomHasClientConverter';
import RoomHasClient from '../database/models/RoomHasClient';

export async function assignRoomToClient(rhc) {
  // Valido datos
  if (!rhc.client) {
    throw new Error('Debe enviar los datos del cliente.');
  }
  if (!rhc.room || !rhc.room.id) {
    throw new Error('Debe enviar los datos de la habitacion.')
  }

  // Corroboro que la habitacion no se encuentre ocupada
  let dbRhc = await RoomHasClient.findOne({
    where: {
      status: 'OCCUPIED',
      room: {
        id: rhc.room.id,
      },
    },
  });
  if (dbRhc)
    throw new Error('La habitacion se encuentra ocupada.')

  // Convierto y persisto la entidad
  dbRhc = unconvertRoomHasClient(rhc);
  dbRhc = await RoomHasClient.create(dbRhc);

  return convertRoomHasClient(dbRhc);
}
