import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FinancialTransferService } from "src/app/shared/services/financialtransfer.service";
import { FinancialTransfer } from "../shared/financialtransfer-model";


@Component({
  selector: 'app-financialtransfer-form',
  templateUrl: './financialtransfer-form.component.html',
  styleUrls: ['./financialtransfer-form.component.scss']

})
export class FinancialtransferFormComponent implements OnInit {

  financialTransfer: FinancialTransfer = new FinancialTransfer;
  financialTransfers: FinancialTransfer[]=[];
  financialTransferTable: any;
  maxDate: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private financialTransferService: FinancialTransferService

  ) {}

  ngOnInit(): void {

    this.financialTransfer = this.newFinancialTransfer();
    this.maxDate = new Date(new Date().getTime()).toISOString().substring(0, 10);
    this.financialTransfer.transferDate = new Date(new Date().getTime()).toISOString().substring(0, 10);
    this.financialTransferService.GetTransfers().subscribe(respGet => {
      this.financialTransfers = respGet
    })
    
  }

  private newFinancialTransfer(): FinancialTransfer {
    const financialTransfer = new FinancialTransfer()
    return financialTransfer;
  }

  clean() {
    this.financialTransfer.appointmentDate = ''
    this.financialTransfer.rate = 0
    this.financialTransfer.sourceAccount = ''
    this.financialTransfer.targetAccount = ''
    this.financialTransfer.transferAmount = 0
    this.financialTransfer.transferDate = ''
  }

  actionBtnSave() {
    this.financialTransferService.savee(this.financialTransfer).subscribe(respSave => {
      this.financialTransferService.GetTransfers().subscribe(respGet => {
        this.financialTransfers = respGet
        this.clean()
        console.log("respSave", this.financialTransferTable)
        console.log("respGet", this.financialTransfers)
      })

    })

  }
}
