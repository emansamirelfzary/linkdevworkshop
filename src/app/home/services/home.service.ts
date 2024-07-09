import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  bannerUrl="https://api.npoint.io/fee177346e7875554413"

  constructor(private _hhtpClient:HttpClient) { }

  getBanner():Observable<any>{
    return this._hhtpClient.get(`${this.bannerUrl}`)
  }
}
