import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  guardar() {
    if (this.formularioRegistro.valid) {
      const nombre = this.formularioRegistro.get('nombre')?.value || '';
      const password = this.formularioRegistro.get('password')?.value || '';
      const confirmacionPassword = this.formularioRegistro.get('confirmacionPassword')?.value || '';

      if (password === confirmacionPassword) {
        // Aquí puedes manejar el registro del usuario
        console.log('Registro exitoso:', nombre);
      } else {
        console.log('Las contraseñas no coinciden.');
      }
    } else {
      console.log('Formulario inválido.');
    }
  }
}

