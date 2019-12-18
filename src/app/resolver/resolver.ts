// resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Injectable()
export class Resolver implements Resolve<Observable<string>> {
  constructor(private AppareilService: AppareilService) { }

  resolve() {
    return this.AppareilService.getAppareilsFromServer();
  }
}