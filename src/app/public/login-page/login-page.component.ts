import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {Router} from "@angular/router";


import {AuthService} from "../../services/auth.service";
import {User} from "../../services/user.interface";
declare var firebase: any;


@Component({
  selector: 'app-login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.css']
})
export class LoginPageComponent implements OnInit,OnDestroy {
  loginForm: FormGroup;
  public failerror:any = false;
  errorMessage ='';
  constructor(private fb:FormBuilder, private authService:AuthService,private router:Router) {
  }

  signinUser(user:User){
    firebase.auth().signInWithEmailAndPassword("s1d76j3fckqur5uhjtgj67996nwhz623@email.email", user.password).then((userInfo)=>{
      this.router.navigate(['/trainingmain']);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      // ...
    }).then(()=>
      {
        this.failerror=true;
      }
    );
  }

  onSignin(){
    this.signinUser(this.loginForm.value);
  }

  ngOnDestroy(){

  }


  ngOnInit():any{
    this.loginForm = this.fb.group({
      password:['',Validators.required],
    })

  }
}
