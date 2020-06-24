import { Component, OnInit } from '@angular/core';

import {CharDataService} from '../char-data.service';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss'],
  providers: [CharDataService]
})
export class CharComponent implements OnInit {

  name = 'Samuel Legendmaker';
  job = "Warrior";
  level = "80";
  displayInfo = false;
  characters:

  constructor(private service: CharDataService) {}

  ngOnInit(): void {

  }

  onClick(){
    this.displayInfo = !this.displayInfo;
  }



}
