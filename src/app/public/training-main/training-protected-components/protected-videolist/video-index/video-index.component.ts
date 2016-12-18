import {Component, OnInit, Input} from '@angular/core';
import {Video} from "../../../../../classes/video";
import {EmitterService} from "../../../../../services/emitter.service";
import {VideosListingService} from "../../../../../services/videos-listing.service";

@Component({
  selector: 'app-video-index',
  templateUrl: './video-index.component.html',
  styleUrls: ['./video-index.component.css']
})
export class VideoIndexComponent implements OnInit {

  videos:Video[];
  @Input() listId: string;
  @Input() editId: string;

  constructor(private videoservice:VideosListingService) {

  }
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
