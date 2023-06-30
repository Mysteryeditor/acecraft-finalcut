import { Component ,OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  menuItems: MenuItem[] | undefined;
  sidebarVisible: boolean = false

  ngOnInit(): void {
    this.menuItems = [{
      label: 'school', routerLink: 'school'
    },
    {
      label: 'college', routerLink: 'college'
    },
    {
      label: 'enterprise', routerLink: 'enterprise'
    },
    {
      label: 'notes', routerLink: 'blogs'
    },
    {
      label: 'airen mask', routerLink: 'am'
    },
    {
      label: 'care', routerLink: 'apce'
    },
  {
    label:'returns',routerLink:'returns'
  },
{
  label:'production',routerLink:'production'
},
{
  label:'Terms',routerLink:''
},
  {
    label:'Get help',routerLink:''
  }]
  }

}

