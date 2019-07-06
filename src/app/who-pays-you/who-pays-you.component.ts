import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-who-pays-you',
  templateUrl: './who-pays-you.component.html',
  styleUrls: ['./who-pays-you.component.css']
})
export class WhoPaysYouComponent implements OnInit {

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
