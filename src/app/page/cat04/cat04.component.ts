import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat04',
  templateUrl: './cat04.component.html',
  styleUrls: ['./cat04.component.scss'],
})
export class Cat04Component implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) {
    this.products = productService.getAll();
  }

  ngOnInit(): void {}
}
