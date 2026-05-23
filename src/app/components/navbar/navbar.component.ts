import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';

import { Profile } from '../../data/profile.data';

type Theme = 'dark' | 'light';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  @Input({ required: true }) profile!: Profile;

  readonly navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'stack', label: 'Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  activeSection = 'home';
  isMenuOpen = false;
  isScrolled = false;
  theme: Theme = 'dark';

  ngOnInit(): void {
    this.theme = this.getInitialTheme();
    this.applyTheme(this.theme);
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 16;
    this.updateActiveSection();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.theme);
  }

  private getInitialTheme(): Theme {
    const storedTheme = window.localStorage.getItem('portfolio-theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.dataset['theme'] = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }

  private updateActiveSection(): void {
    const scrollPosition = window.scrollY + 130;

    for (const item of this.navItems) {
      const section = document.getElementById(item.id);
      if (!section) {
        continue;
      }

      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        this.activeSection = item.id;
        break;
      }
    }
  }
}
