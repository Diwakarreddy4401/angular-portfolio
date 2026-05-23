import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Profile } from '../../data/profile.data';
import { fadeUp } from '../../shared/section-animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [fadeUp],
})
export class HeroComponent implements OnInit, OnDestroy {
  @Input({ required: true }) profile!: Profile;

  typedText = '';
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timerId?: number;

  ngOnInit(): void {
    this.tickTypewriter();
  }

  ngOnDestroy(): void {
    window.clearTimeout(this.timerId);
  }

  private tickTypewriter(): void {
    const word = this.profile.tagline[this.wordIndex] ?? this.profile.title;
    this.typedText = word.slice(0, this.charIndex);

    if (!this.isDeleting && this.charIndex < word.length) {
      this.charIndex += 1;
      this.timerId = window.setTimeout(() => this.tickTypewriter(), 80);
      return;
    }

    if (!this.isDeleting && this.charIndex === word.length) {
      this.isDeleting = true;
      this.timerId = window.setTimeout(() => this.tickTypewriter(), 1200);
      return;
    }

    if (this.isDeleting && this.charIndex > 0) {
      this.charIndex -= 1;
      this.timerId = window.setTimeout(() => this.tickTypewriter(), 38);
      return;
    }

    this.isDeleting = false;
    this.wordIndex = (this.wordIndex + 1) % this.profile.tagline.length;
    this.timerId = window.setTimeout(() => this.tickTypewriter(), 260);
  }
}
