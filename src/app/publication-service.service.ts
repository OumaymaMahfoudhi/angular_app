import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { publication } from './publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationServiceService {


 



  private baseURL = "http://localhost:8080/createPublication";
  private baseUrl = "http://localhost:8080/publication";
  private baseurl = "http://localhost:8080/publication/{id}";


  

 
 
  constructor(private httpClient: HttpClient) { }
  
  getPublicationList(): Observable<publication[]>{
    return this.httpClient.get<publication[]>(`${this.baseUrl}`);
    
  }

  createPublication(publication: publication): Observable<publication>{
    console.log("eli tetb3ath",publication)
    return this.httpClient.post<publication>(`${this.baseURL}`, publication);

  }

  getPublicationById(id: number): Observable<publication>{
    return this.httpClient.get<publication>(`${this.baseUrl}/${id}`);

  }

  updatePublication(id: number, publication: publication): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, publication);
  }

  deletePublication(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}





