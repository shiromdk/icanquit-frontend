import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './public/homepage/homepage.component';
import { routing } from "./app.routing";
import { HeaderComponent } from './public/header/header.component';
import { CollapseModule} from 'ng2-bootstrap/ng2-bootstrap';
import { ProfileMainComponent } from './public/profile-main/profile-main.component';
import { ContactUsComponent } from './public/contact-us/contact-us.component';

/** Service Imports */
import { AuthService} from "./services/auth.service";
import { AuthGuard} from "./services/auth.guard";

/** Custom Module Imports */
import {AboutModule} from "./public/about-main/about.module";
import {TrainingModule} from "./public/training-main/training.module";





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    ProfileMainComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    CollapseModule,
    AboutModule,
    TrainingModule

  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
