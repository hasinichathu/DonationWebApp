import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-benifits',
  templateUrl: './benifits.component.html',
  styleUrls: ['./benifits.component.css']
})
export class BenifitsComponent implements OnInit {

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
