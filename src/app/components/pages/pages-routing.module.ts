import { FormComponent } from './form/form.component';
import { CalculateDateComponent } from './calculate-date/calculate-date.component';
import { PagesComponent } from './pages.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoversionComponent } from './coversion/coversion.component';

const routes: Routes = [
  {path:'', component: PagesComponent,children:[
    {path: '', component: WelcomeComponent},
    {path: 'conversiones',component:CoversionComponent},
    {path:'fechas', component:CalculateDateComponent},
    {path:'formulario', component:FormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
