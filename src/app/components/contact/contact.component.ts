import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Profile } from '../../data/profile.data';
import { fadeUp } from '../../shared/section-animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [fadeUp],
})
export class ContactComponent {
  @Input({ required: true }) profile!: Profile;

  copied = false;
  isSending = false;
  sent = false;

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  async copyEmail(): Promise<void> {
    await navigator.clipboard.writeText(this.profile.email);
    this.copied = true;
    window.setTimeout(() => (this.copied = false), 1600);
  }

  sendMessage(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid || this.isSending) {
      return;
    }

    this.isSending = true;
    this.sent = false;
    window.setTimeout(() => {
      this.isSending = false;
      this.sent = true;
      this.contactForm.reset();
    }, 950);
  }
}
