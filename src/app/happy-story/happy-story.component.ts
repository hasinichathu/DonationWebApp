import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-happy-story',
  templateUrl: './happy-story.component.html',
  styleUrls: ['./happy-story.component.css']
})
export class HappyStoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
