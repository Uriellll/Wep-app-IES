import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { PopupComponent } from './welcome/popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplacePipe } from 'src/app/pipes/replace.pipe';
import { CoversionComponent } from './coversion/coversion.component';
import { PagesComponent } from './pages.component';
import { CalculateDateComponent } from './calculate-date/calculate-date.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    PopupComponent,
    ReplacePipe,
    CoversionComponent,
    PagesComponent,
    CalculateDateComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    PagesRoutingModule
  ]
})
export class PagesModule { }
