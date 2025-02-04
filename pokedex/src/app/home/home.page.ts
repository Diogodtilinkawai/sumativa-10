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
  obtenerId(url: any)
  {
   const regex = /\/(\d+)\//;
    const match = url.match(regex);
    if (match)
    {
      return match[1];
    }
    else
    {
      return '';
    }
  }
  verDetalle(url: string)
  {
    const id=this.obtenerId(url);
    console.log(url);
    console.log(id);
    this.router.navigate(['/detalle',this.obtenerId(url)]);
  }
}
