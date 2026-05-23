import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '../../data/profile.data';
import { staggerFadeUp } from '../../shared/section-animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [staggerFadeUp],
})
export class ProjectsComponent {
  @Input({ required: true }) profile!: Profile;
}
