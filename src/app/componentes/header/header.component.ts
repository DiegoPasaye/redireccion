import { Component, Input, OnInit } from '@angular/core';

interface Elemento{
  icono: string;
  nombre: string;
  ruta: string;
}

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  elementos: Elemento[] = [
    {
      icono: 'newspaper-outline',
      nombre: 'Inicio',
      ruta: '/principal'
    },
    {
      icono: 'newspaper-outline',
      nombre: 'Planetas',
      ruta: '/planetas'
    },
  ]
  @Input() titulo="planetas"

  constructor() { }

  ngOnInit() {}

}
