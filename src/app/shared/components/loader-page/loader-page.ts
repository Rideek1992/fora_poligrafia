import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-page',
  imports: [],
  templateUrl: './loader-page.html',
  styleUrl: './loader-page.scss',
})
export class LoaderPage implements OnInit {
  timeout: number = 4000;
  openInformation: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.openInformation = true;
    }, this.timeout);
  }
}
