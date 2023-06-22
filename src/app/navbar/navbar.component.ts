import { Component ,OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
 
  items!: MenuItem[];

  activeItem!: MenuItem;

  ngOnInit() {
      this.items = [
          { label: 'SCHOOL', styleClass:'navmenu'},
          { label: 'COLLEGE',routerLink:'college' },
          { label: 'ENTERPRISE',routerLink:'enterprise' },
          { label: 'NOTES', icon: 'fa-circle',styleClass:"notes-icon" },
          { label: 'AIREN MASK', icon: 'pi pi-fw pi-cog' }
      ];

      this.activeItem = this.items[0];
  }

  onActiveItemChange(event:any){
      this.activeItem = event;
  }

  // for the sidebar    
  dropdownVisible: boolean = true;
  

}
