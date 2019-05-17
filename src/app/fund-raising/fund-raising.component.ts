import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fund-raising',
  templateUrl: './fund-raising.component.html',
  styleUrls: ['./fund-raising.component.css']
})
export class FundRaisingComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }
  first(){
    this.router.navigate(['/first']);
  }
}
