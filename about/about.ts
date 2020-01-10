import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  camera64: any;
  postdata: any = {};

  constructor(public navCtrl: NavController, private camera: Camera
    , public navparam: NavParams, public http: HttpClient) {

  }
  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.camera64 = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {

    });
  }
  openGalery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }
    this.camera.getPicture(options).then((imageData) => {

    }, (err) => {

    });
  }

  //saveup server
  save() {
    let url = 'http://localhost:5050/api/insert/profile';
    let postdataset = new FormData();
    postdataset.append('names', this.postdata.name);
    postdataset.append('city', this.postdata.city);
    postdataset.append('call', this.postdata.call);
    postdataset.append('career', this.postdata.career);
    postdataset.append('photo', this.postdata.photo);

    let callback: Observable<any> = this.http.post(url, postdataset);
    callback.subscribe(call => {
      if (call.status == 200) {
        alert(call.msg);
      } else {
        alert(call.msg);
      }
    });
  }

}
