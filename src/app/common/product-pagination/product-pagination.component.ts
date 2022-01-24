import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-pagination',
  templateUrl: './product-pagination.component.html',
  styleUrls: ['./product-pagination.component.scss'],
})
export class ProductPaginationComponent implements OnInit {

  @Input() products: Product[] = [new Product()];
  @Input() id: string = 'carouselId';

  public screenWidth: number = 0;
  public subLength: number = 5;
  public carouselList: Array<Product[]> = [[new Product()]];

  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.setSublength();
    this.carouselList = this.listToMatrix(this.products, this.subLength);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);

    if (this.screenWidth > 1024 && this.subLength != 5) {
      this.ngOnInit();
      return;
    }

    if (this.screenWidth < 768 && this.subLength != 1) {
      this.ngOnInit();
      return;
    }

    if (this.subLength != 2) {
      this.ngOnInit();
    }
  }

  listToMatrix(list: Product[], elementsPerSubArray: number): Array<Product[]> {
    let matrix: Array<Product[]> = [];
    let i;
    let k;

    for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
        k++;
        matrix[k] = [];
      }

      matrix[k].push(list[i]);
    }
    return matrix;
  }

  setSublength() {
    if (this.screenWidth > 1024) {
      this.subLength = 5;
      return;
    }

    if (this.screenWidth < 768) {
      this.subLength = 1;
      return;
    }

    this.subLength = 2;
  }
}
