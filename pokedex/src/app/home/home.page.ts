import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  pokemones: any = [];
  constructor( private pokeservice: PokeapiService) {}
  ngOnInit(){
    this.pokeservice.pokemones().subscribe((data: any) => {
      this.pokemones = data.results;
      console.log(data.results);
    });
  }
}
