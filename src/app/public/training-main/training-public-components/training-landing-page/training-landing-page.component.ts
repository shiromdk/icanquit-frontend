import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-training-landing-page',
  templateUrl: './training-landing-page.component.html',
  styleUrls: ['./training-landing-page.component.css']
})
export class TrainingLandingPageComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  sources:Array<Object>;
  private subscription:Subscription;

  constructor(private authService:AuthService) {
    this.subscription=this.authService.isAuthenticated().subscribe(
      authStatus=>this.isAuthenticated=authStatus
    );
    this.sources = [
      {
        src: "../../../assets/videos/intro.mp4",
        type: "video/mp4"
      }
    ];
  }

  ngOnInit() {
  }
  isAuth(){
    return this.isAuthenticated;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onLogout(){
    this.authService.logout();
  }
}
