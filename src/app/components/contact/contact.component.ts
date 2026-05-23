import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '../../data/profile.data';
import { fadeUp } from '../../shared/section-animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [fadeUp],
})
export class ContactComponent {
  @Input({ required: true }) profile!: Profile;

  copied = false;

  constructor() {}

  async copyEmail(): Promise<void> {
    await navigator.clipboard.writeText(this.profile.email);
    this.copied = true;
    window.setTimeout(() => (this.copied = false), 1600);
  }
}
