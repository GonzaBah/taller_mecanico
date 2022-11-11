import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaEmpleadoPage } from './pagina-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaEmpleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaEmpleadoPageRoutingModule {}
