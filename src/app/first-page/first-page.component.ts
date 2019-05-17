import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  uname:string;
  psw:string;
  imageSources:string[]=['https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg', 
  'https://www.fjords.com/wp-content/uploads/2018/12/DSC_6281-2000x1200.jpg','https://cdn.pixabay.com/photo/2013/10/02/23/03/dawn-190055__340.jpg'];
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
  organDoners(){
    this.router.navigate(['/OrganDonation']);
  }
  bloodDoners(){
    this.router.navigate(['/BloodDonation']);
  }
  fundRaising(){
    this.router.navigate(['/FundRaising']);
  }
  organ(){
    this.router.navigate(['/OrganDonation']);
  }
  blood(){
    this.router.navigate(['/BloodDonation']);
  }
  // fund(){
  //   this.router.navigate(['/FundRaising']);
  // }
    



}
