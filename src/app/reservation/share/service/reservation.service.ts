import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url = environment.baseUrl + '/reservations';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Reservation[]>(this.url);
  }

  save(reservation: Reservation) {
    return this.http.post(this.url, reservation);
  }

  update(id: number, reservation: Reservation) {
    return this.http.put(this.url + '/' + id, reservation);
  }

  findById(id: number) {
    return this.http.get<Reservation>(this.url + '/' + id);
  }
}
