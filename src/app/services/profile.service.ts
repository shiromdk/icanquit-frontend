import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {profile} from "../classes/profile";


@Injectable()
export class ProfileService {

  private profileApiUrl = '/management/profiles';
  constructor(private http:Http) {}


  getProfiles(): Observable<profile[]> {
    return this.http.get(this.profileApiUrl)
      .map((res:Response)=> res.json())
      .catch((error:any)=> Observable.throw(error.json().error)||'Server Error')
  }

}
