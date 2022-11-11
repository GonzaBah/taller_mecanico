import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaHoraPage } from './reserva-hora.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaHoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaHoraPageRoutingModule {}
