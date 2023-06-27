import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolsListService } from 'src/services/schools-list.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Pid!:number
  data!:any
  constructor(private sls:SchoolsListService,private router:Router,private actroute:ActivatedRoute){}

  ngOnInit(): void {
      this.Pid=this.actroute.snapshot.params['id'];

      this.sls.getSingleProduct(this.Pid).subscribe((response)=>{
        this.data=response;
        console.log(this.data);
      })
  }


}
