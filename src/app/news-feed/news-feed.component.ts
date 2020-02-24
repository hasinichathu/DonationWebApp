import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { FeedControllerService } from '../Services/feed-controller.service';
import { AngularFireStorage , AngularFireStorageReference , AngularFireUploadTask } from 'angularfire2/storage';
import {Upload} from '../Models/Upload';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  feedItem: string;
  items: Observable<any[]>;
  urlForSave: string;
  selectedFile =null;
  number:number;
  donation:string;
  filePath = '/uploads/'+new Date();

  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage ,
    private feedController: FeedControllerService,
    private http:HttpClient,private router: Router,) { }

  ngOnInit() {
    this.items = this.db.list('feedItem', db => db.orderByChild("name")).valueChanges();
    // this return all data in one news feed item
  }
  ngOnChanges() {
    this.items = this.db.list('feedItem', db => db.orderByChild("name")).valueChanges();

  }

  send() {
    // this.chat.sendMessage(this.message);
    
    this.afStorage.upload(this.filePath, this.selectedFile).then(() => {
      const ref = this.afStorage.ref(this.filePath);
      const downloadUrl = ref.getDownloadURL().subscribe(url => {
        this.urlForSave = url;
        console.log("Uploaded " + this.urlForSave);
        this.sendToDatabase(this.urlForSave);
       this.number++;
      })
    });

    

  }
  sendToDatabase(url:string){
    
    var messagesRef = firebase.database().ref('feedItem');
    messagesRef.push({
      name: "sample name",
      feedItem: this.feedItem,
      photoURL:url,
      donationType:this.donation,
      date:new Date(),
      completed:false
    });

    this.feedItem = "";
    this.selectedFile=null;
  }

  upload(event) {
    console.log(event);
    this.selectedFile=event.target.files[0];
    
  }
  first(){
    this.router.navigate(['/first']);
  }
  organ(){
    this.router.navigate(['/OrganDonation']);
  }
  blood(){
    this.router.navigate(['/BloodDonation']);
  }
  fund(){
    this.router.navigate(['/FundRaising']);
  }
  happyStories(){
    this.router.navigate(['/HappyStory']);
  }
  events(){
    this.router.navigate(['/Events']);
  }
  
}
