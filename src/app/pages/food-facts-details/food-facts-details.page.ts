import {foodFactService} from '../../services/food-fact.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from "../../Model/product.interface";

@Component({
  selector: 'app-food-facts-details',
  templateUrl: './food-facts-details.page.html',
  styleUrls: ['./food-facts-details.page.scss'],
})
export class FoodFactsDetailsPage implements OnInit {
  product: Product;

  /**
   * Constructor of our details page
   * @param activatedRoute Information about the route we are on
   * @param foodFactService The movie Service to get data
   */
  constructor(private activatedRoute: ActivatedRoute,
              private foodFactService: foodFactService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      // Get the ID that was passed with the URL
      this.getProduct(params.get('id'));
    })
  }

  getProduct(id: string): void {
    this.foodFactService.getDetails(id).subscribe(product => {
      this.product = product;
    });
  }
}
