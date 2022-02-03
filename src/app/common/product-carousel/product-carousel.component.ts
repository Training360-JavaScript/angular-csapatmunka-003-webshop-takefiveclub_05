import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements OnInit {

  @Input() title: string = 'Featured Products'
  @Input() products$!: Observable<Product[]>;
  @Input() id: string = 'carouselId';
  @Input() products: Product[] = [new Product()];


  public screenWidth: number = 0;
  public subLength: number = 5;
  public carouselList: Array<Product[]> = [[new Product()]];

  constructor() {
  }

  ngOnInit(): void {
    this.products$.subscribe({
      next: (value) => {
        this.carouselList = this.listToMatrix(this.products, this.subLength);
      },
      error: (err) => console.error(err),
    })
    this.screenWidth = window.innerWidth;
    this.setSublength();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;

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
