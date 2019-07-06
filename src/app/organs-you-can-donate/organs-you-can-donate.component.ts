import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organs-you-can-donate',
  templateUrl: './organs-you-can-donate.component.html',
  styleUrls: ['./organs-you-can-donate.component.css']
})
export class OrgansYouCanDonateComponent implements OnInit {

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
}
