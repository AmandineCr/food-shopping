import {foodFactService, SearchType} from '../../services/food-fact.service';
import {Component, OnInit} from '@angular/core';
import {Product} from "../../Model/product.interface";
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-food-facts',
  templateUrl: './food-facts.page.html',
  styleUrls: ['./food-facts.page.scss'],
})
export class FoodFactsPage implements OnInit {
  products: Product[];
  originalProducts: Product[];
  nutrigradeSelected: string[] = [];
  nutrigradeOptions = ['a', 'b', 'c', 'd', 'e'];
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  /**
   * Constructor of our first page
   * @param foodFactService The food fact Service to get data
   * @param modalController
   */
  constructor(private foodFactService: foodFactService,
              public modalController: ModalController) {
  }

  ngOnInit() {

  }

  searchChanged($event: any) {
    // Call our service function which returns an Observable
    this.foodFactService.searchData(this.searchTerm, this.type).subscribe(response => {
      this.originalProducts = response.products
      this.filterNutrigrade();
    });
  }

  filterNutrigrade() {
    this.products = this.originalProducts.filter(product => {
      return !this.nutrigradeSelected.length || this.nutrigradeSelected.includes(product.nutriscore_grade)
    })
  }
}
