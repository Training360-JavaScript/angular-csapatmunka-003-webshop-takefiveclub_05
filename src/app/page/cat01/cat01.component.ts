import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss'],
})
export class Cat01Component implements OnInit {
  products!: Product[];
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {
    // this.products$ = productService.getAll();
  }

  ngOnInit(): void {
    this.products$ = this.productService.getAll();   
  }
}
