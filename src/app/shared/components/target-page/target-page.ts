import { Component, Input } from '@angular/core';
import { TargetSectionInterface } from '../../../core/models/target-section-interface';

@Component({
  selector: 'app-target-page',
  imports: [],
  templateUrl: './target-page.html',
  styleUrl: './target-page.scss',
})
export class TargetPage {
  @Input() targetData!: TargetSectionInterface | null | undefined;

  activeElement: number = 0;

  changeElement(index: number) {
    this.activeElement = index;
  }
}
