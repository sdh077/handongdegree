import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YearPageComponent } from './year-page/year-page.component';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AMainComponent } from './admin/a-main/a-main.component';
import { AYearComponent } from './admin/a-year/a-year.component';
import { AYearEditComponent } from './admin/a-year-edit/a-year-edit.component';
import { AItemEditComponent } from './admin/a-item-edit/a-item-edit.component';
import { AItemComponent } from './admin/a-item/a-item.component';
import { AItemAddComponent } from './admin/a-item-add/a-item-add.component';
import {YearListComponent} from './year-list/year-list.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', component: HomeComponent },

    ]
  },
  {
    path: 'year/detail/:no/:id/:category', component: DetailComponent
  },
  {
    path: 'year', component: YearPageComponent
  },
  {
    path: 'admin',
    component: AMainComponent,
    children: [
      {
        path: '', component: AYearComponent
      },
      {
        path: 'year', component: AYearComponent
      },
      {
        path: 'year-edit/:no', component: AYearEditComponent
      },
      {
        path: 'item/:no', component: AItemComponent
      },
      {
        path: 'item-add/:no', component: AItemAddComponent
      },
      {
        path: 'item-edit/:no', component: AItemEditComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
