import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { TabsPage } from '../tabs/tabs';
import { SingupPage } from '../singup/singup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  

  constructor(public navCtrl: NavController) {
       
  }
  


}
