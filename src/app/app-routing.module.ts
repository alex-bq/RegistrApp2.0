import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';
import { NotFoundPage } from './not-found/not-found.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule),
    canActivate:[NoIngresadoGuard]

  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[NoIngresadoGuard]

  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [IngresadoGuard]

  },
  {
    path: '**',
    component: NotFoundPage,
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
