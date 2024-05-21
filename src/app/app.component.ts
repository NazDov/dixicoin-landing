import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'DixieCoin';
  showLoadingAnimation: boolean = true;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{

    setTimeout(() => {
      this.showLoadingAnimation = false;
    }, 3000);

    this.languageService.initLanguage();

    this.titleService.setTitle( "DixieCoin" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Dixiecoin, crypto, token, blockchain, base, coinbase, memecoin'},
      {name: 'description', content: ''},
    ]);


    AOS.init();

  }
}
