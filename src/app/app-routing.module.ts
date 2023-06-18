import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
 
  {path:'', component: HomeComponent,
  loadChildren:() =>import('./home/home.module').then(x=>x.HomeModule)},

  {path:'contact', component: ContactComponent,

  loadChildren:() =>import('./contact/contact.module').then(x=>x.ContactModule)},

  {path:'about', component:AboutComponent,
  
  loadChildren:() =>import('./about/about.module').then(x=>x.AboutModule)},


  {path:'services', component: ServicesComponent,

  loadChildren:() =>import('./services/services.module').then(x=>x.ServicesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
