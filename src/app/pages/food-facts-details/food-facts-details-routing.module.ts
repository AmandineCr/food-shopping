import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodFactsDetailsPage } from './food-facts-details.page';

const routes: Routes = [
  {
    path: '',
    component: FoodFactsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodFactsDetailsPageRoutingModule {}
