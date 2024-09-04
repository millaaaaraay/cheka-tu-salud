import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", [Validators.required, Validators.minLength(8)]),
    });
  }

  ngOnInit() {
  }

  // Método para manejar el evento de login
  ingresar() {
    if (this.formularioLogin.valid) {
      console.log("Formulario válido", this.formularioLogin.value);
      // Aquí podrías implementar la lógica para manejar el inicio de sesión
    } else {
      console.log("Formulario no válido");
    }
  }
}


