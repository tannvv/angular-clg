import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterNgForComponent } from './filter-ng-for/filter-ng-for.component';
import { VnDataComponent } from './vn-data/vn-data.component';
import { HighLightDirective } from './Directives/high-light.directive';
import { AboutComponent } from './about/about.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataComponent } from './get-data/get-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterNgForComponent,
    VnDataComponent,
    HighLightDirective,
    AboutComponent,
    DrivenFormComponent,
    ReactiveFormComponent,
    GetDataComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
