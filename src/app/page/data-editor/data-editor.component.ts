import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  productsUrl: string = 'http://localhost:3000';
  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap((params) => this.productService.get(params['id']))
  );
  products$: Observable<Product[]> = this.activatedRoute.params.pipe(
    switchMap((params) => this.productService.getAll())
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }

  // onDelete(product: Product): void {
  //   this.productService
  //     .remove(product.id)
  //     .subscribe((event) => (this.eventList$ = this.productService.getAll()));
  // }
}
