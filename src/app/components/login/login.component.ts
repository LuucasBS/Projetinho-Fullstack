import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, CommonModule,FormsModule, RouterModule ],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = { username: '', password: '' };
  errorMessage = '';

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/dashboard']);
  }
}
