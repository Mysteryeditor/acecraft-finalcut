import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{SchoolsList} from 'src/models/schools-list'
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

  getproductsList(){
    return this.http.get<any>(this.productsUrl);
  }
}
