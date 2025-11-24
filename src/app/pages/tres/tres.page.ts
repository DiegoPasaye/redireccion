import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tres',
  templateUrl: './tres.page.html',
  styleUrls: ['./tres.page.scss'],
  imports: [IonicModule, RouterLink]
})
export class TresPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
