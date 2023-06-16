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
          { label: 'COLLEGE', icon: 'pi pi-fw pi-calendar' },
          { label: 'ENTERPRISE', icon: 'pi pi-fw pi-pencil' },
          { label: 'NOTES', icon: 'pi pi-fw pi-file' },
          { label: 'AIREN MASK', icon: 'pi pi-fw pi-cog' }
      ];

      this.activeItem = this.items[0];
  }

  onActiveItemChange(event:any){
      this.activeItem = event;
  }

  activateLast() {
      this.activeItem = this.items[this.items.length - 1];
  }

}
