import { Component, Input } from '@angular/core';
import { LandingPageTargetSectionInterface } from '../../../core/models/landing-page-interface';
import { enviroment } from '../../../../enviroment';

@Component({
  selector: 'app-target-landing',
  imports: [],
  templateUrl: './target-landing.html',
  styleUrl: './target-landing.scss',
})
export class TargetLanding {
  @Input() targetData!: LandingPageTargetSectionInterface | null | undefined;

  addressUrl = enviroment.apiUrl;

  acticveTarget: number = 0;

  onChangeTarget(index: number) {
    this.acticveTarget = index;
  }
}
