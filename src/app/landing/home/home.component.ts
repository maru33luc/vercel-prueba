import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `




<section id="productos">
    <h2>Nuestras PlantasV2</h2>
    <div *ngFor="let planta of plantas" class="producto">
        <h3>{{ planta.nombre }}</h3>
        <p>{{ planta.descripcion }}</p>
        <p>Precio: {{ planta.precio | currency }}</p>
    </div>
</section>

<footer>
    <p>&copy; 2023 Tienda de Plantas. Todos los derechos reservados.</p>
</footer>

  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  plantas = [
    { nombre: 'Planta 1', descripcion: 'Descripción de la planta 1.', precio: 10 },
    { nombre: 'Planta 2', descripcion: 'Descripción de la planta 2.', precio: 15 },
    // Agrega más plantas según sea necesario
];
 }
