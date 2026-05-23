import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Profile } from '../../data/profile.data';
import { staggerFadeUp } from '../../shared/section-animations';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
  animations: [staggerFadeUp],
})
export class TechStackComponent {
  @Input({ required: true }) profile!: Profile;
}
