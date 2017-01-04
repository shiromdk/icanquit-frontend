import {Injectable} from "@angular/core"
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService){}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<boolean>|boolean{
    return this.authService.isAuthenticated().first();
  }

}
