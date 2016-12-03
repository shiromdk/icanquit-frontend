import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './public/homepage/homepage.component';
import { routing } from "./app.routing";
import { HeaderComponent } from './public/header/header.component';
import { CollapseModule} from 'ng2-bootstrap/ng2-bootstrap';
import { AboutMainComponent } from './public/about-main/about-main.component';
import { ProfileMainComponent } from './public/profile-main/profile-main.component';
import { ContactUsComponent } from './public/contact-us/contact-us.component';
import { TrainingMainComponent } from './public/training-main/training-main.component';
import { ProtectedTrainingMainComponent } from './protected/protected-training-main/protected-training-main.component';
import { LoginPageComponent } from './public/training-main/login-page/login-page.component';
import { AuthService} from "./services/auth.service";
import { AuthGuard} from "./services/auth.guard";

import { VgCore} from "videogular2/core";
import { VgOverlayPlayModule} from "videogular2/overlay-play";
import { VgBufferingModule} from "videogular2/buffering";
import { VgControlsModule} from "videogular2/controls";




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    AboutMainComponent,
    ProfileMainComponent,
    ContactUsComponent,
    TrainingMainComponent,
    ProtectedTrainingMainComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    VgCore,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    routing,
    CollapseModule,
    ReactiveFormsModule

  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
