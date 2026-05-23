import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const fadeUp = trigger('fadeUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(28px)' }),
    animate('650ms cubic-bezier(.2,.8,.2,1)', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const staggerFadeUp = trigger('staggerFadeUp', [
  transition(':enter', [
    query(
      '.stagger-item',
      [
        style({ opacity: 0, transform: 'translateY(24px)' }),
        stagger(80, [
          animate('520ms cubic-bezier(.2,.8,.2,1)', style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);
