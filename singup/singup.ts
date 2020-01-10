import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the SingupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {

  postdata:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public httpCl:HttpClient) {
  }

  singup(){
      let url = 'http://localhost/test-api/comado/apisingup.php';
      let postdataset = new FormData();
      postdataset.append('name',this.postdata.name);
      postdataset.append('pass',this.postdata.password);
      postdataset.append('email',this.postdata.email);

      let callback:Observable<any> = this.httpCl.post(url,postdataset);
       callback.subscribe(call =>{
         if(call.status == 200){
           alert(call.msg);
         }else{
           alert(call.msg);
         }
       });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingupPage');
  }

}
