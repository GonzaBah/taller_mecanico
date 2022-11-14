import { Component, OnInit } from '@angular/core';
import { SqliteService } from 'src/app/services/sqlite.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {
  servicios: any[] = [];

  constructor(private dbService: SqliteService) { }

  ngOnInit() {
    this.dbService.dbState().subscribe(res => {
      if (res) {
        this.dbService.fetchServices().subscribe(item => {
          this.servicios = item;
        }
        )

      }
    })
  }

}
