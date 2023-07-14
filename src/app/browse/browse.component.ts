import { Component, OnInit } from '@angular/core';
import { SchoolsListService } from 'src/services/schools-list.service';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  sortToggle: boolean = true;
  pList: any[] = []
  totalProducts: number = 0;

  constructor(private produlist: SchoolsListService) { }

  // sorting the data
  sortingParam: any;
  sortingDirection: any;
  optionSelected: any;
  onOptionsSelected(event: any) {
    this.optionSelected = event.target.value;
    if (this.optionSelected === 'lth') {
      (this.sortingParam = 'price'), (this.sortingDirection = 'asc');
    } else if (this.optionSelected === 'htl') {
      (this.sortingParam = 'price'), (this.sortingDirection = 'desc');
    } else if (this.optionSelected === 'nasc') {
      (this.sortingParam = 'title'), (this.sortingDirection = 'asc');
    } else if (this.optionSelected === 'ndesc') {
      (this.sortingParam = 'title'), (this.sortingDirection = 'desc');
    }
  }

  ngOnInit(): void {

    // count of products
    this.produlist.getproductsList().subscribe((response) => {
      this.totalProducts = response.length;
      console.log(response)
    })

    // list of all the products
    this.produlist.getproductsList().subscribe((response) => {
      this.pList = response;
    })

  }
}
