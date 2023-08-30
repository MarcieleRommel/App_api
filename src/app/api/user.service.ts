import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private url: string = "https://api.adviceslip.com/"
  private options: any = { headers: new HttpHeaders({ 'Content-type': 'application/json; charset=UTF-8' }) };

  // monta o link e pega os dados
  constructor(private HTTP: HttpClient) { }
  //metodo para pegar os dados GET
  // colocar o path aqui
  getData() {
    return this.HTTP.get(`${this.url}advice`)
  }

}
