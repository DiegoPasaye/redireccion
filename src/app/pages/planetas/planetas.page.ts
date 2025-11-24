import { Component, OnInit } from '@angular/core';
import { Planeta as PlanetaApi } from 'src/app/interfaces/interfaces';
import { Planetas } from 'src/app/services/planetas';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/componentes/modal/modal.component';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.page.html',
  styleUrls: ['./planetas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class PlanetasPage implements OnInit {
  planetasRecientes: PlanetaApi[] = [];

  constructor(
    private servicioPlanetas: Planetas,
    private modalCtrl: ModalController
  ) {}

  async verDetalle(planeta: PlanetaApi) {
    if (!planeta.id) {
      console.error('El planeta no tiene ID de Firestore', planeta);
      return;
    }

    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: { id: planeta.id },
    });
    modal.present();
  }

  ngOnInit() {
    this.servicioPlanetas.getDatos().subscribe((resp) => {
      this.planetasRecientes = resp as PlanetaApi[];
      console.log('Planetas desde Firestore', this.planetasRecientes);
    });
  }
}
