import { Component, Input } from '@angular/core';
import { MiniHeroSectionInterface } from '../../../core/models/mini-hero-section-interface';
import { enviroment } from '../../../../enviroment';
import { ButtonLink } from '../button-link/button-link';

@Component({
  selector: 'app-mini-hero-page',
  imports: [ButtonLink],
  templateUrl: './mini-hero-page.html',
  styleUrl: './mini-hero-page.scss',
})
export class MiniHeroPage {
  @Input() miniHeroData!: MiniHeroSectionInterface | null | undefined;
  private env = enviroment;
  urlAddres = this.env.apiUrl;
}
