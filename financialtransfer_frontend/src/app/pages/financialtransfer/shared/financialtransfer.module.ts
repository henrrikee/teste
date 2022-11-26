import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { FinancialtransferFormComponent } from '../form/financialtransfer-form.component';
import { FinancialtransferRoutingModule, routes} from './financialtransfer.module.routing';
import { NgxCurrencyModule } from 'ngx-currency';
import { TableModule } from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    FinancialtransferFormComponent,
    AppComponent

  ],

  exports: [
    AppComponent
  ],

  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    FinancialtransferRoutingModule,
    NgModule,
    NgxCurrencyModule,
    ButtonModule,
    InputTextModule,
    TableModule,
  ],
  providers: [ ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class FinancialtransferModule { }
