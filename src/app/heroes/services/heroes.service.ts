import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../pages/heroe/interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.baseUrl + '/heroes');
    // devuelve una colección [] del tipo Heroe. Ctrl + pto para el import
    // poner Observable<Heroe[]>  es opcional, queda más claro
  }

  getHeroesPorId(id: string): Observable<Heroe> {
    //return this.http.get<Heroe>('http://localhost:3000/heroes/'+ id)    
    return this.http.get<Heroe>(this.baseUrl + '/heroes/' + id);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    //http://localhost:3000/heroes?q=a&_limit=5
    //return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=5`);
    return this.http.get<Heroe[]>(this.baseUrl + '/heroes?q=' + termino + '&_limit=5');
  }

  agregarHeroe(heroe: Heroe): Observable<Heroe> { //recibe un heroe
    //return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
    return this.http.post<Heroe>(this.baseUrl + '/heroes/', heroe);
    //regresa un         <Heroe>  :Observable<Heroe>
  }

  actualizarHeroe(heroe: Heroe): Observable<Heroe> { //recibe un heroe
    //return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
    return this.http.put<Heroe>(this.baseUrl + '/heroes/' + heroe.id, heroe);
    //regresa un         <Heroe>  :Observable<Heroe>
  }

  borrarHeroe(id: string): Observable<any> { //recibe un id, no devuelve nada
    //return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`); 
    return this.http.delete<any>(this.baseUrl + '/heroes/' + id);
  }
}