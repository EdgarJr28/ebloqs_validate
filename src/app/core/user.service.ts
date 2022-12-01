import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  server = environment.production


  validate(id: string) {

    let body = { code: id }
    console.log(body)
    return this.http.post(`${this.server}/user/validate/`, body);
  }


  getMail(id: string) {

    let body = { uid: id }
    console.log(body)
    return this.http.post(`${this.server}/user/mail/`, body);
  }


}