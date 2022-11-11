import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaEmpleadoPageRoutingModule } from './pagina-empleado-routing.module';

import { PaginaEmpleadoPage } from './pagina-empleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaEmpleadoPageRoutingModule
  ],
  declarations: [PaginaEmpleadoPage]
})
export class PaginaEmpleadoPageModule {}
