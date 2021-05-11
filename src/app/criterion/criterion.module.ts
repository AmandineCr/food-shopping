import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriterionPageRoutingModule } from './criterion-routing.module';

import { CriterionPage } from './criterion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriterionPageRoutingModule
  ],
  declarations: [CriterionPage]
})
export class CriterionPageModule {}
