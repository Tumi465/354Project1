import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CausesComponent } from './Malaria/causes/causes.component';
import { TreatmentsComponent } from './Malaria/treatments/treatments.component';
import { StatisticsComponent } from './Malaria/statistics/statistics.component';
import { SymptomsComponent } from './Malaria/symptoms/symptoms.component';
import { HomeComponent } from './Malaria/home/home.component';
import{AboutComponent} from './Malaria/about/about.component';
import { from } from 'rxjs';
import { LogINComponent } from './log-in/log-in.component';
import { NavBarComponent } from './elements/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { DonationsComponent } from './Malaria/donations/donations.component';
import { ListsService } from './Malaria/donations/lists.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'log-in', component: LogINComponent},
  { path: 'Causes', component: CausesComponent},
  { path: 'Treatment', component: TreatmentsComponent},
  { path: 'Statistics', component: StatisticsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'Donations', component:DonationsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CausesComponent,
    TreatmentsComponent,
    StatisticsComponent,
    SymptomsComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    LogINComponent,
    DonationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes),
      FormsModule
      
    
  ],
  providers: [ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
