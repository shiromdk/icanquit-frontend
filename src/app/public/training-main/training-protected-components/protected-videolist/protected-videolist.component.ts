import {Component, OnInit, Input} from '@angular/core';

import 'rxjs/add/operator/map'


import {VideosListingService} from "../../../../services/videos-listing.service";
import {Video} from "../../../../classes/video";
import {EmitterService} from "../../../../services/emitter.service";





@Component({
  selector: 'app-protected-videolist',
  templateUrl: './protected-videolist.component.html',
  styleUrls: ['./protected-videolist.component.css'],
})

export class ProtectedVideolistComponent implements OnInit {

  constructor(private videoservice:VideosListingService) {

  }

  videos:Video[];
  @Input() listId: string;
  @Input() editId: string;

  ngOnInit() {
    this.loadVideos();

  }

  loadVideos(){
    this.videoservice.getVideos()
      .subscribe(
        videos => this.videos = videos,
        err =>{
          console.log(err);
        }
      );
  }

  ngOnChanges(changes:any){
    EmitterService.get(this.listId).subscribe((videos:Video[]) => {this.loadVideos()});
  }


}
