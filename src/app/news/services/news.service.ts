import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl="https://api.npoint.io/"

  constructor(private _httpClient:HttpClient) { }

  getNews():Observable<any>{
    return this._httpClient.get(`${this.baseUrl}d275425a434e02acf2f7`)
  }

  getCategory():Observable<any>{
    return this._httpClient.get(`${this.baseUrl}91298d970c27e9a06518`)
  }

  getNewsDetails(index:number):Observable<any>{
    return this._httpClient.get(`${this.baseUrl}d275425a434e02acf2f7/News/${index}`)
  }
}
