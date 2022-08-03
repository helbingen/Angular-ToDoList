import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Atividade } from '../../atividade';
import { TodolistService } from '../shared/todolist.service';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-listar-atividades',
  templateUrl: './listar-atividades.component.html',
  styleUrls: ['./listar-atividades.component.css'],
})
export class ListarAtividadesComponent implements OnInit {
  bsModalRef!: BsModalRef;
  atividades$!: Observable<Atividade[]>;
  atividadeSelecionada!: Atividade;

  constructor(
    private service: TodolistService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.handleError()
    this.atividades$ = this.service.listar();
  }

  onDelete(id: number) {
    this.atividades$ = this.service.remove(id);
  }

  onUpdate(id: number) {
    this.router.navigate(['edit', id]), { relativeTo: this.route };
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message =
      'Erro ao carregar atividades. Tente novamente mais tarde.';
  }
}
