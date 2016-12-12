
import {User} from "./user.interface";
import {Router} from "@angular/router";
import {Injectable, Output, EventEmitter} from "@angular/core";
import {Subject, Observable} from "rxjs/Rx";

declare var firebase: any;


@Injectable()
export class AuthService{

    constructor(private router:Router){}

    signinUser(user:User){
      firebase.auth().signInWithEmailAndPassword("s1d76j3fckqur5uhjtgj67996nwhz623@email.email", user.password).then((userInfo)=>{

        this.router.navigate(['']);
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    }

    logout(){
      firebase.auth().signOut();
      this.router.navigate(['']);
    }



    isAuthenticated():Observable<boolean>{
      const subject = new Subject<boolean>();
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          subject.next(true);
        }else{
          subject.next(false);
        }
      });
      return subject.asObservable();
    }
}
