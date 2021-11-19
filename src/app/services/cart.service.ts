import { ToastrService } from 'ngx-toastr';
import { CartItems } from './../models/cartItems';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private toastrService: ToastrService) {}

  addToCart(product: Product) {
    let item = CartItems.find((c) => c.product.productId === product.productId);

    if (item) {
      item.quantity++;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;

      CartItems.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CartItems;
  }

  removeFromCart(product: Product) {
    let item: CartItem = CartItems.find(
      (c) => c.product.productId === product.productId
    );

    if (item.quantity > 1) {
      item.quantity--;
      this.toastrService.warning('Sepet güncellendi');
    } else {
      CartItems.splice(CartItems.indexOf(item), 1);
      this.toastrService.error(item.product.productName + ' sepetten silindi');
    }
  }
}
