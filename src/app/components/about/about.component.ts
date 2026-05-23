import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '../../data/profile.data';
import { staggerFadeUp } from '../../shared/section-animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [staggerFadeUp],
})
export class AboutComponent {
  @Input({ required: true }) profile!: Profile;
}
