import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController ,private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value)
    .then(data => {
    console.log('got data', data);
    this.alert('Registered');
    })
    .catch(error =>{ 
    console.log('got an eror', error);
    this.alert(error.message);
   });
    
    console.log('Would register user with', this.uname.value, this.password.value);
     }

}
