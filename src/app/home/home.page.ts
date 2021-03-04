import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { AppService } from '../../providers/Appservices';

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

  constructor(private formBuilder:FormBuilder, _service: AppService) {
    this.tafseerForm = formBuilder.group({
      surahNumber: ['', Validators.compose([Validators.required, Validators.maxLength(3)])],
      ayahNumber: ['', Validators.compose([Validators.required, Validators.maxLength(3)])],
    });

    this.surahNumber= this.tafseerForm.controls.surahNumber
    this.ayahNumber= this.tafseerForm.controls.ayahNumber
    this.service = _service

  }

  getTafseer(){
    console.log(this.surahNumber.value)
    console.log(this.ayahNumber.value)
    this.service.ayah_tafseer(this.surahNumber.value,this.ayahNumber.value)
  }
}
