import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './public/homepage/homepage.component';
import {routing} from "./app.routing";
import { HeaderComponent } from './public/header/header.component';
import {CollapseModule} from 'ng2-bootstrap/ng2-bootstrap';
import { AboutMainComponent } from './public/about-main/about-main.component';
import { ProfileMainComponent } from './public/profile-main/profile-main.component';
import { ContactUsComponent } from './public/contact-us/contact-us.component';
import { TrainingMainComponent } from './public/training-main/training-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    AboutMainComponent,
    ProfileMainComponent,
    ContactUsComponent,
    TrainingMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
