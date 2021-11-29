import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FilterNgForComponent } from './filter-ng-for/filter-ng-for.component';
import { VnDataComponent } from './vn-data/vn-data.component';
import { HighLightDirective } from './Directives/high-light.directive';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterNgForComponent,
    VnDataComponent,
    HighLightDirective,
    AboutComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
