import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss'],
})
export class Cat02Component implements OnInit {
  // products!: Product[];
  products$!: Observable<Product[]>;
  
  constructor(private productService: ProductService) {
    // this.products = productService.getAll();
  }

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }
}
