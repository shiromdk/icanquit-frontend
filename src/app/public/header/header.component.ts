import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed:boolean = false;
  @Input() public set collapse(value:boolean){}

  constructor() { }

  ngOnInit() {
  }

}
