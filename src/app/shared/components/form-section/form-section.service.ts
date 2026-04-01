import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormPayloadInterface {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  conversatrionElement: string;
  consentContactGiven: boolean;
  consentContactVersion: string;
}

@Injectable({ providedIn: 'root' })
export class ContentFormService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api/contact';

  sendContactForm(data: ContactFormPayloadInterface): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
