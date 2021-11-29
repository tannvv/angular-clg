import { GetDataComponent } from './get-data/get-data.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { AboutComponent } from './about/about.component';
import { VnDataComponent } from './vn-data/vn-data.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'vn-data', component:VnDataComponent},
  {path : 'about',component:AboutComponent},
  {path : 'driven-form', component:DrivenFormComponent},
  {path : 'reactive-form', component:ReactiveFormComponent},
  {path: 'get-data', component:GetDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
