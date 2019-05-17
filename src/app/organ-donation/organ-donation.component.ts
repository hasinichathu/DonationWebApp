import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organ-donation',
  templateUrl: './organ-donation.component.html',
  styleUrls: ['./organ-donation.component.css']
})
export class OrganDonationComponent implements OnInit {

  constructor(private router: Router,) { }

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
