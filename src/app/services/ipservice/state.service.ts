import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private iconState: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(
    private httpClient: HttpClient
  ) { }


  getIPAddress(){
    return this.httpClient.get("http://api.ipify.org/?format=json");
  }

  setIconState(show: boolean) {
    this.iconState.next(show);
  }

  getIconState() {
    return this.iconState;
  }

}
