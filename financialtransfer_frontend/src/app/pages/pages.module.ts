import { CommonModule, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FinancialtransferModule } from './financialtransfer/shared/financialtransfer.module';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

registerLocaleData(ptBr);
@NgModule({
    declarations: [],
    imports: [
        FinancialtransferModule,
        CommonModule,
        FormsModule,
        ButtonModule,
        InputTextModule,
        TableModule,

    ],
    providers: [
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
        { provide: LOCALE_ID, useValue: 'pt' },
    ],
})
export class PagesModule { }
