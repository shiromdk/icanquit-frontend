import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

import 'rxjs/add/operator/map'

import {Http, Response} from "@angular/http";
import * as ng2pagination from 'ng2-pagination';




@Component({
  selector: 'app-protected-videolist',
  templateUrl: './protected-videolist.component.html',
  styleUrls: ['./protected-videolist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProtectedVideolistComponent implements OnInit {

  constructor(private http:Http) {}
  page: number = 1;
  @Input() videoList: any[]=[
    {
      "name":"Test Name 1",
      "src":"../../../assets/videos/intro.mp4",
      "type":"video/mp4"
    },
    {
      "name":"Test Name 2",
      "src":"../../../assets/videos/intro.mp4",
      "type":"video/mp4"
    },
    {
      "name":"Test Name 3",
      "src":"../../../assets/videos/intro.mp4",
      "type":"video/mp4"
    },
    {
      "name":"Test Name 4",
      "src":"../../../assets/videos/intro.mp4",
      "type":"video/mp4"
    },
    {
      "name":"Test Name 5",
      "src":"../../../assets/videos/intro.mp4",
      "type":"video/mp4"
    },
    {
      "name":"Test Name 6",
      "src":"../../../assets/videos/intro.mp4",
      "type":"video/mp4"
    },
    {
      "name":"Test Name 7",
      "src":"../../../assets/videos/intro.mp4",
      "type":"video/mp4"
    },
    {
      "name":"Test Name 8",
      "src":"../../../assets/videos/intro.mp4",
      "type":"video/mp4"
    }
  ];

  ngOnInit() {

  }


}
