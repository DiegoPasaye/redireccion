import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'principal',
    loadComponent: () => import('./pages/principal/principal.page').then(c => c.PrincipalPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dos',
    loadComponent: () => import('./pages/dos/dos.page').then( m => m.DosPage)
  },
  {
    path: 'tres',
    loadComponent: () => import('./pages/tres/tres.page').then( m => m.TresPage)
  },
  {
    path: 'planetas',
    loadComponent: () => import('./pages/planetas/planetas.page').then( m => m.PlanetasPage)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
