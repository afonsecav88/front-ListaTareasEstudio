import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


// Importación de modulos para trabajar con formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Importación de Componentes
import { HomeComponent } from './components/home/home.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutComponent } from './components/about/about.component';


// Importación de los servicios

import { HttpClientModule } from '@angular/common/http';




// Declaracion de las rutas
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TareaComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
