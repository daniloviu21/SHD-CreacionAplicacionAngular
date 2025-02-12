import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navItems = [
    { label: 'Inicio', url: 'home' },
    { label: 'Pricing', url: '/pricing' },
    { label: 'Resources', url: '/resources' },
    { label: 'Company', url: '/company' },
    { label: 'Sign In', url: '/sign-in' }
  ];

  signUpUrl = '/sign-up';

}
