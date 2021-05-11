import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriterionPage } from './criterion.page';

const routes: Routes = [
  {
    path: '',
    component: CriterionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriterionPageRoutingModule {}
