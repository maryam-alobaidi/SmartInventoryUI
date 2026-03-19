import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})



export class Login {
  auth = inject(AuthService);
  username = '';
  password = '';
  errorMessage =signal<string>('');

  login() {
    this.errorMessage.set('');
    
    const loginData = {
      username: this.username,
      password: this.password
    };

    this.auth.login(loginData).subscribe({
      next: (resp) => {
        console.log('Success: Redirecting...');
      },
      error: () => {
       this.errorMessage.set("Incorrect username or password");
      }
    });
  }
}