import { Component, Input } from '@angular/core';
import { BusinnesSectionInterface } from '../../../core/models/businnes-section-interface';
import { InViewDirective } from '../../directives/in-view.directive';

@Component({
  selector: 'app-buissnes-page',
  imports: [InViewDirective],
  templateUrl: './buissnes-page.html',
  styleUrl: './buissnes-page.scss',
})
export class BuissnesPage {
  @Input() buissnessData: BusinnesSectionInterface | null | undefined = null;
}
