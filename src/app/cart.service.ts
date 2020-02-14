import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() { }

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
}