import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  pseudo = '';
  difficulty = '';
  save = false;
  gameStart = false;
  error = '';
  nextQuestion = false;
  constructor() {}

  ngOnInit(): void {
    this.nextQuestion = false;
  }

  start() {
    this.error = '';
    if (this.pseudo.length < 3 || this.difficulty === undefined){
      this.error = 'Veuillez rentrer un pseudo et une difficulté';
      return;
    }
    this.gameStart = true;
  }

  answer(response: string) {
    console.log(response);
    this.nextQuestion = true;
  }


}
