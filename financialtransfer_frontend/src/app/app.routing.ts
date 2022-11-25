import { Routes } from '@angular/router';
import { FinancialtransferFormComponent } from './pages/financialtransfer/form/financialtransfer-form.component';
import { FinancialtransferListComponent } from './pages/financialtransfer/list/financialtransfer-list.component';

export const AppRoutes: Routes = [
  {
    path: '', component: FinancialtransferFormComponent,
    
  }
]