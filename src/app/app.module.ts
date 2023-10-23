import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContenidoComponent } from './Components/contenido/contenido.component';
import { RedesComponent } from './Components/redes/redes.component';
import { CajaDivisoraComponent } from './Components/caja-divisora/caja-divisora.component';
import { ParticlesComponent } from './Components/particles/particles.component';
import { NgParticlesModule } from "ng-particles";
import { EducacionComponent } from './Components/educacion/educacion.component';
import { DivisorProyectosComponent } from './Components/divisor-proyectos/divisor-proyectos.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenidoComponent,
    RedesComponent,
    CajaDivisoraComponent,
    ParticlesComponent,
    EducacionComponent,
    DivisorProyectosComponent,
    ProyectosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
