import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialtransferListComponent } from './financialtransfer/list/financialtransfer-list.component';

export const routes: Routes = [
    {
        path: '/financialtransfer',
        loadChildren: () => import('./financialtransfer/shared/financialtransfer.module')
            .then(module => module.FinancialtransferModule),
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }