import { Component, Input } from '@angular/core';
import { LandingPageProcessSectionInterface } from '../../../core/models/landing-page-interface';

@Component({
  selector: 'app-proccess-landing',
  imports: [],
  templateUrl: './proccess-landing.html',
  styleUrl: './proccess-landing.scss',
})
export class ProccessLanding {
  @Input() proccessData: LandingPageProcessSectionInterface | null | undefined = null;
}
