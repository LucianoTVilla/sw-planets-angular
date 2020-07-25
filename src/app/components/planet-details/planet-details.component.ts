import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../../planet';
import { PlanetsService } from '../../services/planets.service';
import { AppComponent } from '../../app.component';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  @Input()
  detailPlanetID: number;
  appComponent: AppComponent;

  constructor(
    private planetService: PlanetsService,
    private route: ActivatedRoute
  ) { }

  planetList =  this.planetService.planetsList;
  planet:Planet;

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      let num = parseInt(param.get('id')) - 1;
      if (this.planetList === undefined) {
        this.planetList =  this.planetService.planetList();
      }
      this.planet = this.planetList[num]
    });
  }
}