import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  email: string;

  constructor(private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.email = fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
