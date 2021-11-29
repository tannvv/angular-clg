import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
   private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOM_USERS = 'https://randomuser.me/api/?results=';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getComments(): Observable<any> {
    const url = this.REST_API_SERVER + '/comments';
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getUsers(amount : number): Observable<any>{
    return this.httpClient.get<any>(this.REST_API_SERVER_RANDOM_USERS + amount, this.httpOptions)
  }
}
