import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './components/home/home.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'nueva-tarea', component: TareaComponent },
{ path: 'about', component: AboutComponent },
{ path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APPROUTES = [HomeComponent, TareaComponent];

