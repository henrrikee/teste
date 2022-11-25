import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialtransferFormComponent } from '../form/financialtransfer-form.component';
import { FinancialtransferListComponent } from '../list/financialtransfer-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'list' },
    { path: 'list', component: FinancialtransferListComponent },
    { path: 'form', component: FinancialtransferFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FinancialtransferRoutingModule { }