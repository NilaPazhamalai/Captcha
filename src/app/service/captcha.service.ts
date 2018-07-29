
import { catchError } from 'rxjs/operators/catchError';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CaptchaService {
  captchaEndPoint: string;

  constructor(
    private httpClient: HttpClient) {
    this.captchaEndPoint = 'http://localhost:8089/';
  }



  getCaptcha() {
    const urlSuffix = `get`;
    const url = `${this.captchaEndPoint}${urlSuffix}`;
    return this.httpClient.get(url).pipe(
      catchError(this.handleError<any>(`Retrieve Captcha`, {}))
    );
  }
  // Handle Error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // this.alertService.error(`${operation} failed => ${error.statusText}`);
      return of(result as T);
    };
  }
}

