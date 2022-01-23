import { Product } from '../../model/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  keys: string[] = Object.keys(new Product());
  phrase: string = '';
  filterKey: string = '';

  constructor() {}

  ngOnInit(): void {}
}
