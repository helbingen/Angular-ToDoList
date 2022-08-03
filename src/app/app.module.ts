import { AlertModalComponent } from './atividades/shared/alert-modal/alert-modal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TodolistService } from './atividades/shared/todolist.service';
import { LoginComponent } from './conta/login/login.component';
import { AtividadesFormComponent } from './atividades/atividades-form/atividades-form';
import { ListarAtividadesComponent } from './atividades/listar-atividades/listar-atividades.component';
import { CriarLoginComponent } from './conta/criar-login/criar-login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AtividadesFormComponent,
    ListarAtividadesComponent,
    CriarLoginComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent],
  entryComponents: [AlertModalComponent],
})
export class AppModule {}
