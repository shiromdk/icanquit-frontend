import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sign-in-bar',
  templateUrl: './sign-in-bar.component.html',
  styleUrls: ['./sign-in-bar.component.css']
})
export class SignInBarComponent implements OnInit,OnDestroy {
  isAuthenticated = false;
  private subscription:Subscription;
  constructor(private authService:AuthService) {
    this.subscription=this.authService.isAuthenticated().subscribe(
      authStatus=>this.isAuthenticated=authStatus
    );
  }

  ngOnInit() {
    this.isAuth();
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
