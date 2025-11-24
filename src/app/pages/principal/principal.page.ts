import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Planeta as PlanetaApi } from 'src/app/interfaces/interfaces';
import { Planetas } from 'src/app/services/planetas';
import { ComponentesModule } from 'src/app/componentes/componentes-module';

import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  imports: [IonicModule, RouterLink, CommonModule, ComponentesModule],
})
export class PrincipalPage implements OnInit {
  planetasRecientes: PlanetaApi[] = [];

  constructor(private servicioPlanetas: Planetas) {}

  ngOnInit() {
    this.servicioPlanetas.getDatos().subscribe((resp: PlanetaApi[]) => {
      this.planetasRecientes = resp as PlanetaApi[];
    });
  }
}
