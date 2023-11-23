import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../heroe/interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  //Llamamos al servicio
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService) { }
  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(resp => {
      this.heroes = resp;
    });
  }
}