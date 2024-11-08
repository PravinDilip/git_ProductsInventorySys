import { Component, inject, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Product } from '../../product';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  public productDetailsList: Product[] = [];
  service = inject(ProductServiceService);
  router = inject(Router);
  constructor() {}

  ngOnInit(): void {
    this.getAllProductDetailsData();
  }

  getAllProductDetailsData() {
    this.service.getAllProducts().subscribe((data: Product[]) => {
      this.productDetailsList = data;
    });
  }
  deleteProduct(id: any) {
    this.service.deleteProduct(id).subscribe((res) => {
      this.productDetailsList = this.productDetailsList.filter(
        (item) => item.id !== id
      );
    });
  }
  updateProduct(productId: any) {
    console.log( this.router.navigate([`/product/${productId}`]));
    this.router.navigate([`/product/${productId}`]);
  }
}
