import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat03',
  templateUrl: './cat03.component.html',
  styleUrls: ['./cat03.component.scss'],
})
export class Cat03Component implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) {
    this.products = productService.getAll();
  }

  ngOnInit(): void {}
}
