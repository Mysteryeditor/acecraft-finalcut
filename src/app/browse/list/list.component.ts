import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private r:Router){}
  @Input()
products:any;

productId:number | undefined

viewProduct(id:number){
this.productId=id;
this.r.navigate(['product/'+id])
}
}
