import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FinancialtransferFormComponent } from './pages/financialtransfer/form/financialtransfer-form.component';

const routes: Routes = [
  {path: 'financialtransfer/form', component: FinancialtransferFormComponent},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'avaliacao';
}
