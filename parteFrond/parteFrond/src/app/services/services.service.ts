import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private HttpClient: HttpClient) {}
  public zapasData = {
    id: '',
    marca: '',
    modelo: '',
    precio: '',
    imagen: '',
  };

  public clearZapa() {
    this.zapasData = {
      id: '',
      marca: '',
      modelo: '',
      precio: '',
      imagen: '',
    };
  }

  //adidas

  public adidasData = {
    id: '',
    marca: '',
    modelo: '',
    precio: '',
    imagen: '',
  };

  public clearAdidas() {
    this.adidasData = {
      id: '',
      marca: '',
      modelo: '',
      precio: '',
      imagen: '',
    };
  }

  public editItem(item: any) {
    this.zapasData = item;
  }

  public getZapas() {
    return this.HttpClient.get('http://localhost:3000/Nike');
  }

  public postZapa(newZapa: any) {
    return this.HttpClient.post('http://localhost:3000/Nike', newZapa);
  }

  public putZapa(zapaID: any, editedZapa: any) {
    return this.HttpClient.put(
      'http://localhost:3000/Nike/' + zapaID,
      editedZapa
    );
  }

  public deleteZapa(zapaID: any) {
    return this.HttpClient.delete('http://localhost:3000/Nike/' + zapaID);
  }

  //adidas

  public editItems(items: any) {
    this.adidasData = items;
  }

  public getAdidas() {
    return this.HttpClient.get('http://localhost:3000/adidas');
  }

  public postAdidas(newAdidas: any) {
    return this.HttpClient.post('http://localhost:3000/adidas', newAdidas);
  }

  public putAdidas(adidasID: any, editedAdidas: any) {
    return this.HttpClient.put(
      'http://localhost:3000/adidas/' + adidasID,
      editedAdidas
    );
  }

  public deleteAdidas(adidasID: any) {
    return this.HttpClient.delete('http://localhost:3000/adidas/' + adidasID);
  }
}
