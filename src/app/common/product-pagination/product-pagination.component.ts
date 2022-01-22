import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-pagination',
  templateUrl: './product-pagination.component.html',
  styleUrls: ['./product-pagination.component.scss']
})
export class ProductPaginationComponent implements OnInit {

  @Input() productListPagination: Product[] = [new Product];

  constructor() { }

  ngOnInit(): void {
  }

}
