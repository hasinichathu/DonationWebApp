import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

@Component({
  selector: 'app-organ-donation',
  templateUrl: './organ-donation.component.html',
  styleUrls: ['./organ-donation.component.css']
})
export class OrganDonationComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private router: Router,private db: AngularFireDatabase,) { }

  ngOnInit() {
    this.items = this.db.list('feedItem', db => db.orderByChild("donationType").equalTo("organ")).valueChanges();
    // this return all data in one news feed item
  }
  ngOnChanges() {
    this.items = this.db.list('feedItem', db => db.orderByChild("donationType").equalTo("organ")).valueChanges();

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
