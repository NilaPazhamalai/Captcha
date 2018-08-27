import { HttpClientModule } from '@angular/common/http';
import { CaptchaService } from './service/captcha.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MathLogicModelComponent } from './captchaModel/math-logic-model/math-logic-model.component';


@NgModule({
  declarations: [
    AppComponent,
    MathLogicModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CaptchaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
