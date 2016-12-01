import {Component, OnInit, Input} from '@angular/core';
import {Routes, RouterModule, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed:boolean = true;
  public location='';
  @Input() public set collapse(value:boolean){}

  constructor(private  _router : Router) {
    this.location = _router.url;
  }

  ngOnInit() {
  }
  isAbout(){
    this.location=this._router.url;
    if(this.location=='/about'){
      return true;
    }
    return false;
  }
}
