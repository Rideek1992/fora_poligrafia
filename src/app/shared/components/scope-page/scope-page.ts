import { Component, Input } from '@angular/core';
import { ScopeSectionInterface } from '../../../core/models/scope-section-interface';
import { MarkdownComponent } from 'ngx-markdown';
import { enviroment } from '../../../../enviroment';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-scope-page',
  imports: [MarkdownComponent, JsonPipe],
  templateUrl: './scope-page.html',
  styleUrl: './scope-page.scss',
})
export class ScopePage {
  @Input() scopeData!: ScopeSectionInterface | null | undefined;
  private env = enviroment;
  photoAddres = this.env.apiUrl;
}
