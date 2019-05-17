import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blood-donation',
  templateUrl: './blood-donation.component.html',
  styleUrls: ['./blood-donation.component.css']
})
export class BloodDonationComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }
  first(){
    this.router.navigate(['/first']);
  }
}
