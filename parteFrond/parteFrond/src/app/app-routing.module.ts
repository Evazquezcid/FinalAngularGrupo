import { GestionComponent } from './pages/gestion/gestion.component';
import { NikeComponent } from './pages/nike/nike.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdidasComponent } from './pages/adidas/adidas.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"nike",component:NikeComponent},
  {path:"adidas",component:AdidasComponent},
  {path:"gestion",component:GestionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
