import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product1 = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 2,
    unitPrice: 3,
    unitsInStock: 5,
  };

  product2 = {
    productId: 2,
    productName: 'Laptop',
    categoryId: 3,
    unitPrice: 5,
    unitsInStock: 15,
  };

  product3 = {
    productId: 3,
    productName: 'Mouse',
    categoryId: 4,
    unitPrice: 7,
    unitsInStock: 30,
  };

  product4 = {
    productId: 4,
    productName: 'Keyboard',
    categoryId: 5,
    unitPrice: 8,
    unitsInStock: 40,
  };

  product5 = {
    productId: 5,
    productName: 'Camera',
    categoryId: 6,
    unitPrice: 12,
    unitsInStock: 60,
  };

  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];

  constructor() {}

  ngOnInit(): void {}
}
