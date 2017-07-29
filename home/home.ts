import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProgramPage } from '../program/program';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

searchQuery: string = '';
  items: string[];
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.initializeItems();
  
  }
 images: string[];

initializeItems() {
    this.items = [
      'Tech',
      'Art',
      'Sports',
      'Music',
      'Camp',];
   
    

    
  }
  
  getItems(ev:any) {
    // Reset items back to all of the items
    this.initializeItems();
   
    // set val to the value of the searchbar
    let val = ev.target.value;
    
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
goToProgram(){
    this.navCtrl.push(ProgramPage);
  }

}
