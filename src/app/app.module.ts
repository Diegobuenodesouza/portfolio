import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { TrabalhoComponent } from './trabalho/trabalho.component';
;

@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    HomeComponent,
    AboutMeComponent,
    ReferenciasComponent,
    TrabalhoComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
