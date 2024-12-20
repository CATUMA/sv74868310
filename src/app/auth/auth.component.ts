import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [MaterialModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  codigoAlumno: string = '';
  password: string = '';

  constructor(private router: Router ) {}

  login() {
    const expectedCodigoAlumno = 'sv74868310'; 
    const expectedPassword = '27031999'; 

    if (this.codigoAlumno === expectedCodigoAlumno && this.password === expectedPassword) {
      sessionStorage.setItem('codigoAlumno', this.codigoAlumno);
      this.router.navigate(['/main']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
