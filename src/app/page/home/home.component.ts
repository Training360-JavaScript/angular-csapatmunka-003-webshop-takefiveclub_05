import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // productsFeatured: Product[];
  products: Product[];

  constructor(productService: ProductService) {
    // this.productsFeatured =  productService.list.filter(p => p.featured === true);
    this.products = productService.getAll();
   }

  ngOnInit(): void {
  }

}
