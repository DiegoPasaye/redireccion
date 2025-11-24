import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dos',
  templateUrl: './dos.page.html',
  styleUrls: ['./dos.page.scss'],
  imports: [IonicModule, RouterLink]
})
export class DosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
