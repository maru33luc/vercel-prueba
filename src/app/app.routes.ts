import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ContactComponent } from './contacto/contact/contact.component';
import { HomeComponent } from './landing/home/home.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'about', component: AboutUsComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path:'', redirectTo: 'home', pathMatch: 'prefix'
    }
];
