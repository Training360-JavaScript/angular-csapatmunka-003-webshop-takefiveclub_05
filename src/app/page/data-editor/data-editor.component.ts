import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { userInfo } from 'os';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {

  @Input() products: Product[] = [];
  keys: string[] = Object.keys(new Product());
  phrase: string = '';
  filterKey: string = '';

  newProduct = new Product();
  productsUrl: string = 'http://localhost:3000';
  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap((params) => this.productService.get(params['id']))
  );
  products$: Observable<Product[]> = this.activatedRoute.params.pipe(
    switchMap((params) => this.productService.getAll())
  );

  direction:string="asc";
  column:string="id";
  type:string | number="number";


  setSortParams(direction:string, column:string, type:string){
  this.direction = direction;
  this.column = column;
  this.type = type;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }

  onDelete(product: Product): void {
    if (!confirm('Are you sure to delete this product?')) {
      return;
    }
    this.productService
      .remove(product.id)
      .subscribe((event) => (this.products$ = this.productService.getAll()));
  }

  onUpdate(product: Product): void {
    this.productService
      .update(product)
      .subscribe((event) => (this.products$ = this.productService.getAll()));
  }

  onRestore(product: Product): void {
    this.productService
      .get(product.id)
      .subscribe((event) => (this.products$ = this.productService.getAll()));
  }

  onCreate(product: Product): void {
    this.productService
      .create(product)
      .subscribe((event) => (this.products$ = this.productService.getAll()));
  }

}
