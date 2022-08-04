import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAtividadesAbertasComponent } from './listar-atividades-abertas.component';

describe('ListarAtividadesAbertasComponent', () => {
  let component: ListarAtividadesAbertasComponent;
  let fixture: ComponentFixture<ListarAtividadesAbertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAtividadesAbertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAtividadesAbertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
