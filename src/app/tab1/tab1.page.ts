import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ionViewWillEnter(){
    console.log('page1 - ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('page1 - ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('page1 - ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('page1 - ionViewDidLeave');
  }
}
