import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YearPageComponent } from './year-page/year-page.component';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'year', component: YearPageComponent },
  { path: 'detail', component: DetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
