import { CommonModule, registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { FinancialtransferFormComponent } from './pages/financialtransfer/form/financialtransfer-form.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { FinancialTransferService } from './shared/services/financialtransfer.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    FinancialtransferFormComponent,
  ],
  imports: [
    TableModule,
    FormsModule,
    HttpClientModule,
    NgxCurrencyModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
  ],
  providers: [FinancialTransferService,
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: LOCALE_ID, useValue: 'pt' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
