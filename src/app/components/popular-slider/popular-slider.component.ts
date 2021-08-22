import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../services/ProductService/product.service';
import { productCategories } from '../../utils/ProductCategoryConstants';

@Component({
  selector: 'app-popular-slider',
  templateUrl: './popular-slider.component.html',
  styleUrls: ['./popular-slider.component.css']
})
export class PopularSliderComponent implements OnInit {

  private productService: ProductService;

  products$: Observable<Product[]>;

  constructor(private ProductService: ProductService) { 
    this.productService = ProductService;

    this.products$ = of([]);
  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts(productCategories.BEST_SELLER.tag)
      .pipe(
        take(1)
      )
  }

}
