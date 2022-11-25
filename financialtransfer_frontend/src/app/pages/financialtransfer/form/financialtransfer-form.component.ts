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
  financialTransfers: FinancialTransfer[] = [];
  financialTransferTable: any;
  maxDate: string = '';
  verifyButton: Boolean = true

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private financialTransferService: FinancialTransferService

  ) { }

  ngOnInit(): void {
    this.financialTransfer.rate = 0
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
  }

  resetValue() {
    this.financialTransfer.transferAmount = 0
    this.financialTransfer.rate = 0
  }

  rateCalculation() {
    let value = 0
    value = this.financialTransfer.transferAmount
    var now = new Date(this.financialTransfer.transferDate);
    var future = new Date(this.financialTransfer.appointmentDate);
    var diff = Math.abs(now.getTime() - future.getTime());
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    console.log(days)
    if (this.financialTransfer.transferAmount <= 1000 && days == 0) {
      this.financialTransfer.rate = ((value / 100) * 3) + 3
      console.log("Valor", this.financialTransfer.transferAmount)
    } else if (this.financialTransfer.transferAmount > 1000 && this.financialTransfer.transferAmount <= 2000 && days <= 10) {
      this.financialTransfer.rate = value + 12
    } else if (this.financialTransfer.transferAmount > 2000) {
      if (days > 10 && days < 20) {
        this.financialTransfer.rate = (value / 100) * 8.2
      } else if (days > 20 && days < 30) {
        this.financialTransfer.rate = (value / 100) * 6.9
      } else if (days > 30 && days < 40) {
        this.financialTransfer.rate = (value / 100) * 4.7
      } else if (days > 40) {
        this.financialTransfer.rate = (value / 100) * 1.7
      } else if ((days < 10)) {
        alert('Erro: Não existe taxa aplicável para esta transação!');
        this.financialTransfer.transferAmount = 0
        this.financialTransfer.appointmentDate = ''
      }
    } 
  }

  verificationSourceAccount() {
    console.log(this.financialTransfer.sourceAccount.length)
    if (this.financialTransfer.sourceAccount.length != 6) {
      alert('Erro: O número da conta de origem deve conter 6 números!');
      this.financialTransfer.sourceAccount = ''
    }
  }

  verificationTargetAccount() {
    console.log(this.financialTransfer.targetAccount.length)
    if (this.financialTransfer.targetAccount.length != 6) {
      alert('Erro: O número da conta de destino deve conter 6 números!');
      this.financialTransfer.targetAccount = ''
    }
  }

  actionBtnSave() {
    if (this.financialTransfer.transferAmount == 0) {
      alert("Erro! Valor da transferência precisa ser diferente de 0!")
    }
    this.financialTransferService.savee(this.financialTransfer).subscribe(respSave => {
      this.clean()
      this.financialTransferService.GetTransfers().subscribe(respGet => {
        this.financialTransfers = respGet
        alert("Transferência salva com sucesso!")
        console.log("respSave", this.financialTransferTable)
        console.log("respGet", this.financialTransfers)
      })

    })
  }
}

