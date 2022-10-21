import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//componemts//
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// pages//
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PrestationsComponent } from './components/pages/prestations/prestations.component';
import { MonparcoursComponent } from './components/pages/monparcours/monparcours.component';
import { AstucesComponent } from './components/pages/astuces/astuces.component';
import { OutilsEtMethodesComponent } from './components/pages/outils-et-methodes/outils-et-methodes.component';

 


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AccueilComponent,
    ContactComponent,
    PrestationsComponent,
    NavbarComponent,
    MonparcoursComponent,
    AstucesComponent,
    OutilsEtMethodesComponent,
    
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
