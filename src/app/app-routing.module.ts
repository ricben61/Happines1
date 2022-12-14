import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { AstucesComponent } from './components/pages/astuces/astuces.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { MonparcoursComponent } from './components/pages/monparcours/monparcours.component';
import { OutilsEtMethodesComponent } from './components/pages/outils-et-methodes/outils-et-methodes.component';
import { PrestationsComponent } from './components/pages/prestations/prestations.component';


const routes: Routes = [

  { path: '', pathMatch: "full", redirectTo: '/accueil' },
  {
    path:'accueil', 
   component: AccueilComponent
  },
   {
    path:'monparcours',
    component:MonparcoursComponent
   },
   {
    path:'astuces',
    component:AstucesComponent
   },
   {
   path:'outils-et-methodes',
   component:OutilsEtMethodesComponent
  },
   {
    path:'contact',
    component:ContactComponent
   },
   
   {
    path:'prestations',
    component:PrestationsComponent
   },
   
   

]




@NgModule({
  imports: [RouterModule.forRoot(routes, {
    
    scrollPositionRestoration: 'enabled', //pour enlever la memoire scroll de la page et de permettre d'arriver en haut de page//
    anchorScrolling:'enabled',
    scrollOffset: [0, 64] // [x, y]
    
  }
    
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
