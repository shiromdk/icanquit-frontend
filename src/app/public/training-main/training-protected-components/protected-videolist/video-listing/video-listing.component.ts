import {Component, OnInit, Input} from '@angular/core';
import {VideosListingService} from "../../../../../services/videos-listing.service";
import {Video} from "../../../../../classes/video";

@Component({
  selector: 'app-video-listing',
  templateUrl: './video-listing.component.html',
  styleUrls: ['./video-listing.component.css']
})
export class VideoListingComponent implements OnInit {

  constructor(
    private listingService:VideosListingService
  ) {}

  @Input() video:Video;
  @Input() listId:string;
  @Input() editId:string;
  ngOnInit() {
  }

}
