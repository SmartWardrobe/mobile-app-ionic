import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'; 
import { GlobalProvider } from "../../providers/global/global";
/**
 * Generated class for the CombinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-combine',
  templateUrl: 'combine.html',
})
export class CombinePage {
  public photobottom: any; // photobottom.filename ile fotografin ismine ulasabilirsin.
  public phototop: any;
  public result: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private readonly http: Http,
              public global: GlobalProvider) {
    this.loadCombine();
  }

  loadCombine() {
    let username = this.global.user_info.username;
    let link = `https://gardrop-api.herokuapp.com/v1/combine/${username}`;
    this.http.get(link)
      .map(res => res.json())
      .subscribe(data => {
        this.result = data; // 200 donduruyor
        this.photobottom = data["bottom"];
        this.phototop = data["top"];
        console.log(this.result);
      },error => {
        console.log("Erorrr!");
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CombinePage');
  }
}
