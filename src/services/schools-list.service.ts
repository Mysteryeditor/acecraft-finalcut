import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{SchoolsList} from 'src/models/schools-list';
import { Products } from 'src/models/schools-list';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SchoolsListService {

  constructor(private http:HttpClient) { }

  url:string='https://acecraft-json-kx5c.vercel.app/schoolsList';

  getschoolsList(){
    return this.http.get<SchoolsList[]>(this.url);
  }

  productsUrl:string='https://acecraft-json-kx5c.vercel.app/Products';

  // to get all the Products
  getproductsList(){
    return this.http.get<Products[]>(this.productsUrl);
  }

  // to view single product
  getSingleProduct(id:number){
    return this.http.get<Products[]>(this.productsUrl+'?id='+id);
  }

  // to get the count
  public countSubject= new Subject<number>();
  getCount(){
    return this.getproductsList().subscribe((res)=>{
      this.countSubject.next(res.length);
    })
  }
}
