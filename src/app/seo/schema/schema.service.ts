import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  updateSchema(schema: Record<string, any>): void {
    this.removeSchema();
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'dynamic');
    script.text = JSON.stringify(schema);

    this.document.head.appendChild(script);
  }

  removeSchema(): void {
    const oldSchema = this.document.querySelector('script[data-schema="dynamic"]');

    if (oldSchema) {
      oldSchema.remove();
    }
  }
}
