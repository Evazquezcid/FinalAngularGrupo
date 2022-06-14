import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NikeComponent } from './pages/nike/nike.component';
import { AdidasComponent } from './pages/adidas/adidas.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZapascardComponent } from './pages/nike/components/zapascard/zapascard.component';
import { AdidasCardComponent } from './pages/adidas/components/adidas-card/adidas-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    FooterComponent,
    HomeComponent,
    NikeComponent,
    AdidasComponent,
    GestionComponent,
    ZapascardComponent,
    AdidasCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
