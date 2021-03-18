import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { AppService } from '../../providers/Appservices'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-train',
  templateUrl: './train.page.html',
  styleUrls: ['./train.page.scss'],
})
export class TrainPage implements OnInit {

  requestObject: any = null;
  service: any;
  data: any;
  jsonTest = {'name': 'fatima', 'id': 172635172}
  dateTest = "4-4-2020"
  inputName = ''
  public btnStyle = {
    color: "black",
    fontSize: "30px"
  }
  jsonStyle = false
  tryEventText = "??????"




  constructor(_service: AppService, public loadingController: LoadingController) { 
    this.service = _service
  }

  ngOnInit() {
    this.changeColor()
  }


  tryEvent(event){
    console.log(event.target.value)
    this.tryEventText = event.type
  }

  async changeColor(){
    while (true) {
      await this.delay(300);
      if (this.jsonStyle){ this.jsonStyle = false }
      else{ this.jsonStyle = true }
    }
  }
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  getRequest(){
    // this.data = this.service.train_http()
    this.presentLoadingCustom();
    this.data = 'hello'
    console.log(this.data)
  }

  async  presentLoadingCustom() {
    const loadingController = document.querySelector('ion-loading-controller');
    // await loadingController.componentOnReady();
    const loadingElement = await this.loadingController.create({
      message: '...جاري التحميل',
      spinner: 'dots',
      duration: 2000,
      cssClass: 'alertstyle',
    });
    return await loadingElement.present();
  }

}
