import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-login',
  templateUrl: './criar-login.component.html',
  styleUrls: ['./criar-login.component.css'],
})
export class CriarLoginComponent implements OnInit {
  formulario!: FormGroup | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ], //REGEX para validação de e-mail, por algum motivo o Validators.email não funcionou
      senha: [null, Validators.required],
    });
    // console.log(this.formulario.controls['email'])
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = formGroup.get(campo);
      controle?.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  Login() {}
}
