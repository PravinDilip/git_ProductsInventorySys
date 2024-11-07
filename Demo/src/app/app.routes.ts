import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NewProductComponent } from './product/new-product/new-product.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'productList',
    component: ProductListComponent,
  },
  {
    path: 'addProduct',
    component: NewProductComponent,
  },
];
