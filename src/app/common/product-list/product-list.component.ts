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

  direction:string="asc";
  column:string="id";
  type:string | number="number";


  setSortParams(direction:string, column:string, type:string){
  this.direction = direction;
  let key = this.keys.find(key => key.toLowerCase() === column.toLowerCase()) || 'id';
  this.column = key;
  this.type = typeof Product[key];
  }

  constructor() {}

  ngOnInit(): void {}
}
