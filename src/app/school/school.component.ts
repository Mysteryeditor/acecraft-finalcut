import { Component, OnInit } from '@angular/core';
import { SchoolsListService } from 'src/services/schools-list.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
constructor(private sl:SchoolsListService){}
schoolsList:any[]=[]

// the final image
imgEnd='https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/BK,.jpg'
ngOnInit(): void {
this.sl.getschoolsList().subscribe((response)=>{
  this.schoolsList= response;
})
}


}
