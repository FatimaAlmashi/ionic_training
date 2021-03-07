import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { AppService } from '../../providers/Appservices';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import config from '../../providers/config';
import { map } from 'rxjs/operators';
import { tafseerModel } from '../../Models/tafseerModel';




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


  constructor(private formBuilder:FormBuilder, _service: AppService, private http: HttpClient) {
    this.tafseerForm = formBuilder.group({
      surahNumber: ['', Validators.compose([Validators.required, Validators.maxLength(3)])],
      ayahNumber: ['', Validators.compose([Validators.required, Validators.maxLength(3)])],
    });

    this.surahNumber= this.tafseerForm.controls.surahNumber
    this.ayahNumber= this.tafseerForm.controls.ayahNumber
    this.service = _service

  }

  async getTafseer(){
    const res = await this.service.ayah_tafseer(this.surahNumber.value,this.ayahNumber.value)
    console.log('------------- back to getTafseer -------------')

    console.log('=========>>>>> '+ res["message"]) 
    console.log('=========>>>>> '+ res["code"]) 

    // localStorage.setItem('number', res.data.number)
    // localStorage.setItem('meta', res.data.meta)
    // localStorage.setItem('text', res.data.text)
    // localStorage.setItem('translation', res.data.translation)
    // localStorage.setItem('audio', res.data.audio)
    // localStorage.setItem('tafsir', res.data.tafsir)
    // localStorage.setItem('surah', res.data.surah)

    // this.tafseerModel = new tafseerModel();
    // this.tafseerModel.number = res.data.number
    // this.tafseerModel.meta = res.data.meta
    // this.tafseerModel.text = res.data.text
    // this.tafseerModel.translation = res.data.translation
    // this.tafseerModel.audio = res.data.audio
    // this.tafseerModel.tafsir = res.data.tafsir
    // this.tafseerModel.surah = res.data.surah
  
    // console.log('this.tafseerModel.text = '+ this.tafseerModel.text)



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
