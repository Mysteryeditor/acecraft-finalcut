import { Component, Input ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SchoolsListService } from 'src/services/schools-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  buttonHide:boolean=true;

  buttonDisplay(){
    this.buttonHide=false;
  }

  buttonVanish(){
    this.buttonHide=true;
  }

  constructor(private r:Router,private modal:SchoolsListService){}
  @Input()
products:any;

productId!:number 

singleProductData:any=[];

ngOnInit(): void {
    this.getData()
}

getData(){
  this.modal.getSingleProduct(this.productId).subscribe((response)=>{
    this.singleProductData=response;
    console.log(this.singleProductData)
  })

}

viewProduct(id:number){
this.productId=id;
this.r.navigate(['product/'+id])
}
}
