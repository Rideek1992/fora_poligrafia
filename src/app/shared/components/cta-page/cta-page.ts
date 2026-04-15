import { Component, Input, OnInit } from '@angular/core';
import { CtaSectionInterface } from '../../../core/models/cta-section-interface';
import { ButtonLink } from '../button-link/button-link';
import { LanindgPageCTASectionInterface } from '../../../core/models/landing-page-interface';

@Component({
  selector: 'app-cta-page',
  imports: [ButtonLink],
  templateUrl: './cta-page.html',
  styleUrl: './cta-page.scss',
})
export class CtaPage implements OnInit {
  @Input() ctaData: CtaSectionInterface | null | undefined;

  @Input() ctaLanding: LanindgPageCTASectionInterface | null | undefined;

  ngOnInit() {}
}
