import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private HttpClient:HttpClient)  { }
  public zapasData = {
    "id":"",
    "marca":"",
    "modelo":"",
    "precio":"",
    "imagen":""
  }

  public getZapas () {
    return this.HttpClient.get("http://localhost:3000/Nike")
  }



}
