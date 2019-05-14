import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from '../news-feed/news-feed.component';
import { FirstPageComponent } from '../first-page/first-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  {path: 'first',component: FirstPageComponent},
  {path: 'NewsFeed', component: NewsFeedComponent}
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
