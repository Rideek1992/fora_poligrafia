import { Component, Input } from '@angular/core';
import { LandingPagePortfolioSectionInterface } from '../../../core/models/landing-page-interface';
import { enviroment } from '../../../../enviroment';
import { ButtonLink } from '../../../shared/components/button-link/button-link';

@Component({
  selector: 'app-portfolio-landing',
  imports: [ButtonLink],
  templateUrl: './portfolio-landing.html',
  styleUrl: './portfolio-landing.scss',
})
export class PortfolioLanding {
  @Input() portfolioData!: LandingPagePortfolioSectionInterface | null | undefined;

  addresUrl = enviroment.apiUrl;
}
