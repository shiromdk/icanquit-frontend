import {Component, OnInit, OnDestroy} from '@angular/core';
import {Video} from "../../../../../classes/video";
import {Router, ActivatedRoute} from "@angular/router";
import {VideosListingService} from "../../../../../services/videos-listing.service";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit, OnDestroy {
  selectedVideo:Video;
  selectedVideoName: string;
  selectedVideoUrl:string;
  private subscription: Subscription;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private videoservice:VideosListingService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params:any) =>{
        this.selectedVideoName = params['id'];
        this.selectedVideoUrl ="/watch/"+this.selectedVideoName;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
