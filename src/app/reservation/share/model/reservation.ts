import { Contact } from "./contact";

export interface Reservation {
    id?: number,
    contact?: Contact,
    dateOfCreation: string,
    favorite?: boolean,
    htmlContent: string,
    ranking?: number
}