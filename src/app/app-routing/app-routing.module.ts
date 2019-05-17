import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from '../news-feed/news-feed.component';
import { FirstPageComponent } from '../first-page/first-page.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

import { BloodDonationComponent } from '../blood-donation/blood-donation.component';
import { OrganDonationComponent } from '../organ-donation/organ-donation.component';
import { FundRaisingComponent } from '../fund-raising/fund-raising.component';


const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  {path: 'first',component: FirstPageComponent},
  {path: 'NewsFeed', component: NewsFeedComponent},
  {path: 'SignUp', component: SignUpComponent},
  {path: 'BloodDonation', component: BloodDonationComponent},
  {path: 'OrganDonation', component: OrganDonationComponent},
  {path: 'FundRaising', component: FundRaisingComponent},

];
    

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
export class AppRoutingModule { }
