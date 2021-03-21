import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { AppService } from '../../providers/Appservices'
import { LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { insertNewCitizenIdeaModel } from '../../Models/insertNewCitizenIdeaModel'

@Component({
  selector: 'app-train',
  templateUrl: './train.page.html',
  styleUrls: ['./train.page.scss'],
})
export class TrainPage implements OnInit {


  insertNewCitizenIdeaForm: FormGroup;
  name: AbstractControl;
  email: AbstractControl;
  phone: AbstractControl;
  title: AbstractControl;
  description: AbstractControl;
  recipient: AbstractControl;
  
  service: any;
  resp: any;

  public inNeCiIdModel: insertNewCitizenIdeaModel;

  



  constructor(_service: AppService, private fb:FormBuilder, public loadingController: LoadingController) { 

    this.service = _service
    this.insertNewCitizenIdeaForm = fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      recipient: ['', Validators.compose([Validators.required])],
    });

    this.name= this.insertNewCitizenIdeaForm.controls.name
    this.email= this.insertNewCitizenIdeaForm.controls.email
    this.phone= this.insertNewCitizenIdeaForm.controls.phone
    this.title= this.insertNewCitizenIdeaForm.controls.title
    this.description= this.insertNewCitizenIdeaForm.controls.description
    this.recipient= this.insertNewCitizenIdeaForm.controls.recipient

  }


  // requestObject: any = null;
  // data: any;
  // jsonTest = {'name': 'fatima', 'id': 172635172}
  // dateTest = "4-4-2020"
  // inputName = ''
  // public btnStyle = {
  //   color: "black",
  //   fontSize: "30px"
  // }
  // jsonStyle = false
  // tryEventText = "??????"

  ngOnInit() {
    // this.changeColor()
  }

  onSubmit(){

    console.log('\n\n\n\n>>>>>>>>>>>>>onSubmit')
    this.inNeCiIdModel = new insertNewCitizenIdeaModel();
    this.inNeCiIdModel.NAME = this.name
    this.inNeCiIdModel.EMAIL = this.email
    this.inNeCiIdModel.PHONE = this.phone
    this.inNeCiIdModel.TITLE = this.title
    this.inNeCiIdModel.RECIPIENT = this.recipient
    this.inNeCiIdModel.DESCRIPTION = this.description

    this.resp = this.service.insertNewCitizenIdea(this.inNeCiIdModel)


    this.service.insertNewCitizenIdea(this.inNeCiIdModel).then(
      (response) => {
        console.log('response = '+ response);
        this.resp = response.msg;
        switch (this.resp.CODE) {
          case '100':
            console.log('_______100_______');
            break;
          case '200':
            console.log('_______200_______');
            break;
          case '300':
            console.log('_______300_______');
            break;
        }
      },
      (error) => {
        console.log('_______ERROR_______');
        console.log(error);

      }
  );



  }





  // tryEvent(event){
  //   console.log(event.target.value)
  //   this.tryEventText = event.type
  // }

  // async changeColor(){
  //   while (true) {
  //     await this.delay(300);
  //     if (this.jsonStyle){ this.jsonStyle = false }
  //     else{ this.jsonStyle = true }
  //   }
  // }
  
  // delay(ms: number) {
  //   return new Promise( resolve => setTimeout(resolve, ms) );
  // }

  // getRequest(){
  //   // this.data = this.service.train_http()
  //   this.presentLoadingCustom();
  //   this.data = 'hello'
  //   console.log(this.data)
  // }

  // async  presentLoadingCustom() {
  //   const loadingController = document.querySelector('ion-loading-controller');
  //   // await loadingController.componentOnReady();
  //   const loadingElement = await this.loadingController.create({
  //     message: '...جاري التحميل',
  //     spinner: 'dots',
  //     duration: 2000,
  //     cssClass: 'alertstyle',
  //   });
  //   return await loadingElement.present();
  // }

}
