import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  pokemones: any = [];
  constructor( private pokeservice: PokeapiService, private router:Router) {}
  ngOnInit(){
    this.pokeservice.pokemones().subscribe((data: any) => {
      this.pokemones = data.results;
      console.log(data.results);
    });
  }
  verDetalle(url: string)
  {
    // this.router.navigate(['/detalle']);
    console.log(url);
    this.pokeservice.pokemones().subscribe((data: any) => {
      console.log(data.results.find((element: { url: string; }) => element.url === url));
    });
    // return url;
  }
}
