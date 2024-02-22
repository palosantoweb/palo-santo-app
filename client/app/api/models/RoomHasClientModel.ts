import { ClientModel } from "./ClientModel"
import { RoomModel } from "./RoomModel"

export class RoomHasClientModel {
    declare id?: number
    declare room?: RoomModel
    declare client?: ClientModel
    declare status?: string
}