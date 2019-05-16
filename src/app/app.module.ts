import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NewsFeedItemComponent } from './news-feed-item/news-feed-item.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { environment } from 'src/environments/environment.prod';
import { HttpClientModule } from '@angular/common/http';

import { FeedControllerService } from './Services/feed-controller.service';
import { FirstPageComponent } from './first-page/first-page.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    NewsFeedItemComponent,
    FirstPageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    HttpClientModule,
    SlideshowModule,
  ],
  providers: [FeedControllerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
