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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    YearPageComponent,
    DetailComponent,
    HomeComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
