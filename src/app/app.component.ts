import { CaptchaService } from './service/captcha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CAPTCHA';
  captcha: string;
  captchaID: string;
  success = false;
  show = false;

  num1: number;
  num2: number;

  constructor(private captchaService: CaptchaService) {

  }
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.getCaptcha();
  }
  getCaptcha() {
    this.captchaService.getCaptcha().subscribe(
      (cap) => {
        console.log(cap);
        this.captcha = cap.value;
        this.captchaID = cap.id;
      }
    );
  }
  checkResponse(response) {
    console.log(response);
    if (this.captcha === response) {
      this.success = true;
    } else {
      this.getCaptcha();
    }
  }

showBlock(event) {
  this.show = !this.show;
  console.log(event);
  this.num1 = event['offsetX'] % 3;
  this.num2 = event['offsetY'] % 3;
}

checkResponseMath(response) {
  console.log(response);
  if (this.num1 + this.num2 === response) {
    this.success = true;
  } else {
    this.getCaptcha();
  }
}

}
