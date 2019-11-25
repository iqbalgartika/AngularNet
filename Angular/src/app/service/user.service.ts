import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  readonly rootURI = 'http://localhost:5000/api'

  login(formData) {
    return this.http.post(this.rootURI + '/ApplicationUser/Login', formData)
  }
}
