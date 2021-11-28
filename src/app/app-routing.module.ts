import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'user-cad',
    loadChildren: () => import('./user-cad/user-cad.module').then( m => m.UserCadPageModule)
  },
  {
    path: 'tela-cad',
    loadChildren: () => import('./tela-cad/tela-cad.module').then( m => m.TelaCadPageModule)
  },
  {
    path: 'subre',
    loadChildren: () => import('./subre/subre.module').then( m => m.SubrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
