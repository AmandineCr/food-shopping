import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodFactsDetailsPageRoutingModule } from './food-facts-details-routing.module';

import { FoodFactsDetailsPage } from './food-facts-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodFactsDetailsPageRoutingModule
  ],
  declarations: [FoodFactsDetailsPage]
})
export class FoodFactsDetailsPageModule {}
