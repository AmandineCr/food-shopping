import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodFactsPageRoutingModule } from './food-facts-routing.module';

import { FoodFactsPage } from './food-facts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodFactsPageRoutingModule
  ],
  declarations: [FoodFactsPage]
})
export class FoodFactsPageModule {}
