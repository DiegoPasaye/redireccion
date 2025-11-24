import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planeta, RespuestaPlanetasDB } from '../interfaces/interfaces';
import {Firestore, collection, collectionData, doc, docData} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class Planetas {
  constructor(private http:HttpClient, private firestore:Firestore) { }

  getDatos(): Observable<Planeta[]> {
    const planetasCollection = collection(this.firestore, 'planetas');
    return collectionData(planetasCollection, {
      idField: 'id',
    }) as Observable<Planeta[]>;
  }
  getDatosById(id: string): Observable<Planeta> {
    const planetaDoc = doc(this.firestore, `planetas/${id}`);
    return docData(planetaDoc) as Observable<Planeta>;
  }
}
