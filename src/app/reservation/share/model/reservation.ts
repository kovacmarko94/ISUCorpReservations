import { Contact } from "../../../share/model/contact";

export interface Reservation {
    id?: number,
    contact?: Contact,
    dateOfCreation: string,
    favorite?: boolean,
    htmlContent: string,
    ranking?: number
}