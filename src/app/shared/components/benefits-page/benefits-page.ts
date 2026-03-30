import { Component, Input } from '@angular/core';
import { BenefitSectionInterface } from '../../../core/models/benefit-section-interface';
import { InViewDirective } from '../../directives/in-view.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-benefits-page',
  imports: [InViewDirective, NgClass],
  templateUrl: './benefits-page.html',
  styleUrl: './benefits-page.scss',
})
export class BenefitsPage {
  @Input() benefitsData!: BenefitSectionInterface | null | undefined;
  @Input() formatSection?: string;

  activeBenefit: number = 0;

  changeBenefit(index: number) {
    this.activeBenefit = index;
  }
}
