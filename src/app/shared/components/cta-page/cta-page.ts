import { Component, Input } from '@angular/core';
import { CtaSectionInterface } from '../../../core/models/cta-section-interface';
import { ButtonLink } from '../button-link/button-link';

@Component({
  selector: 'app-cta-page',
  imports: [ButtonLink],
  templateUrl: './cta-page.html',
  styleUrl: './cta-page.scss',
})
export class CtaPage {
  @Input() ctaData!: CtaSectionInterface | null | undefined;
}
