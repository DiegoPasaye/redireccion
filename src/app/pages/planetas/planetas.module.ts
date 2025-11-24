import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PlanetasPageRoutingModule } from './planetas-routing.module';
import { PlanetasPage } from './planetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanetasPageRoutingModule
  ],
  declarations: [PlanetasPage]
})
export class PlanetasPageModule {}
