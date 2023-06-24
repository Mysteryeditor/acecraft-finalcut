import { Component } from '@angular/core';
import * as carddata from 'src/assets/json/enterprise-cards.json'
@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent {
  cards_arr: any = (carddata as any).default;
  events: EventItem[];

  constructor() {
      this.events = [
          { icon: '1',  image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/icon-1.png','title':'single line brief' },
          { icon: '2', image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/icon-1.png' },
          { icon: '3', image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/icon-1.png' },
          {icon: '4',  image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/icon-1.png'},
          {icon:'5',image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/icon-1.png'},
          {icon:'6',image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/icon-1.png'}
      ];
  }

  
colbg: any[]=['url(https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Untitled-1.png)',
'url(https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Untitled-2.png)']

}

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
title?:string
  image?: string;
}
