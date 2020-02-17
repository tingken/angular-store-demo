import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(
    private http : HttpClient
  ) { }

  addToCart(product){
    this.items.push(product);
  }

  clearCart(){
    this.items = [];
  }

  remove(product){
    this.items.splice(this.items.indexOf(product));
  }

  getCart(){
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}