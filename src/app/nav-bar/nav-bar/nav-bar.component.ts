import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  template: `

  <header>
    <h1>Bienvenido a la Tienda de Plantas</h1>
    <nav>
        <ul>
            <li><a >Productos</a></li>
            <li><a [routerLink]="['/home']">Home</a></li>
            <li><a [routerLink]="['/about']">Sobre Nosotros</a></li>
            <li><a [routerLink]="['/contact']">Contacto</a></li>
        </ul>
    </nav>
</header>


  
  `,
  styleUrl: './nav-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent { }
