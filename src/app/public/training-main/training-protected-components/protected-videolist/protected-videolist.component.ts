import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected-videolist',
  templateUrl: './protected-videolist.component.html',
  styleUrls: ['./protected-videolist.component.css']
})
export class ProtectedVideolistComponent implements OnInit {
  sources:Array<Object>;
  constructor() {
    this.sources = [
      {
        src: "../../../assets/videos/intro.mp4",
        type: "video/mp4"
      },{
        src: "../../../assets/videos/intro.mp4",
        type: "video/mp4"
      },{
        src: "../../../assets/videos/intro.mp4",
        type: "video/mp4"
      },{
        src: "../../../assets/videos/intro.mp4",
        type: "video/mp4"
      },{
        src: "../../../assets/videos/intro.mp4",
        type: "video/mp4"
      },{
        src: "../../../assets/videos/intro.mp4",
        type: "video/mp4"
      },{
        src: "../../../assets/videos/intro.mp4",
        type: "video/mp4"
      },{
        src: "../../../assets/videos/intro.mp4",
        type: "video/mp4"
      },
    ];
  }

  ngOnInit() {
  }

}
