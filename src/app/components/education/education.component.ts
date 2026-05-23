import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '../../data/profile.data';
import { staggerFadeUp } from '../../shared/section-animations';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  animations: [staggerFadeUp],
})
export class EducationComponent {
  @Input({ required: true }) profile!: Profile;
}
