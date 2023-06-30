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
  totalProducts:number=0;

  constructor(private produlist:SchoolsListService){}

  // sorting the data
  sortParam: any;
  sortDirection: any;
  optionSelected: any;
  onOptionsSelected(event: any) {
    console.log(event.target.value); //option value will be sent as event
    this.optionSelected = event.target.value; //lth
    if (this.optionSelected === 'lth') {
      (this.sortParam = 'price'), (this.sortDirection = 'asc');
    } else if (this.optionSelected === 'htl') {
      (this.sortParam = 'price'), (this.sortDirection = 'desc');
    } else if (this.optionSelected === 'nasc') {
      (this.sortParam = 'title'), (this.sortDirection = 'asc');
    } else if (this.optionSelected === 'ndesc') {
      (this.sortParam = 'title'), (this.sortDirection = 'desc');
    }
  }

  ngOnInit(): void {

  //  this.produlist.countSubject.subscribe((response)=>{
  //    this.totalProducts=response;
  //    console.log(response)
  //  })

   this.produlist.getproductsList().subscribe((response)=>{
    this.totalProducts=response.length;
    console.log(response)
  })

    this.produlist.getproductsList().subscribe((response)=>{
      this.pList=response;
     } )
    
  }
}
