
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'principal',
    redirectTo: 'pagina-principal',
    pathMatch: 'full'
  },
  {
    path: 'pagina-principal',
    loadChildren: () => import('./pages/pagina-principal/pagina-principal.module').then( m => m.PaginaPrincipalPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'editar-cuenta',
    loadChildren: () => import('./pages/editar-cuenta/editar-cuenta.module').then( m => m.EditarCuentaPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'billetera',
    loadChildren: () => import('./pages/billetera/billetera.module').then( m => m.BilleteraPageModule)
  },  {
    path: 'reserva-hora',
    loadChildren: () => import('./pages/reserva-hora/reserva-hora.module').then( m => m.ReservaHoraPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
