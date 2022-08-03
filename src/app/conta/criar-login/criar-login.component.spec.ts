import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarLoginComponent } from './criar-login.component';

describe('CriarLoginComponent', () => {
  let component: CriarLoginComponent;
  let fixture: ComponentFixture<CriarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
