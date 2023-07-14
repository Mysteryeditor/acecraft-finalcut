import { Component, OnInit } from '@angular/core';
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
  // importing the cards image url and title from local json
  cards_arr: any = (carddata as any).default;

  timeLineData: timeLine[] = []//to store the timeline data

  constructor(private title: Title, private enterServ: EnterpriseService) {

    this.title.setTitle("Enterprise");

  }

  ngOnInit(): void {
    // for the small screen timeline
    this.enterServ.getTimelineEvents().subscribe((res) => {
      this.timeLineData = res
    })
  }

  colbg: any[] = ['url(https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Untitled-1.png)',
    'url(https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Untitled-2.png)']

}




