// src/app/app.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterModule, NavBarComponent]
})
export class AppComponent {
    
}