import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cards: Card[] = [];

  public addName(firstName: HTMLInputElement, lastName: HTMLInputElement) {
    const card = new Card(firstName.value, lastName.value);

    firstName.value = '';
    lastName.value = '';

    this.cards.push(card);
  }


  get sorted() {
    return this.cards.sort((a, b) => b.votes - a.votes);
  }
}
