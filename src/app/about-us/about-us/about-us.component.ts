import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  template: `<section id="sobre-nosotros">
    <h2>Sobre Nosotros</h2>
    <p>Somos una tienda dedicada a ofrecer las mejores plantas para tu hogar.</p>
</section>`,
  styleUrl: './about-us.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent { }
