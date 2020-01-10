import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Http } from '@angular/http'; 
import { User } from '../../models/user';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  users: {} | User[];
  sub: Subscription;
  errormessage: string;

  constructor(public navCtrl: NavController,public http:Http,
    public navparam : NavParams,private dataprovider:DataProvider) {
    
  }
  private getuser(){
    this.sub = this.dataprovider.getUser().subscribe(
      (res : any) => this.users = res,
      (error: any) => this.errormessage = <any> error
    )
  }
  ionViewWillEnter(){
    this.getuser();
  }
  ionViewWillLeave(){
    this.sub.unsubscribe();
  }
}
