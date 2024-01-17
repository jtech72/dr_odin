import { APICore } from "../../helpers/api/apiCore";
import * as URL from "../../constants/endPoint"

const api = new APICore()

export function GetDesignation(){
    return api.get(URL.LIST_DESIGNATION)
}



export function GetZoneList(){
    return api.get(URL.GET_ZONES)
}