import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-link',
  imports: [],
  templateUrl: './button-link.html',
  styleUrl: './button-link.scss',
})
export class ButtonLink {
  @Input() link: string = '';
  @Input() name: string = '';
  @Input() fragment: string = '';
}
