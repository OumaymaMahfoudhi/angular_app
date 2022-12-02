import {  HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

import { publication } from './publication';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})


export class LoginuserService {
  [x: string]: any;

  private baseUrl="http://localhost:8080/user/login";
  
  constructor(private httpClient:HttpClient) {}

  LoginUser(user: User):Observable<User>{
    console.log(this.httpClient.post<User>(`${this.baseUrl}`,user))
      
      return this.httpClient.post<User>(`${this.baseUrl}`,user)
   

      
  }
  
  
}