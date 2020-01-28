import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { HttpClientModule }    from '@angular/common/http';
import { YearPageComponent } from './year-page/year-page.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { MyFilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AMainComponent } from './admin/a-main/a-main.component';
import { AYearComponent } from './admin/a-year/a-year.component';
import { AYearEditComponent } from './admin/a-year-edit/a-year-edit.component';
import { AItemEditComponent } from './admin/a-item-edit/a-item-edit.component';
import { FormsModule } from '@angular/forms';
import { AItemComponent } from './admin/a-item/a-item.component';
import { AItemAddComponent } from './admin/a-item-add/a-item-add.component';
import { FileUploadModule } from 'ng2-file-upload';

import { FormWizardModule } from 'angular2-wizard';
import { YearListComponent } from './year-list/year-list.component';

import { ServerAddr } from './server';
import { SafePipe } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    YearPageComponent,
    DetailComponent,
    HomeComponent,
    MyFilterPipe,
    AMainComponent,
    AYearComponent,
    AYearEditComponent,
    AItemEditComponent,
    AItemComponent,
    AItemAddComponent,
    YearListComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    FileUploadModule,
    FormWizardModule,
  ],
  providers: [ServerAddr,SafePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
