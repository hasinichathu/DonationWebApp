import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  uname: string;
  psw: string;
  imageSources: string[] = [
    'https://i.ytimg.com/vi/vAXJ42Mssmk/maxresdefault.jpg',
    'https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/Healthy-School-Fundraising-resized.jpg',
    'https://www.goodnet.org/photos/620x0/26772_hd.jpg',
    'https://blog.espares.co.uk/wp-content/uploads/sites/28/2016/03/Brainstorming-Ideas-For-Charity-Fundraising.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0e/b8/a1/e8/activity-studio-medical.jpg'
    ];
  constructor(private router: Router, ) { }

  ngOnInit() {
  }

  login() {
    if (this.uname == 'admin' && this.psw == 'admin') {
      this.router.navigate(['/NewsFeed']);

    }
  }
  signUp() {
    this.router.navigate(['/SignUp']);
  }
  organDoners() {
    this.router.navigate(['/OrganDonation']);
  }
  bloodDoners() {
    this.router.navigate(['/BloodDonation']);
  }
  fundRaising() {
    this.router.navigate(['/FundRaising']);
  }
  organ() {
    this.router.navigate(['/OrganDonation']);
  }
  blood() {
    this.router.navigate(['/BloodDonation']);
  }
  happyStories(){
    this.router.navigate(['/HappyStory']);
  }
  events(){
    this.router.navigate(['/Events']);
  }





}
