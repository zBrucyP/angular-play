import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Product } from 'src/app/models/Product';
import { productCategories } from '../../utils/ProductCategoryConstants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  allProductsMock$ = of([
    new Product("Unique Shirt", "", "This is for wearing", "https://image.shutterstock.com/image-photo/white-clothes-made-cotton-fabric-600w-1937841433.jpg", "", [productCategories.SHIRT.tag, productCategories.BEST_SELLER.tag]),
    new Product("Stretchy Pants", "", "Feel the rip", "https://image.shutterstock.com/image-photo/black-slim-denim-isolated-over-600w-1892499196.jpg", "", [productCategories.PANTS.tag, productCategories.BEST_SELLER.tag]),
    new Product("Best Socks", "", "Big Yellow", "https://image.shutterstock.com/image-photo/orange-socks-on-isolated-white-600w-1237524934.jpg", "", [productCategories.SOCKS.tag, productCategories.BEST_SELLER.tag]),
    new Product("Fun Sweater", "", "Ya never know", "https://image.shutterstock.com/image-photo/young-man-christmas-sweater-party-600w-1215026473.jpg", "", [productCategories.SHIRT.tag, productCategories.BEST_SELLER.tag]),
  ])

  constructor() { }

  getProducts(category: string): Observable<Product[]> {
    return this.allProductsMock$
      .pipe(
        take(1),
        map((products: Product[]): Product[] => {
          return products.filter(product => product.productContainsCategory(category));
        })
      );
  }


}
