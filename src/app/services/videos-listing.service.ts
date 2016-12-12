import {Injectable, EventEmitter} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {Video} from "../classes/video";
import {Observable} from "rxjs";

@Injectable()
export class VideosListingService {

  videoListChanged = new EventEmitter<Video[]>();

  private videoList:Video[]=[];

  constructor(private http:Http) {}



  getVideos(){
    return this.videoList;
  }

  getVideo(id:number){
    return this.videoList[id];
  }

  addVideo(video:Video){
    this.videoList.push(video);
  }

  storeData(){
    const body = JSON.stringify(this.videoList);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('/management/videos', body, {headers: headers});
  }
  fetchData() {
    return this.http.get('/management/videos')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Video[]) => {
          this.videoList = data;
          this.videoListChanged.emit(this.videoList);
        }
      );
  }
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
