import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-login',
  templateUrl: './criar-login.component.html',
  styleUrls: ['./criar-login.component.css']
})
export class CriarLoginComponent implements OnInit {

  account = {
    nome: '',
    email: '',
    senha: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
