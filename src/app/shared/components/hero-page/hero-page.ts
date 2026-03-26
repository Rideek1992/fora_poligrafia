import { Component, Input } from '@angular/core';
import { HeroSectionInterface } from '../../../core/models/hero-section-interface';
import { enviroment } from '../../../../enviroment';
import { ButtonLink } from '../button-link/button-link';

@Component({
  selector: 'app-hero-page',
  imports: [ButtonLink],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.scss',
})
export class HeroPage {
  @Input() isLoading: boolean | undefined = false;
  @Input() heroData: HeroSectionInterface | null | undefined = null;
  private env = enviroment;
  photoAddres = this.env.apiUrl;
}
