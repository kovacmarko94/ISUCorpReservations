import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = environment.baseUrl + '/contacts';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.url);
  }

  save(contact: any) {
    return this.http.post(this.url, contact);
  }
}
