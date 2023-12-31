import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CartserviceService } from 'src/services/cartservice.service';
import { UsersService } from 'src/services/users.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuItems: MenuItem[] | undefined;
  sidebarVisible: boolean = false

  constructor(private cartCount: CartserviceService, private userlog: UsersService) { }


  items!: MenuItem[];

  cartcount!: number

  userList: any = []

  userLoggedIn: boolean = false

  sideBar: sideBarItems[] = [
    {
      label: 'school',
      routerLink: 'school'
    }, {
      label: 'college',
      routerLink: 'college'
    },
    {
      label: 'enterprise',
      routerLink: 'enterprise'
    },
    {
      label: 'notes',
      routerLink: 'blogs'
    },
    {
      label: 'Airen Mask',
      routerLink: 'am'
    },
    {
      label: 'about',
      routerLink: 'about'
    },
    {
      label: 'care',
      routerLink: 'care'
    },
    {
      label: 'returns',
      routerLink: 'returns'
    },
    {
      label: 'production',
      routerLink: 'production'
    },

    {
      label: 'terms',
      routerLink: 'terms'
    },
    {
      label: 'get help',
      routerLink: 'get help'
    },
  ]

  ngOnInit() {
    //the value of the subject from the users service
    this.userlog.authSubject.subscribe(
      data => {
        console.log(data);
        this.userLoggedIn = data;
      }
    )


    //to maintain state even after refreshing
    this.userlog.getActiveUser().subscribe((res) => {
      console.log(res.length);
      if (res.length > 0) {
        this.userLoggedIn = true;
      }
      else {
        this.userLoggedIn = false;
      }
    })


    //  the main menu Bar(TabMenu)
    this.items = [
      { label: 'SCHOOL', styleClass: 'navmenu', routerLink: '/school' },
      { label: 'COLLEGE', routerLink: 'college' },
      { label: 'ENTERPRISE', routerLink: 'enterprise' },
      { label: 'NOTES', icon: 'fa-circle', styleClass: "notes-icon", routerLink: 'blogs' },
      { label: 'AIREN MASK', icon: 'pi pi-fw pi-cog', routerLink: 'am' }
    ];


    // the cart count(badge)
    this.cartCount.getFromCart().subscribe((response) => {
      this.cartcount = response.length;
    })
  }

  // for the logout
  logOut() {
    this.userLoggedIn = false;
    this.userlog.logOutUser();
  }

  // for the sidebar  

  //left
  dropdownVisible: boolean = true;

  //right
  sidebarVisible2: boolean = false;
}

interface sideBarItems {
  label: string,
  routerLink: string
}


