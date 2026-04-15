import { Component, Input } from '@angular/core';
import { LaningPageFQASectionInterface } from '../../../core/models/landing-page-interface';

@Component({
  selector: 'app-fqa-landing',
  imports: [],
  templateUrl: './fqa-landing.html',
  styleUrl: './fqa-landing.scss',
})
export class FqaLanding {
  @Input() fqaData: LaningPageFQASectionInterface | null | undefined = null;

  activeFQA: number = -1;

  openFQA(index: number) {
    if (this.activeFQA === index) {
      this.activeFQA = -1;
      return;
    }
    this.activeFQA = index;
  }
}
