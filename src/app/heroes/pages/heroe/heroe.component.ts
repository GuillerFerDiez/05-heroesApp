import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from './interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }
  heroe!: Heroe;

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }

  ngOnInit(): void {
    //this.activatedRoute.params.subscribe(console.log);
    this.activatedRoute.params.subscribe(resp => console.log(resp));
    //console.log(this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params.pipe(
      delay(2000),
      switchMap(({ id }) => this.heroesService.getHeroesPorId(id))
    ).subscribe(heroe => this.heroe = heroe);
  }
}