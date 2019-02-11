import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  ionViewWillEnter(){
    console.log('page2 - ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('page2 - ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('page2 - ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('page2 - ionViewDidLeave');
  }
}
