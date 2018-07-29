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
    if (this.captcha === response) {
      return true;
    } else {
      this.getCaptcha();
    }
  }

}
