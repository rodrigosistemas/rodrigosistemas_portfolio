import { EventEmitter, Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private showedCard:EventEmitter<Card> = new EventEmitter<Card>();

  constructor() { 
    
  }

}

