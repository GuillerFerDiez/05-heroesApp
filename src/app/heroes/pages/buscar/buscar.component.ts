import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../heroe/interfaces/heroes.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})

export class BuscarComponent {
  termino: string = ''; // termino de busqueda
  heroes: Heroe[] = [];  // Ctrl + pto
  constructor(private heroesService: HeroesService) { }

  heroeNoEncontrado: boolean = true;

  buscando() {
    //this.heroesService.getHeroes().subscribe(heroes => this.heroes=heroes); 
    this.heroesService.getSugerencias(this.termino).subscribe(heroes => {
      if (heroes.length == 0) {
        this.heroeNoEncontrado = true;
      } else {
        this.heroeNoEncontrado = false;
      }
      this.heroes = heroes
    });
  }

  heroeSeleccionado!: Heroe | undefined;
  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    const heroe: Heroe = event.option.value;

    if (heroe === undefined) {
      this.heroeSeleccionado = undefined;
      return;
    }

    this.termino = heroe.superhero; //para que se vea en el input
    this.heroesService.getHeroesPorId(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado = heroe);
  }
}