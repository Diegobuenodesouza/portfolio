import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { TrabalhoComponent } from './trabalho/trabalho.component';
import { ConhecimentoComponent } from './conhecimento/conhecimento.component';
import { ProjetosComponent } from './projetos/projetos.component';
;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ReferenciasComponent,
    TrabalhoComponent,
    ConhecimentoComponent,
    ProjetosComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
