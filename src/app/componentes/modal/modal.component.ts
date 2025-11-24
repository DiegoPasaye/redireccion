import { Component, Input, OnInit } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { Planetas } from 'src/app/services/planetas';
// 'RespuestaPlanetasDB' ya no es necesaria
import { Planeta } from 'src/app/interfaces/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true, // <-- Este componente SÍ es Standalone
  imports: [IonicModule, CommonModule],
})
export class ModalComponent implements OnInit {
  @Input() id!: string;

  planeta: Planeta | null = null;

  constructor(
    private planetasService: Planetas,
    private modalCtrl: ModalController
  ) {}

  regresar() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    if (this.id) {
      this.planetasService.getDatosById(this.id).subscribe((respuesta) => {
        this.planeta = (respuesta as Planeta) || null;
      });
    }
  }
}
