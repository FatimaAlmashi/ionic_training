import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { AppService } from '../../providers/Appservices';
import { HttpClient } from '@angular/common/http';
import { tafseerModel } from '../../Models/tafseerModel';
import { error } from 'protractor';
// import { error } from 'protractor';
// import { NativeAudio } from '@ionic-native/native-audio/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  tafseerForm: FormGroup;
  surahNumber: AbstractControl;
  ayahNumber: AbstractControl;
  service: any;
  public tafseerModel: tafseerModel;
  ayahText: any;
  ayahTranslation: any;
  // surahIsNum = false;
  // ayahIsNum = false;

  constructor(private formBuilder:FormBuilder, _service: AppService, private http: HttpClient) {
    this.tafseerForm = formBuilder.group({
      surahNumber: ['', Validators.compose([Validators.required, Validators.maxLength(3)])],
      ayahNumber: ['', Validators.compose([Validators.required, Validators.maxLength(3)])],
    });

    this.surahNumber= this.tafseerForm.controls.surahNumber
    // if(typeof(this.surahNumber)=='number'){
    //   this.surahIsNum = true
    // }
    this.ayahNumber= this.tafseerForm.controls.ayahNumber
    // if(typeof(this.ayahNumber)=='number'){
    //   this.ayahIsNum = true
    // }
    this.service = _service

  }



  async showAyay(){
     await this.getTafseer()
    //  this.ayahText = "۝ "+this.tafseerModel.text + " ۝"
    //  this.ayahTranslation = this.tafseerModel.translation
  }


   getTafseer(){
    this.service.ayah_tafseer(this.surahNumber.value, this.ayahNumber.value).subscribe(
      response2 => {
        console.log('response2' , response2);
        this.tafseerModel = new tafseerModel();
        this.tafseerModel.number = localStorage.getItem('number');
        this.tafseerModel.meta = localStorage.getItem('meta');
        this.tafseerModel.text = localStorage.getItem('text');
        this.tafseerModel.translation = localStorage.getItem('translation');
        this.tafseerModel.audio = localStorage.getItem('audio');
        this.tafseerModel.tafsir = localStorage.getItem('tafsir');
        this.tafseerModel.surah = localStorage.getItem('surah');
        console.log('aya text2', localStorage.getItem('text'));
        this.ayahText = this.tafseerModel.text;
        this.ayahTranslation = this.tafseerModel.translation;
      },
      error => console.log(error.message)
    );
   }


   




   



  // getAudio(){
  //   this.nativeAudio.preloadSimple('uniqueId1', 'path/to/file.mp3').then(onSuccess, onError);
  //   this.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(onSuccess, onError);

  //   this.nativeAudio.play('uniqueId1').then(onSuccess, onError);

  //   // can optionally pass a callback to be called when the file is done playing
  //   this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));

  //   this.nativeAudio.loop('uniqueId2').then(onSuccess, onError);

  //   this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess,onError);

  //   this.nativeAudio.stop('uniqueId1').then(onSuccess,onError);

  //   this.nativeAudio.unload('uniqueId1').then(onSuccess,onError);
  // }

  onSubmit() {
    if (this.tafseerForm.valid) {
      this.showAyay();
    }
  }

















  // ayah_tafseer(surahNumber: string, ayahNumber: string){
  //   const testUrl = 'https://api.quran.sutanlab.id/surah/2/255';
  //   // const url = config.specificAyah + '/' + surahNumber + '/' + ayahNumber
  //   const url = 'https://api.quran.sutanlab.id/surah' + '/' + surahNumber + '/' + ayahNumber

  //   // const res = this.http.get(url, {}).subscribe(res => {
  //   //     console.log(res)
  //   //   });

  //   const res = this.http.get(url, {}).subscribe(res => {
  //       console.log(res)



  //     });


    // const res = this.http.get(loginUrl + 'user_name=' + 'fatima' + '&password=' + '12345566376', {}).subscribe(res => {
    //   console.log(res)
    // });

    // const headers = new HttpHeaders();
    // headers.append('Access-Control-Allow-Origin', '*');

    // const res = this.http.get(url, {
    //   headers,
    //   responseType: 'text'
    // })

    // console.log('-------------------------')
    // console.log(res.subscribe(res2 => console.log(res2)))
  // .subscribe(res => {
  //     console.log(res)
  //   });

    // .pipe(map((response: any) => {
    //   console.log(response)
    //   response.json()
    // }));

  // }


  
  // ayah_tafseer(surahNumber: number, ayahNumber: number){
  //   console.log('>>>>>>> ayah_tafseer');
  //   const url = config.tafseerUrl + '/' + 1 + '/' + 1 + '/' + 1


  //   const headers = new HttpHeaders()
  //   .append('Content-Type', 'application/json')
  //   .append('Access-Control-Allow-Headers', 'Content-Type')
  //   .append('Access-Control-Allow-Methods', 'GET')
  //   .append('Accept','application/json')
  //   .append('content-type','application/json')
  //   .append('Access-Control-Allow-Origin', '*');


  //   this.http.get(url, {headers}).pipe(map(data => {})).subscribe(result => {
  //     console.log(result);
  //   });




    // const headers = new HttpHeaders()
    // .append('Content-Type', 'application/json')
    // .append('Access-Control-Allow-Headers', 'Content-Type')
    // .append('Access-Control-Allow-Methods', 'GET')
    // .append('Accept','application/json')
    // .append('content-type','application/json')
    // .append('Access-Control-Allow-Origin', '*');
    // console.log('\n\nheaders = ' + headers['Access-Control-Allow-Origin']+'\n\n\n')
    // return this.http.get(config.tafseerUrl + '/' + 1 + '/' + 1 + '/' + 1 ,{headers: headers}).subscribe((res) => {
    //     console.log(res);
    //     // return res;
    // });



  // }
}
