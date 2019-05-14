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
  constructor(private router: Router, ) { }

  ngOnInit() {
  }

  login() {
    if (this.uname == 'admin' && this.psw == 'admin') {
      this.router.navigate(['/NewsFeed']);

    }
  }
    



}
