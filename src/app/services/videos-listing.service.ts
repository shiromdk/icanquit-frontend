import {Injectable} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";

import {Video} from "../classes/video";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VideosListingService {
  private videoApiUrl = '/management/videos';
  constructor(private http:Http) {}


  getVideos(): Observable<Video[]> {
    return this.http.get(this.videoApiUrl)
      .map((res:Response)=> res.json())
      .catch((error:any)=> Observable.throw(error.json().error)||'Server Error')
  }


}
