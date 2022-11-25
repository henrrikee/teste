import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { FinancialtransferFormComponent } from '../form/financialtransfer-form.component';
import { FinancialtransferListComponent } from '../list/financialtransfer-list.component';
import { FinancialtransferRoutingModule, routes} from './financialtransfer.module.routing';
import { NgxCurrencyModule } from 'ngx-currency';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    FinancialtransferListComponent,
    FinancialtransferFormComponent,
    AppComponent

  ],

  exports: [
    AppComponent
  ],

  imports: [
    TableModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    FinancialtransferRoutingModule,
    NgModule,
    NgxCurrencyModule,
  ],
  providers: [ ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class FinancialtransferModule { }
