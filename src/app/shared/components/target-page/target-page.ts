import { Component, Input } from '@angular/core';
import { TargetSectionInterface } from '../../../core/models/target-section-interface';
import { NgClass } from '@angular/common';
import { enviroment } from '../../../../enviroment';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-target-page',
  imports: [NgClass, MarkdownComponent],
  templateUrl: './target-page.html',
  styleUrl: './target-page.scss',
})
export class TargetPage {
  @Input() targetData!: TargetSectionInterface | null | undefined;
  @Input() formatSection?: string;

  activeElement: number = 0;
  photoActiveNumber: number = 1;

  private env = enviroment;
  photoAddres = this.env.apiUrl;

  changeElement(index: number) {
    this.activeElement = index;
  }

  changePhotoActive(index: number) {
    this.photoActiveNumber = index;
  }
}
