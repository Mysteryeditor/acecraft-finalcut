import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{SchoolsList} from 'src/models/schools-list';
import { Products } from 'src/models/schools-list';
@Injectable({
  providedIn: 'root'
})
export class SchoolsListService {

  constructor(private http:HttpClient) { }

  url:string='http://localhost:3000/schoolsList';

  getschoolsList(){
    return this.http.get<SchoolsList[]>(this.url);
  }

  productsUrl:string='http://localhost:3000/Products';

  // to get all the Products
  getproductsList(){
    return this.http.get<Products[]>(this.productsUrl);
  }

  // to view single product
  getSingleProduct(id:number){
    return this.http.get<Products[]>(this.productsUrl+'?id='+id);

  }
}
