import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { error } from 'protractor';
// import 'rxjs/add/operator/catch';
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
            error => {
                console.log('error -------- '+ error.message)
                return error;
            }))
    }



    
    


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