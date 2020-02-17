import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  shipping;

  constructor(
    private route : ActivatedRoute,
    private cartService: CartService,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
    });
  }

  addToChart(){
    this.cartService.addToCart(this.product);
    this.getShippingPrices();
  }

  getShippingPrices(){
    this.shipping = this.cartService.getShippingPrices();
  }

  confirmShipping(){
    this.shipping = null;
  }

}