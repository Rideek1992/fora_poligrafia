import { Component, Input, OnInit } from '@angular/core';
import { LandingPageIntroSectionInterface } from '../../../core/models/landing-page-interface';

@Component({
  selector: 'app-intro-landing',
  imports: [],
  templateUrl: './intro-landing.html',
  styleUrl: './intro-landing.scss',
})
export class IntroLanding implements OnInit {
  @Input() introData: LandingPageIntroSectionInterface | null | undefined = null;

  lenghtItems: number | undefined;
  activeItem: number = 1;

  ngOnInit() {
    this.lenghtItems = this.introData?.items?.length;
  }

  onChangeItems(index: number) {
    this.activeItem = index;
  }
}
