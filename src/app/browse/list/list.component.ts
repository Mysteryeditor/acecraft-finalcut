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

  constructor(private r:Router,private sls:SchoolsListService){}
  @Input()
products:any;

productId!:number 

singleProductData:any=[];

ngOnInit(): void {
    this.getData()
}

getData(){
  this.sls.getSingleProduct(this.productId).subscribe((response)=>{
    this.singleProductData=response;
    console.log(this.singleProductData)
  })
}

// for the quickview modal
quickDetails:any
quickView(id:number){
  console.log(id)
  this.sls.getSingleProduct(id).subscribe((response)=>{
    console.log(response);
this.quickDetails=response;
  })

}




viewProduct(id:number){
// this.productId=id;
this.r.navigate(['product/'+id])
}
}
