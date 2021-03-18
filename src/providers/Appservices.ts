import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { error } from 'protractor';
// import 'rxjs/add/operator/catch';
// import { HTTP } from '@ionic-native/http/ngx';

@Injectable()

// username: falmashi
// password: 123456789
// {'Authorization': 'Basic ZmFsbWFzaGk6MTIzNDU2Nzg5'}


export class AppService {

    constructor(
        private http: HttpClient,
        //  private http2: HTTP
         ){

    }



    // private handleError(error: HttpErrorResponse) {
    //     if (error.error instanceof ErrorEvent) {
    //       // A client-side or network error occurred. Handle it accordingly.
    //       console.error('An error occurred:', error.error.message);
    //     } else {
    //       // The backend returned an unsuccessful response code.
    //       // The response body may contain clues as to what went wrong.
    //       console.error(
    //         `Backend returned code ${error.status}, ` +
    //         `body was: ${error.error}`);
    //     }
    //     // Return an observable with a user-facing error message.
    //     return throwError(
    //       'Something bad happened; please try again later.');
    //   }



    ayah_tafseer(surahNumber: string, ayahNumber: string){
        const url = 'https://api.quran.sutanlab.id/surah' + '/' + surahNumber + '/' + ayahNumber
        const headers = new HttpHeaders();
        headers.append('Accept', 'application/JSON');

        return this.http.get(url , {
            headers,
            responseType: 'text'
        }).pipe(map(
            res => {
                const res2 = JSON.parse(res);
                console.log('response_servce', res2);
                localStorage.setItem('number', res2.data.number);
                localStorage.setItem('meta', res2.data.meta);
                localStorage.setItem('text', res2.data.text.arab);
                console.log('aya text', localStorage.getItem('text'));

                localStorage.setItem('translation', res2.data.translation.en);
                localStorage.setItem('audio', res2.data.audio);
                localStorage.setItem('tafsir', res2.data.tafsir);
                localStorage.setItem('surah', res2.data.surah);
            },
        //     catchError(this.handleError)
        // ))
            error => {
                console.log('error -------- '+ error.message)
                return error;
            }))
    }



    // signin_ercab(user_name: string, password: string) {
    //     this.http3.setDataSerializer("json");
    //     return this.http3
    //       .post(
    //         config.loginErcab,
    //         { user_name, password },
    //         {
    //           "Content-Type": "application/JSON",
    //           // Authorization: localStorage.getItem("tokenOfErcab")
    //         }
    //       ).then(data1 => {
    
    //         console.log("result");
    
    //         var token = data1.data;
    //         console.log('token', token);
    
    //         var decoded = jwt_decode(token);
    
    //         console.log('decoded', decoded);
    //         console.log('permissions', decoded.permissions);
    
    //         localStorage.setItem("permissionsArray1", decoded.permissions);
    //         console.log(localStorage.getItem("permissionsArray1"));
    //         return JSON.parse(data1.data);
    
    //       })
    //       .catch(error => {
    //         console.log("error");
           
    //       });
    //   }





    
    // train_http(){
    //     const url = 'https://api.quran.sutanlab.id/surah' + '/' + '112' + '/' + '1'

    //     const url2 = 'https://jsonplaceholder.typicode.com/todos/1'

    //     this.http2.get(url2, {}, {'Content-Type': 'application/json'})
    //     .then(resp => {
      
    //       console.log(resp.status);
    //       console.log(resp.data); // data received by server
    //       console.log(resp.headers);
    //       return resp.data
      
    //     })
    //     .catch(error => {
      
    //       console.log(error.status);
    //       console.log(error.error); // error message as string
    //       console.log(error.headers);
      
    //     });
    // }
    



    
    


    // ayah_tafseer(surahNumber: string, ayahNumber: string){
    //     const url = 'https://api.quran.sutanlab.id/surah' + '/' + surahNumber + '/' + ayahNumber
    //     const headers = new HttpHeaders();
    //     headers.append('Accept', 'application/JSON');
    //     return this.http.get(url , {
    //         headers,
    //         responseType: 'text'
    //     }).pipe(map(res => {
    //         const res2 = JSON.parse(res);
    //         console.log('response_servce', res2);
    //         localStorage.setItem('number', res2.data.number);
    //         localStorage.setItem('meta', res2.data.meta);
    //         localStorage.setItem('text', res2.data.text.arab);
    //         console.log('aya text', localStorage.getItem('text'));

    //         localStorage.setItem('translation', res2.data.translation.en);
    //         localStorage.setItem('audio', res2.data.audio);
    //         localStorage.setItem('tafsir', res2.data.tafsir);
    //         localStorage.setItem('surah', res2.data.surah);
    //     }));
    // }



    
}