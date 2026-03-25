import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuDesctop } from './layout/menu-desctop/menu-desctop';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuDesctop, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('web');
}
