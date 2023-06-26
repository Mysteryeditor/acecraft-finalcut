import { Component,OnInit } from '@angular/core';
import { SchoolsListService } from 'src/services/schools-list.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  sortToggle:boolean=true;
  pList:any[]=[]

  constructor(private produlist:SchoolsListService){}

  ngOnInit(): void {
    this.produlist.getproductsList().subscribe((response)=>{
      this.pList=response;
    })
      console.log(this.pList)
  }
}
