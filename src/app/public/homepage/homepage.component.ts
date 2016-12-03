import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css']
})
export class HomepageComponent{
  sources:Array<Object>;
  constructor() {
    this.sources = [
      {
        src: "../../../assets/videos/intro.mp4",
        type: "video/mp4"
      }
    ];
  }



}
