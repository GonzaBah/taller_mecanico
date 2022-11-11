import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaHoraPageRoutingModule } from './reserva-hora-routing.module';

import { ReservaHoraPage } from './reserva-hora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaHoraPageRoutingModule
  ],
  declarations: [ReservaHoraPage]
})
export class ReservaHoraPageModule {}
