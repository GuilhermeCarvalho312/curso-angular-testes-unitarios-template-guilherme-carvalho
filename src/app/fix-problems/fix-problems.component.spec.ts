// Importar os módulos e componentes necessários de Angular e outras dependências
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

// Importar o componente sendo testado
import { FixProblemsComponent } from './fix-problems.component';

import { MatDialogModule } from '@angular/material/dialog';
import { StubComponent } from '../stub/stub.component';
import { of } from 'rxjs';

// Iniciar suíte de teste para o FixProblemsComponent
describe('FixProblemsComponent', () => {
  let component: FixProblemsComponent;
  let fixture: ComponentFixture<FixProblemsComponent>;

  // Antes de cada caso de teste nesta suíte, configurar os módulos de teste necessários e criar um novo fixture e instância do componente
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FixProblemsComponent],
      imports: [MatDialogModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(FixProblemsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  // Testar que o componente foi criado com sucesso
  it('deve ser criado com sucesso', () => {
    expect(component).toBeTruthy();
  });

  // it('should open a dialog with width 250px and empty data', () => {
  //   const dialogRefSpy = jest
  //     .spyOn(MatDialog.prototype, 'open')
  //     .mockReturnValue({
  //       afterClosed() {
  //         return of(true);
  //       },
  //     } as any);

  //   component.openDialog();

  //   expect(dialogRefSpy).toHaveBeenCalledTimes(1);
  //   expect(dialogRefSpy).toHaveBeenCalledWith(StubComponent, {
  //     width: '250px',
  //     data: {},
  //   });
  // });
});
