import { Component, Input, OnInit } from '@angular/core';
import { enviroment } from '../../../../enviroment';
import { LandingPageHeroSectionInterface } from '../../../core/models/landing-page-interface';
import { ButtonLink } from '../../../shared/components/button-link/button-link';

@Component({
  selector: 'app-hero-landing',
  imports: [ButtonLink],
  templateUrl: './hero-landing.html',
  styleUrl: './hero-landing.scss',
})
export class HeroLanding implements OnInit {
  @Input() heroData: LandingPageHeroSectionInterface | null | undefined = null;

  adressUIrl = enviroment.apiUrl;

  ngOnInit() {}
}
