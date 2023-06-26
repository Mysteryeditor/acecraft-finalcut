import { Component ,OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{

  constructor(private router: Router){}
 
  items!: MenuItem[];

  activeItem!: MenuItem;

  ngOnInit() {
      this.items = [
          { label: 'SCHOOL', styleClass:'navmenu',routerLink:'school'},
          { label: 'COLLEGE',routerLink:'college' },
          { label: 'ENTERPRISE',routerLink:'enterprise' },
          { label: 'NOTES', icon: 'fa-circle',styleClass:"notes-icon",routerLink:'blogs' },
          { label: 'AIREN MASK', icon: 'pi pi-fw pi-cog',routerLink:'am' }
      ];

      this.activeItem = this.items[0];

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const url = event.urlAfterRedirects;
          const activeItem = this.items.find(item => item.routerLink === url);
          if (activeItem) {
            this.activeItem = activeItem;
            localStorage.setItem('activeItemIndex', this.items.indexOf(activeItem).toString());
          }
        }
      });
  }



  // for the sidebar    
  dropdownVisible: boolean = true;
  

}
