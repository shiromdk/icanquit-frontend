import {Component, OnInit, Input} from '@angular/core';
import {profile} from "../../../classes/profile";

@Component({
  selector: 'app-profile-portrait',
  templateUrl: './profile-portrait.component.html',
  styleUrls: ['./profile-portrait.component.css']
})
export class ProfilePortraitComponent implements OnInit {

  @Input() profile:profile;
  @Input() listId:string;
  @Input() editId:string;
  constructor() { }

  ngOnInit() {
  }

}
