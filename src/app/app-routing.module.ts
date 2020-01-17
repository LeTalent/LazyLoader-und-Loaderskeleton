import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/general/contact/contact.module').then(
        mod => mod.ContactModule
      )
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/general/about/about.module').then(
        module => module.AboutModule
      )
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./modules/general/signin/signin.module').then(
        module => module.SigninModule
      )
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
