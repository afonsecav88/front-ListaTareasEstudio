import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './components/home/home.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { AboutComponent } from './components/about/about.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'edit', component: EditComponent },
{ path: 'edit/:id', component: EditComponent },
{ path: 'nueva-tarea', component: TareaComponent },
{ path: 'about', component: AboutComponent },
{ path: '**', redirectTo: 'home', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


