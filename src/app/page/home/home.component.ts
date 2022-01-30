import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // products: Product[];
  products$: Observable<Product[]> = this.productService.getAll();

  constructor(private productService: ProductService) {
    // this.products = productService.getAll();
  }

  ngOnInit(): void {}
}
