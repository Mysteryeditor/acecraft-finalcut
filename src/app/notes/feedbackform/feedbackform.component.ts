import { Component } from '@angular/core';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent {
  obj = new reviewData();

  onSubmit(){

  }
}

class reviewData {
  reviewer!:string
  email !: string;
  message!:string
  
}
