import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-popup',
  imports: [RouterLink],
  templateUrl: './cookie-popup.html',
  styleUrl: './cookie-popup.scss',
  standalone: true,
})
export class CookiePopup {
  @Input() isVisible: boolean = false;

  @Output() accept = new EventEmitter<void>();
  @Output() reject = new EventEmitter<void>();

  isOpenBanner: boolean = true;

  onAccept(): void {
    this.accept.emit();
  }

  onReject(): void {
    this.reject.emit();
  }

  closeBanner() {
    this.isOpenBanner = !this.isOpenBanner;
  }
}
