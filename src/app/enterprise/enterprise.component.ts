import { Component,OnInit } from '@angular/core';
import * as carddata from 'src/assets/json/enterprise-cards.json';
import { Title } from '@angular/platform-browser';
import { EnterpriseService } from 'src/services/enterprise.service';
import { timeLine } from 'src/models/enterprise';
@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {
  cards_arr: any = (carddata as any).default;
  events: EventItem[];
  timeLineData:timeLine[]=[]

  constructor(private title:Title,private enterServ:EnterpriseService) {

    this.title.setTitle("Enterprise");
      this.events = [
          { icon: '1',  image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/icon-1.png','title':'single line brief' },
          { icon: '2', image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/icon-1.png' },
          { icon: '3', image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/icon-1.png' },
          {icon: '4',  image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/icon-1.png'},
          //{icon:'5',image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/icon-1.png'},
          //{icon:'6',image: 'https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/icon-1.png'}
      ];
  }

  ngOnInit(): void {
      this.enterServ.getTimelineEvents().subscribe((res)=>{
        this.timeLineData=res
      })
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


