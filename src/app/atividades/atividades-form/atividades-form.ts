import { AlertModalService } from './../shared/alert-modal.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodolistService } from '../shared/todolist.service';
import { Location } from '@angular/common';
import { Atividade } from 'src/app/atividade';

@Component({
  selector: 'app-atividades-form',
  templateUrl: './atividades-form.html',
  styleUrls: ['./atividades-form.css'],
})
export class AtividadesFormComponent implements OnInit {
  formulario!: FormGroup | any;
  submitted = false;
  atividade: Object = {};
  atividadeSelecionada!: Atividade;
  public id = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private service: TodolistService,
    private alertService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => (this.id = params['id']));
    // console.log(this.id);
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      atividade: [null, Validators.required],
    });
  }

  validacaoForm(campo: string) {
    if (
      this.formulario.get(campo).invalid &&
      this.formulario.get(campo).touched
    ) {
      return 'is-invalid';
    }
    return '';
  }

  onCancel() {
    this.submitted = false;
    this.formulario.reset();
    this.location.back();
  }

  onSubmit(campo: string) {
    let descricao = document.getElementById(campo) as HTMLTextAreaElement;
    if (this.id !== undefined) {
      let body = {
        descricao: descricao.value,
      };
      this.atividade = this.service.update2(this.id, body).subscribe(
        (success) => {
          this.alertService.showAlertSuccess('Atividade editada com sucesso!');
          this.location.back();
        },
        (error) =>
          this.alertService.showAlertDanger(
            'Erro ao editar atividade, tente novamente!'
          )
      );
    } else {
      let body = {
        descricao: descricao.value,
        concluido: false,
        dataConclusao: new Date(0),
      };
      if (this.formulario.valid) {
        this.atividade = this.service.create(body).subscribe(
          (success) => {
            this.alertService.showAlertSuccess('Atividade criada com sucesso!');
            this.location.back();
          },
          (error) =>
            this.alertService.showAlertDanger(
              'Erro ao editar atividade, tente novamente!'
            )
        );
      }
    }
    this.submitted = true;

    // let descricao = document.getElementById(campo) as HTMLTextAreaElement;
    // let body = {
    //   descricao: descricao.value,
    //   concluido: false,
    //   dataConclusao: new Date(0),
    // };
    // if (this.formulario.valid) {
    //   this.atividade = this.service.create(body).subscribe(
    //     (success) => {
    //       this.alertService.showAlertSuccess('Curso criado com sucesso!');
    //       this.location.back();
    //     },
    //     (error) =>
    //       this.alertService.showAlertDanger(
    //         'Erro ao criar curso, tente novamente!'
    //       )
    //   );
    // }
  }
}
