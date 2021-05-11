import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodFactsPage } from './food-facts.page';

const routes: Routes = [
  {
    path: '',
    component: FoodFactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodFactsPageRoutingModule {}
