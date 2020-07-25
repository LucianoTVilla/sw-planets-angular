import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Planet } from '../planet';
import { Observable } from 'rxjs';

@Injectable()
export class PlanetsService {
  planetsList: Array<Planet>;
  planetsListStorage: Array<Planet>;

  constructor(private http: HttpClient) {
    this.getJSON(1).subscribe(data => {
      return data;
    });
  }
  public getJSON(id): Observable<any> {
    return this.http.get(`https://swapi.dev/api/planets/?page=${id}`)
  };

  public planetList() {
    const planets: Array<Planet> = [];
    const page = [1, 2, 3, 4, 5, 6, 7]
    page.forEach(el => {
      this.getJSON(el).subscribe(data => {
        data.results.forEach(element => {
          planets.push(element);
          this.sortPlanet(planets);
        });
      });
    });
    this.planetsList = planets;
    this.planetsListStorage = planets;
    return planets;
  }
  sortPlanet(array) {
    let arr = array.sort((a, b) => (a.url > b.url) ? -1 : 1);
    arr.sort((a, b) => (a.url.length > b.url.length) ? 1 : -1);
    return arr;
  }
}
