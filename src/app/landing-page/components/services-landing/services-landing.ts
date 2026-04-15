import { Component, Input, OnInit } from '@angular/core';
import { LandingPageServiceSectionInterface } from '../../../core/models/landing-page-interface';
import { enviroment } from '../../../../enviroment';
import { ButtonLink } from '../../../shared/components/button-link/button-link';

@Component({
  selector: 'app-services-landing',
  imports: [ButtonLink],
  templateUrl: './services-landing.html',
  styleUrl: './services-landing.scss',
})
export class ServicesLanding implements OnInit {
  @Input() servicesSection: LandingPageServiceSectionInterface | null | undefined = null;

  activeElement: number = 1;
  addresPage = enviroment.apiUrl;
  protected readonly enviroment = enviroment;

  ngOnInit() {}

  onChangeElement(index: number) {
    this.activeElement = index;
  }
}
