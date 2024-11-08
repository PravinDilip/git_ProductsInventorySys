import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Product } from '../product';
import { error, log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
 private productUrl = 'http://localhost:3000/products';
 httpOptions = {

  headers: new HttpHeaders({

    'Content-Type': 'application/json'

  })

}
  constructor(private http: HttpClient) {}

  public addProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(this.productUrl, product,this.httpOptions);
  }
  
 public getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl).pipe(
      catchError(this.errorHandler)
    );
    }
  public deleteProduct(productid:number){
    return this.http.delete(this.productUrl +productid,this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }  


    errorHandler(error:any) {

      let errorMessage = '';
  
      if(error.error instanceof ErrorEvent) {
  
        errorMessage = error.error.message;
  
      } else {
  
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  
      }
  
      return throwError(errorMessage);
  
   }
}
