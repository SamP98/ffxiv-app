import { Injectable } from '@angular/core';
import {Character} from './character';


const CHARACTERS = [
  new Character('Samuel Legendmaker', '80', 'Red Mage'),
  new Character('Celes Figaro', '80', 'White Mage'),
  new Character('Jolie Fanglor', '80', 'Black Mage')
]

@Injectable({
  providedIn: 'root'
})
export class CharDataService {

  constructor() { }

  getCharacters() {
    return CHARACTERS;
  }
}
