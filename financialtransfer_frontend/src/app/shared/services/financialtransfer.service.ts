import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FinancialTransfer } from 'src/app/pages/financialtransfer/shared/financialtransfer-model';
import { environment } from '../environments/environment';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
}) 
export class FinancialTransferService  {
    

 url = '/financial_transfer'
 constructor(protected http: HttpClient) { }

  savee(data:any) {     
    return this.http.post(environment.backEndUrl + this.url, data );
  }

  GetTransfers() {     
    return this.http.get<any>(environment.backEndUrl + this.url);
  }

}
