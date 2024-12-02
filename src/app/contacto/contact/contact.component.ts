import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `<section id="contacto">
    <h2>Contacto</h2>
    <p>Para más información, envíanos un correo a: infotiendadeplantas.com</p>
</section>`,
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent { }
