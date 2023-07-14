import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-airen-mask',
  templateUrl: './airen-mask.component.html',
  styleUrls: ['./airen-mask.component.css']
})
export class AirenMaskComponent {
  constructor(private title: Title) {
    this.title.setTitle("Airen Mask")
  }
}
