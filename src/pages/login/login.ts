import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RegistrarPage} from '../registrar/registrar';
import { AngularFireAuth } from 'angularfire2/auth';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToTabsPage7(){
    this.navCtrl.push(RegistrarPage);
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['Ok']
    }).present();
  }


  signIn(){
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
    .then( data =>{
      console.log('got some data', this.fire.auth.currentUser);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot( PerfilPage );
    })
    .catch( error =>{
      console.log('got an error', error);
      this.alert(error.message);
    })
    console.log('Would sign in with', this.uname.value, this.password.value);
  }

  

 /* singIn()  {
    if(this.uname.value == "admin" && this.password.value == "admin") {  
      let alert = this.alertCtrl.create({
      title: 'Login Successful!',
      subTitle: 'Your are logged in',
      buttons: ['OK']
    });
    alert.present();
  }
  
} */
  /* register(){
    this.navCtrl.push(RegistrarPage);
  } */


}


  


