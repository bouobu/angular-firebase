import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable()
export class AppareilService {
  appareilsSubject = new Subject<any[]>();

  private appareils = [];
  
  constructor(private httpClient: HttpClient) { }
  
  
  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
      for(let appareil of this.appareils) {
        appareil.status = 'allumé';
      }
      this.emitAppareilSubject();
  }

  switchOffAll() {
      for(let appareil of this.appareils) {
        appareil.status = 'éteint';
        this.emitAppareilSubject();
      }
  }

  switchOnOne(i: number) {
      this.appareils[i].status = 'allumé';
      this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
      this.appareils[i].status = 'éteint';
      this.emitAppareilSubject();
  }
  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }
  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.saveAppareilsToServer();
    this.emitAppareilSubject();
    
  }
  
  saveAppareilsToServer() {
    this.httpClient
      .put('https://testangular-294d9.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://testangular-294d9.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
