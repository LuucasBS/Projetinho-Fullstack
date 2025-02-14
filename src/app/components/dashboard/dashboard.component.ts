import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  isMenuExpanded:boolean = true;

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'ph ph-cow', route: '/dashboard' },
    { label: 'Cadastrar', icon: 'ph ph-user-plus', route: '/itens' },
    { label: 'Configurações', icon: 'ph ph-gear', route: '/configuracoes' }
  ];

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }
}
