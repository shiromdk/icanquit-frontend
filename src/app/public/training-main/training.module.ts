import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {LoginPageComponent} from "../login-page/login-page.component";
import {TrainingMainComponent} from "./training-main.component";
import {ProtectedTrainingMainComponent} from "./training-protected-components/protected-training-main/protected-training-main.component";
import {trainingRouting} from "./training.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TrainingLandingPageComponent } from './training-public-components/training-landing-page/training-landing-page.component';
import { ProtectedVideolistComponent } from './training-protected-components/protected-videolist/protected-videolist.component';
import { ProtectedDocumentlistComponent } from './training-protected-components/protected-documentlist/protected-documentlist.component';
import { ProtectedTrainingStartComponent } from './training-protected-components/protected-training-start/protected-training-start.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { VideoListingComponent } from './training-protected-components/protected-videolist/video-listing/video-listing.component';
import { VideoIndexComponent } from './training-protected-components/protected-videolist/video-index/video-index.component';
import { VideoPageComponent } from './training-protected-components/protected-videolist/video-page/video-page.component';

@NgModule({
  declarations:[
    TrainingMainComponent,
    ProtectedTrainingMainComponent,
    LoginPageComponent,
    TrainingLandingPageComponent,
    ProtectedVideolistComponent,
    ProtectedDocumentlistComponent,
    ProtectedTrainingStartComponent,
    VideoListingComponent,
    VideoIndexComponent,
    VideoPageComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    trainingRouting,
    Ng2PaginationModule
  ],
  providers:[
  ],
  bootstrap:[

  ]
})

export class TrainingModule {}
