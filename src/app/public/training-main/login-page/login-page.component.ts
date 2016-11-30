import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit,OnDestroy {
  loginForm: FormGroup;
  error:boolean = false;
  errorMessage ='';
  constructor(private fb:FormBuilder, private authService:AuthService) {
  }

  onSignin(){
    this.authService.signinUser(this.loginForm.value);
  }

  ngOnDestroy(){

  }

  ngOnInit():any{
    this.loginForm = this.fb.group({
      password:['',Validators.required],
    })

  }
}
