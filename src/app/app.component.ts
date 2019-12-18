import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  
  secondes: number;
  counterSubscription: Subscription;

  constructor(private appareilService: AppareilService) {
    
  }
  ngOnInit() {
   
  }
  ngOnDestroy() {
    
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/