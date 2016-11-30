import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-training-main',
  templateUrl: './training-main.component.html',
  styleUrls: ['./training-main.component.css']
})
export class TrainingMainComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private subscription:Subscription;
  constructor(private authService:AuthService) {
    this.subscription=this.authService.isAuthenticated().subscribe(
      authStatus=>this.isAuthenticated=authStatus
    );
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  isAuth(){
    return this.isAuthenticated;
  }
  onLogout(){
    this.authService.logout();
  }
}
