import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {
  public user_info:any;

  constructor(public http: HttpClient) {
    console.log('Hello GlobalProvider Provider');
    this.user_info = {}
    this.user_info.pics = []
  }

}
