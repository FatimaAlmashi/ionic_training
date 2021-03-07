import {Injectable} from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import config from './config';

@Injectable()

export class AppService {

    constructor(private http: HttpClient){

    }







    ayah_tafseer(surahNumber: string, ayahNumber: string){


        const url = 'https://api.quran.sutanlab.id/surah' + '/' + surahNumber + '/' + ayahNumber 
        
        const headers = new HttpHeaders();
        headers.append('Accept', 'application/JSON');
        return this.http.get(url , {
            headers,
            responseType: 'text'
        }).subscribe(res => {
            JSON.parse(res);
            console.log('........... '+res);    
            console.log('........... '+res["code"]);    
            
            
        });

        // const testUrl = 'https://api.quran.sutanlab.id/surah/2/255';
        // const url = 'https://api.quran.sutanlab.id/surah' + '/' + surahNumber + '/' + ayahNumber    
        // const res = this.http.get(url, {}).subscribe(res => {
        //     console.log(res)
        //     return res
        //   });
        
    }
          





    // ayah_tafseer(surahNumber: string, ayahNumber: string){

    //     // const headers = new HttpHeaders();
    //     // headers.append('Access-Control-Allow-', 'application/JSON');
    //     // return this.http.get(config.tafseerUrl + '/' + +surahNumber + '/' + +ayahNumber, {
    //     //     headers,
    //     //     responseType: 'text'
    //     // }).subscribe(data => JSON.parse(data));


    //     console.log('>>>>>>> ayah_tafseer');
    //     const headers = new HttpHeaders()
    //     .append('Content-Type', 'application/json')
    //     .append('Access-Control-Allow-Headers', 'Content-Type')
    //     .append('Access-Control-Allow-Methods', 'GET')
    //     .append('Access-Control-Allow-Origin', '*');

    //     return this.http.get(config.tafseerUrl + '/' + 1 + '/' + surahNumber + '/' + ayahNumber , {headers: headers, responseType: 'text'}).subscribe((res) => {
    //         console.log(res);
    //         return res;
    //     });






    //     // const params = new HttpParams()
    //     // .set('tafseer_id', "1")
    //     // .set('sura_number', "1")
    //     // .set('ayah_number', "1");

    //     // console.log(
    //     //     this.http.get(config.tafseerUrl, {params})
    //     //     .subscribe(res => {
    //     //         console.log('>>>>>>>>>>>>>>> res: '+ res)  
    //     //       })
    //     //     )

    //     // console.log(
    //     //     this.http.get(config.tafseerUrl+'/1/1/1')
    //     //         .subscribe(res => {
    //     //             console.log('>>>>>>>>>>>>>>> res: '+ res)  
    //     //           })
    //     //         )


    //     // const headers = new HttpHeaders();
    //     // headers.append('Accept', 'application/JSON');
    //     // return this.http.get('http://api.quran-tafseer.com/tafseer/1/3/1', {headers,responseType: 'text'}).subscribe(data => {
    //     //     console.log(data)
    //     // }
        
    //     // );
        

    //     // const headers = new HttpHeaders();
    //     // headers.append('Accept', 'application/JSON');
    //     // return this.http.get(config.tafseerUrl + '/' + +surahNumber + '/' + +ayahNumber, {
    //     //     headers,
    //     //     responseType: 'text'
    //     // }).subscribe(data => JSON.parse(data));



    //     // const headers = new HttpHeaders();
    //     // headers.append('Accept', 'application/JSON');
    //     // return this.http.get(config.tafseerUrl + '/' + +surahNumber + '/' + +ayahNumber, {
    //     //     headers,
    //     //     responseType: 'text'
    //     // }).map(data => JSON.parse(data));


        


    //     // const res = this.http.get(config.tafseerUrl + '/' + 1 + '/' + +surahNumber + '/' + +ayahNumber,{}).subscribe(res => {
    //     //     console.log('>>>>>>>>>>>>>>> res: '+ res)  
    //     //   });

    //     // const res = this.http.get(config.tafseerUrl , {tafseer_id: 1, sura_number: 1, ayah_number: 1}, {}).subscribe(res => {
    //     //     console.log(res)
    //     //   });
    //     // }



    //     // return this.http2.post(config.ActionUrl, this.getNoticeCloseObject(AC), { 'Content-Type': 'application/x-www-form-urlencoded', Authorization: localStorage.getItem('token') })
    //     //     .then(data => {
    //     //         console.log('result--------');

    //     //         console.log(AC);
    //     //         console.log('result');
    //     //         console.log(data.status);
    //     //         console.log(data.data); // data received by server
    //     //         console.log(data.headers);
    //     //         return JSON.parse(data.data);
    //     //     })
    //     //     .catch(error => {
    //     //         console.log('error');
    //     //         console.log(error);
    //     //         console.log(error.error); // error message as string
    //     //         console.log(error.headers);
    //     //     });


    // }


}