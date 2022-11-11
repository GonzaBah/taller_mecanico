import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-hora',
  templateUrl: './reserva-hora.page.html',
  styleUrls: ['./reserva-hora.page.scss'],
})
export class ReservaHoraPage implements OnInit {

  hoy: Date;

  constructor() { 
    this.hoy = new Date();
    this.hoy.toLocaleString();
  }

  ngOnInit() {
  }

}
