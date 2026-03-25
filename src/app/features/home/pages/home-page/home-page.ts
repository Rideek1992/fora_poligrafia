import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  elementsNumber: number = 100;

  items = Array.from({ length: this.elementsNumber }, (_, i) => i + 1);
}
