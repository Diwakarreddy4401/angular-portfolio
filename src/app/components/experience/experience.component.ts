import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '../../data/profile.data';
import { staggerFadeUp } from '../../shared/section-animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [staggerFadeUp],
})
export class ExperienceComponent {
  @Input({ required: true }) profile!: Profile;
}
