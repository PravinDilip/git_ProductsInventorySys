import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductServiceService } from '../../service/product-service.service';
@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss',
})
export class NewProductComponent implements OnInit {
  productForm!: FormGroup;
  submitted: boolean = false;
  productData: [] = [];
  categoryList: string[] = [];
  service = inject(ProductServiceService);
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      photo: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      stockStatus: ['', Validators.required],
      supplier: ['', Validators.required],
      sku: ['', Validators.required],
      description: ['', Validators.required],
      manufactureDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      weight: ['', Validators.required],
      dimension: ['', Validators.required],
      color: ['', Validators.required],
      material: ['', Validators.required],
      warranty: ['', Validators.required],
      location: ['', Validators.required],
    });

    this.categoryList = ['Category1', 'Category2', 'Category3'];
  }
  get f() {
    return this.productForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
      return;
    }
    // console.log('sdf', this.productForm.value);
    this.service.addProduct(this.productForm.value).subscribe((res) => {
      this.productData = res;
      this.productForm.reset();
      console.log('ProductData', this.productData);
    });
  }
}
