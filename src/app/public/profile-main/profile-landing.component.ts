import {Component, OnInit, Input} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {profile} from "../../classes/profile";
import {EmitterService} from "../../services/emitter.service";

@Component({
  selector: 'app-profile-landing',
  templateUrl: './profile-landing.component.html',
  styleUrls: ['./profile-landing.component.css']
})
export class ProfileLandingComponent implements OnInit {

  constructor(private profileservice:ProfileService) { }
  profiles:profile[];
  @Input() listId: string;
  @Input() editId: string;

  ngOnInit() {
    this.loadProfiles();
  }

  loadProfiles(){
    this.profileservice.getProfiles()
      .subscribe(
        profiles =>this.profiles = profiles,
        err =>{
          console.log(err);
        }
      );
  }
  ngOnChanges(changes:any){
    EmitterService.get(this.listId).subscribe((profiles:profile[]) => {this.loadProfiles()});
  }
}
