import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import {FeedItem} from '../Models/FeedItem.model';

@Component({
  selector: 'app-blood-donation',
  templateUrl: './blood-donation.component.html',
  styleUrls: ['./blood-donation.component.css']
})
export class BloodDonationComponent implements OnInit {
  items: Observable<any[]>;
  
  constructor(private router: Router,private db: AngularFireDatabase,) { }

  ngOnInit() {
    this.items = this.db.list('feedItem', db => db.orderByChild("donationType").equalTo("blood")).valueChanges();
    // this return all data in one news feed item
  }
  ngOnChanges() {
    this.items = this.db.list('feedItem', db => db.orderByChild("donationType").equalTo("blood")).valueChanges();

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
