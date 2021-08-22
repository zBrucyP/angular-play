import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { productCategories } from '../../utils/ProductCategoryConstants';
import { Product } from '../../models/Product';
import { concatMap, takeUntil } from 'rxjs/operators';
import { ProductService } from '../../services/ProductService/product.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit, OnDestroy {

  destroyed$: Subject<boolean> = new Subject<boolean>();
  private categorySelectedSubject: BehaviorSubject<string> = new BehaviorSubject<string>(productCategories.BEST_SELLER.tag);

  private productService: ProductService;

  CATEGORY_OPTIONS: productCategories[] = [];

  selectedCategory$: Observable<string>;
  products$: Observable<Product[]>;

  constructor(private ProductService: ProductService) { 
    this.productService = ProductService;
    this.selectedCategory$ = this.categorySelectedSubject.asObservable();
    this.CATEGORY_OPTIONS = productCategories.getCategories();
    this.products$ = of([]);
  }

  ngOnInit(): void {
    this.products$ = this.selectedCategory$
      .pipe(
        takeUntil(this.destroyed$),
        concatMap((category: string): Observable<Product[]> => {
          return this.productService.getProducts(category);
        })
      )
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }

  clickCategory(category: string): void {
    console.log(category);
    this.categorySelectedSubject.next(category);
  }

}
