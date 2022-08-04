import { AlertModalService } from './../shared/alert-modal.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodolistService } from '../shared/todolist.service';
import { Location } from '@angular/common';
import { map, Observable, switchMap } from 'rxjs';
import { Atividade } from 'src/app/atividade';

@Component({
  selector: 'app-atividades-form',
  templateUrl: './atividades-form.html',
  styleUrls: ['./atividades-form.css'],
})
export class AtividadesFormComponent implements OnInit {
  formulario!: FormGroup | any;
  submitted = false;
  // atividades$!: Observable<Atividade[]>;
  atividade: Object = {};
  atividadeSelecionada!: Atividade;

  constructor(
    private formBuilder: FormBuilder,
    private service: TodolistService,
    private alertService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params.id;
    //     const atividade = this.service.listarId(id);
    //     atividade.subscribe(atividade => {
    //       this.updateForm(atividade);
    //     })
    //   }
    // )

    this.route.params
      .pipe(
        map((params: any) => params.id),
        switchMap((id) => this.service.listarId(id))
      )
      .subscribe((atividade) => this.updateForm(atividade));

    this.formulario = this.formBuilder.group({
      id: [null],
      atividade: [null, Validators.required],
    });
  }

  updateForm(atividade: any) {
    this.formulario.patchValue({
      id: atividade.id,
      nome: atividade.nome,
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
    this.submitted = true;
    let descricao = document.getElementById(campo) as HTMLTextAreaElement;
    let body = {
      descricao: descricao.value,
      concluido: false,
      dataConclusao: new Date(0),
    };
    if (this.formulario.valid) {
      this.atividade = this.service.create(body).subscribe();
      this.alertService.showAlertSuccess('Curso criado com sucesso!');
    }
  }
}
