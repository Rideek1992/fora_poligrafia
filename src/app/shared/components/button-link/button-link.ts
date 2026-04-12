import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-link',
  imports: [],
  templateUrl: './button-link.html',
  styleUrl: './button-link.scss',
  standalone: true,
})
export class ButtonLink {
  @Input() link: string | undefined = '';
  @Input() name: string | undefined = '';
  @Input() fragment: string | undefined = '';
  @Input() idLink!: string | undefined;
}
