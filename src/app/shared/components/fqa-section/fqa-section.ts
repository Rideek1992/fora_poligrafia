import { Component, Input, OnInit } from '@angular/core';
import { FQAElement } from '../../../core/models/FQA-section-interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-fqa-section',
  imports: [NgIf],
  templateUrl: './fqa-section.html',
  styleUrl: './fqa-section.scss',
})
export class FqaSection implements OnInit {
  @Input() fqaData: FQAElement[] | undefined = [];

  activeFQA: number = -1;

  getFQA(index: number) {
    if (this.activeFQA === index) {
      this.activeFQA = -1;
      return;
    }
    this.activeFQA = index;
  }

  ngOnInit() {}
}
