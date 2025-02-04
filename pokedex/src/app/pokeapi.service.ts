import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20';
  constructor( private http: HttpClient) { }
  pokemones(){
    return this.http.get(this.apiUrl);
  }
}
 