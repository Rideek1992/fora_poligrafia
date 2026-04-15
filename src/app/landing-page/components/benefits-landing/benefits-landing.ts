import { Component, Input } from '@angular/core';
import { LandingPageBenefitsSectionInterface } from '../../../core/models/landing-page-interface';

@Component({
  selector: 'app-benefits-landing',
  imports: [],
  templateUrl: './benefits-landing.html',
  styleUrl: './benefits-landing.scss',
})
export class BenefitsLanding {
  @Input() benefitsData!: LandingPageBenefitsSectionInterface | null | undefined;

  activeBenefit: number = 0;

  changeBenefit(index: number) {
    this.activeBenefit = index;
  }
}
