import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';
import { Planet } from '../../planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})

export class PlanetsComponent implements OnInit {

  planets: Planet[];
  planetsMemory: Planet[] = []
  listSize = 10;
  p:number;


  constructor(
    private planetService: PlanetsService,
  ) { }

  ngOnInit() {
    this.getPlanets();
    this.planetsMemory = this.planets;
  }

  getPlanets() {
    if (this.planetService.planetsListStorage === undefined) {
      this.planets = this.planetService.planetList()
    } else {
      this.planets = this.planetService.planetsListStorage;
    }
;
  }
  
  setlistSize(num: number) {
    this.listSize = num;
  }
}