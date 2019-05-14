import { Component, OnInit, Input } from '@angular/core';
import {FeedItem} from '../Models/FeedItem.model';

@Component({
  selector: 'app-news-feed-item',
  templateUrl: './news-feed-item.component.html',
  styleUrls: ['./news-feed-item.component.css']
})
export class NewsFeedItemComponent implements OnInit {
  @Input() feedItem: FeedItem;
  feedItemDescription:string;
  imgURL:string;
  constructor() { }

  ngOnInit(feedItem=this.feedItem) {
    
    this.feedItemDescription=feedItem.feedItem;
    this.imgURL=feedItem.photoURL;
  }

}
