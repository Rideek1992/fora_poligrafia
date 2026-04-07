import { Component, Input, OnInit } from '@angular/core';
import { BusinnesSectionInterface } from '../../../core/models/businnes-section-interface';
import { InViewDirective } from '../../directives/in-view.directive';
import { enviroment } from '../../../../enviroment';

@Component({
  selector: 'app-buissnes-page',
  imports: [InViewDirective],
  templateUrl: './buissnes-page.html',
  styleUrl: './buissnes-page.scss',
})
export class BuissnesPage implements OnInit {
  @Input() buissnessData: BusinnesSectionInterface | null | undefined = null;
  protected readonly enviroment = enviroment;

  ngOnInit() {}
}
