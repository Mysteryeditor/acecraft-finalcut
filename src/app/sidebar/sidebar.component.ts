import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarVisible: boolean = false

  menuItems: MenuItem[] | undefined;
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
