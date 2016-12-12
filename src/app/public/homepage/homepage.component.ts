import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css']
})
export class HomepageComponent implements OnInit{
  sources:Array<Object>;
  constructor(private http:Http) {

  }

  ngOnInit(){

  }
}
